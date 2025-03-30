---
title: Iterator et Visitor
date: 2025-03-21T03:30:00+01:00
lastmod: 2025-03-21T03:30:00+01:00
author: Anthony Cyrille
categories:
  - software engineering
tags:
  - design patterns
  - object-oriented
  - advanced
draft: false
---

Il existe un lien subtil entre les patterns Iterator et Visitor.
En un sens, **l'un est même une généralisation de l'autre** : le premier est homogène, le second hétérogène.

---

## Iterator

Faisons déjà un petit rappel sur le pattern **Iterator**. C'est un pattern extrêmement puissant qui permet d'itérer (no
joke) une séquence, peu importe sa source.
C'est d'ailleurs ce qui le rend puissant et potentiellement dangereux : derrière un Iterator, il peut y avoir...

- Un tableau en mémoire, tout ce qu'il y a de plus banal
- Une séquence infinie (un générateur de nombre aléatoire, par exemple)
- De l'I/O avec un fichier sur disque par exemple
- Ou pire, des appels réseau

Rien ne permet de le savoir, et c'est justement un des piliers de la POO : **l'encapsulation.**

> Je ne sais pas qui tu es.
>
> Je ne sais pas non plus comment tu fais ce que tu fais.
>
> **Mais je sais que tu sais le faire.**

_C'est beau ce que tu dis._

Je sais.

Quoiqu'il en soit, l'Iterator permet de parcourir une collection sans briser l'encapsulation de l'objet.

Le Passive Iterator va même encore plus loin car il laisse la charge de l'itération à l'objet lui-même. Vous n'avez qu'à
lui donner une fonction à appeler à chaque itération.

Seulement, dans les deux cas, l'Iterator est limité à une séquence homogène.

C'est à dire que les objets de la séquence ne sont itérable que par un type commun.

```ts
interface Node {
  getText(): string;
}

class Paragraph implements Node {
}

class Link implements Node {
}

const graph = new Graph();
graph.add(new Paragraph());
graph.add(new Link());

const html = "";
graph.iterate((node: Node) => {
  html += node.getText();
})
```

Le problème intervient lorsqu'on veut rajouter un nouveau type de noeud.

```ts
class Image implements Node {
  getUrl(): string {
  }

  // what about getText ?
}
```

Evidemment, une Image n'est pas un texte et la méthode `getText()` n'a rien à y faire.

On pourrait retourner `null` ou émettre une erreur, mais ça s'apparenterait à
un [Refused Bequest](https://luzkan.github.io/smells/refused-bequest) et à une
violation latente de [Liskov Substitution Principle](https://www.youtube.com/watch?v=mUPM6lmcmcU).

Donc la méthode `getText` n'a rien à faire dans `Node`.

```ts
interface Node {
}

class Paragraph implements Node {
  getText(): string {
  }
}

class Link implements Node {
  getText(): string {
  }
}

class Image implements Node {
  getUrl(): string {
  }
}

const graph = new Graph();
graph.add(new Paragraph());
graph.add(new Link());
graph.add(new Image())

const html = "";
graph.iterate((node: Node) => {
  // What now ?
})
```

Comment faire pour recomposer notre document HTML ? Notre interface `Node` n'a plus de comportement, c'est devenu un *
*Marker Interface**.

On a que deux solutions : une Anti-OO et une trop OO.

### Anti-OO

Faut s'accorhcer.

S'acochcher.

S'accrocher, pardon.

```ts
const html = "";
graph.iterate((node: Node) => {
  if (node instanceof Paragraph) {
    html += `<p>${node.getText()}</p>`;
  } else if (node instanceof Link) {
    html += `<a>${node.getText()}</a>`;
  } else if (node instanceof Image) {
    html += `<img src="${node.getUrl()}">`;
  }
})
```

J'ai au moins 3 raisons de ne pas aimer cette approche.

- On me passe un `Node` qui me permet d'ignorer complètement la hiérarchie de classes mais je me vois forcé de faire un
  downcast et donc de CONNAITRE la hiérarchie de classes.
- Si j'implémente un nouveau noeud, j'ai toutes les chances d'oublier de le traiter ici.
- Si j'ai d'autres opérations (générer un PDF ou un JSON), j'vais devoir répéter cette logique à chaque opération

Le code ne m'aide pas du tout. Si je rajoute un noeud, je dois me rappeler de mettre à jour toutes les opérations.

Si je rajoute une opération, je dois répéter ce downcast.

### Trop OO

Celui là fût très populaire dans les cercles OO.

```ts
interface Node {
  toHtml(): string;
}

class Paragraph implements Node {
  toHtml(): string {
    return `<p>${this.getText()}</p>`;
  }
}

class Link implements Node {
  toHtml(): string {
    return `<a>${this.getText()}</a>`;
  }
}

class Image implements Node {
  toHtml(): string {
    return `<img src="${this.getUrl()}">`;
  }
}

const graph = new Graph();
const html = "";
graph.iterate((node: Node) => {
  html += node.toHtml();
})
```

Bonne nouvelle, je n'ai plus de spread au niveau des noeuds. Je peux rajouter un nouveau noeud sans mettre à jour mon
opération de construction HTML.

J'ai une encapsulation ✨parfaite ✨.

Mais j'ai au moins 3 raisons de ne pas aimer cette approche non plus.

- Si je dois personnaliser l'output HTML, je dois rajouter tout un tas de propriétés spécifique à chaque noeud
- Si je dois rajouter une opération, je dois rajouter une méthode à chaque noeud
- L'air de rien mon Node commence à devenir un **bloatware**..

L'approche est très bonne si on a qu'une seule opération à faire.

## Une autre approche...

Comme on a pu le voir, les deux approches qu'on vient de voir ont chacunes beaucoup de faiblesses.

L'une reporte les erreurs au runtime, l'autre scale mal avec la quantité d'opérations.

Existe t'il une solution qui allie les deux ? Qui nous offre des sécurités au compile-time et qui scale bien avec la
quantité d'opérations ?

La réponse est évidemment le pattern **Visitor**.

Le Pattern visitor reconnait que nous avons un problème à deux **axes**, à deux **variabilités** :

- La quantité de noeuds peut varier
- La quantité d'opérations peut varier aussi

![Opérations et Noeuds](/posts/iterator-et-visitor/nodes_operations.jpg)

On obtient rapidement une matrice qui détermine toutes les possibilités de notre système pour un set de noeuds et
d'opérations donné.

J'avoue que ça fait très sérieux comme jargon d'un coup, on va chill un peu.

Le pattern Visitor s'inspire du meilleur des deux mondes qu'on a vu plus haut et nous propose de faire la chose
suivante :

- Et si, au lieu de rajouter une méthode `toHtml` et `toPDF`, tu rajoutais une seule méthode `visit` ?
- Et si tu encapsulais ton opération dans un objet ?
- Et si, au lieu de faire un downcast au runtime, tu implémentais une méthode par noeud ?
- Et si tu définissais une abstraction qui liste tous les noeuds possible ?

On va y aller pas à pas.

D'abord, on définit une interface qu'on va appeler `Operation`. Normalement, on l'appelle `Visitor`, mais je vois pas le
rapport avec les droits de visites, donc le nom va aller se faire foutre.

```ts
interface Operation {
}

interface Node {
  accept(operation: Operation): void;
}
```

OK, donc on a déjà une opération qu'on va appeler, ma foi, `HTMLConverter`

```ts
class HTMLConverter implements Operation {
}
```

Super, maintenant ce serait bien que ce HTMLConverter soit capable de convertir tous les noeuds qui existent.

```ts
class HTMLConverter implements Operation {
  convertParagraph(paragraph: Paragraph) {
    return `<p>${paragraph.getText()}</p>`;
  }

  convertLink(link: Link) {
    return `<a>${link.getText()}</a>`;
  }

  convertImage(image: Image) {
    return `<img src="${image.getUrl()}">`;
  }
}
```

Petit problème : les méthodes de ce HTMLConverter retournent des `string`. Or, rien ne dit que mes autres Converter
travailleront avec
des strings. D'ailleurs, rien ne dit que je vais une conversion ! Si ça se trouve, je veux juste compter le nombre de
paragraphes.

```ts 
class ParagraphCounter implements Operation {
  convertParagraph(paragraph: Paragraph) {
    // what now ?
  }

  convertLink(link: Link) {
  }

  convertImage(image: Image) {
  }
}
```

Bon d'accord, finalement, peut-être que parler de `conversion` est trop spécifique. Et si on utilisait un terme plus
générique ?
Le pattern `Visitor` propose le mot `accept`, ce qui est pas mal.

```ts
class ParagraphCounter implements Operation {
  acceptParagraph(paragraph: Paragraph) {
    // what now ?
  }

  acceptLink(link: Link) {
  }

  acceptImage(image: Image) {
  }
}
```

On a plus du tout de notion de conversion qui doit retourner quelque chose, mais vraiment d'une opération. On peut
maintenant
sauvegarder le résultat dans une propriété de l'objet.

```ts
class ParagraphCounter implements Operation {
  private count = 0;

  acceptParagraph(paragraph: Paragraph) {
    this.count++;
  }

  acceptLink(link: Link) {
  }

  acceptImage(image: Image) {
  }
}
```

Et revenir à notre HTMLConverter.

```ts
class HTMLConverter implements Operation {
  private html = "";

  acceptParagraph(paragraph: Paragraph) {
    this.html += `<p>${paragraph.getText()}</p>`;
  }

  acceptLink(link: Link) {
    this.html += `<a>${link.getText()}</a>`;
  }

  acceptImage(image: Image) {
    this.html += `<img src="${image.getUrl()}">`;
  }
}
```

Good, on peut maintenant mettre à jour nos Noeuds.

```ts
class TextNode implements Node {
  accept(operation: Operation) {
    operation.acceptTextNode(this);
  }
}
```

Ah ! On a oublié quelque chose. C'est l'interface Operation qui doit définir les méthodes, vu que notre TextNode doit
fonctionner pour n'importe quelle opération.

```ts
interface Operation {
  acceptTextNode(node: TextNode): void;

  acceptLink(node: Link): void;

  acceptImage(node: Image): void;
}
```

Back to the nodes.

```ts
class TextNode implements Node {
  accept(operation: Operation) {
    operation.acceptTextNode(this);
  }
}

class Link implements Node {
  accept(operation: Operation) {
    operation.acceptLink(this);
  }
}

class Image implements Node {
  accept(operation: Operation) {
    operation.acceptImage(this);
  }
}
```

Et voilà, finito. On peut maintenant générer notre HTML hyper facilement.

```ts
interface Operation {
  acceptTextNode(node: TextNode): void;

  acceptLink(node: Link): void;

  acceptImage(node: Image): void;
}

class TextNode implements Node {
  accept(operation: Operation) {
    operation.acceptTextNode(this);
  }
}

class Link implements Node {
  accept(operation: Operation) {
    operation.acceptLink(this);
  }
}

class Image implements Node {
  accept(operation: Operation) {
    operation.acceptImage(this);
  }
}

class HTMLConverter implements Operation {
  private html = "";

  acceptParagraph(paragraph: Paragraph) {
    this.html += `<p>${paragraph.getText()}</p>`;
  }

  acceptLink(link: Link) {
    this.html += `<a>${link.getText()}</a>`;
  }

  acceptImage(image: Image) {
    this.html += `<img src="${image.getUrl()}">`;
  }
}

const graph = new Graph();
const htmlConverter = new HTMLConverter();
graph.iterate(htmlConverter)
```

Parfait ! On obtient les bénéfices des deux approches précédentes :

- Je peux rajouter une opération sans impacter les noeuds
- Lorsque je rajoute un nouveau noeud, le compilateur me rappelle de mettre à jour mes opérations

A retenir :

- **Iterator** : opérations hétérogènes, collection homogène (une dimension)
- **Visitor** : opérations hétérogènes, collection hétérogène (deux dimensions)