---
title: Refused Bequest
date: 2025-03-22T03:30:00+01:00
lastmod: 2025-03-22T03:30:00+01:00
author: Anthony Cyrille
categories:
  - software engineering
tags:
  - code smells
  - advanced
  - object-oriented
draft: false
---

Dans le développement orienté objet, il est courant de se retrouver avec des hiérarchies de classes. Et tôt ou tard, on
finit par implémenter une sous-classe qui n'a pas besoin de toutes les méthodes de la super classe. Ou pire, qui refuse
d'implémenter certaines méthodes de l'interface dont elle hérite. Est-ce grave ?

---

Choisissons un petit fil rouge pour illustrer le problème. Imaginons que nous voulions développer une collection avec
une seule méthode `select` pour modifier les éléments de la collection.

On créé une interface `Collection` avec plusieurs dérivées car il y a plusieurs moyens d'implémenter une collection.

```ts
interface Selector {
  approve(element: number): boolean;
}

interface Collection {
  select(selector: Selector): number[];
}

class ArrayCollection implements Collection {
  private elements: number[] = [];

  select(selector: Selector): number[] {
    return this.elements.filter((element, index) => selector.approve(index));
  }
}
```

Jusque là rien de bien étrange. On peut se créer un `Selector` qui récupère uniquement les nombres pairs.

```ts
class EvenSelector implements Selector {
  approve(element: number): boolean {
    return element % 2 === 0;
  }
}

const evenNumbers = collection.select(new EventSelector());
```

:::notice{.info}
Le lecteur assidu nous fera remarquer qu'on pourrait juste passer une fonction ici, et ce lecteur assidu aurait bien
raison si le code s'arrêtait là.
:::

Le temps passe et on a maintenant besoin de rajouter une méthode pour supprimer des éléments de la collection en suivant
ce même schéma.
Par chance, on peut réutiliser notre Selector pour le faire.

```ts
interface Selector {
  approve(element: number): boolean;
}

interface Collection {
  select(selector: Selector): number[];

  remove(selector: Selector): void;
}

class ArrayCollection implements Collection {
  private elements: number[] = [];

  select(selector: Selector): number[] {
    return this.elements.filter((element, index) => selector.approve(index));
  }

  remove(selector: Selector) {
    this.elements = this.elements.filter((element, index) => !selector.approve(index));
  }
}
```

Rien de plus simple. On peut même utiliser notre `EvenSelector` pour supprimer les nombres pairs.

```ts
class NumberRemover {
  remove(collection: Collection) {
    collection.remove(new EvenSelector());
  }
}
```

:::notice{.info}
Ce que l'on vient de voir s'appelle une **propriété émergente**. Nous avons gagné la capacité de retirer les nombres
pairs d'une collection (peut importe la collection)
sans avoir à mettre à jour le sélecteur. C'est ce qui rend l'orienté objet badass.
:::

Mais quelques jours après, on a besoin d'implémenter une collection immutable. Ce qui est fâcheux car l'interface de
collection
permet de supprimer des éléments de notre collection. Pourtant, une collection immutable reste une collection...

```ts
class ImmutableCollection implements Collection {
  private elements: number[] = [];

  select(selector: Selector): number[] {
    return this.elements.filter((element, index) => selector.approve(index));
  }

  remove(selector: Selector) {
    throw new Error("Cannot remove elements from an immutable collection");
  }
}
```

Vous commencez à voir où est le problème ?

```ts
class NumberRemover {
  remove(collection: Collection) {
    // just pass in an Immutable collection and 💥💣
    collection.remove(new EvenSelector());
  }
}
```

Du point de vue de `NumberRemover`, il n'y a aucun moyen de savoir si la collection passée en paramètre est immutable ou
non.
Pour `NumberRemover`, une collection implémente ces deux méthodes, il peut envoyer les messages définis par l'interface,
et logiquement,
ça devrait fonctionner.

**Rien n'indique dans l'interface que la méthode `remove` peut lever une exception.**

C'est précisément ce mismatch entre l'attente que l'on a d'un objet et son comportement que l'on appelle un **refused
bequest**.

Ce code smell est généralement bénin, mais dans notre cas il pose un vrai problème. En temps que développeur, je
m'attend à ce que
l'objet avec lequel je communique respecte son contrat, et m'indique à minima s'il en est incapable.

On a alors plusieurs solutions qui s'offrent à nous :

- Depuis `NumberRemover`, on peut downcaster Collection et vérifier qu'il ne s'agisse pas d'une `ImmutableCollection`
- On peut indiquer dans l'interface, d'une façon ou d'une autre, que la méthode peut échouer (avec une
  `Caught Exception` par exemple)
- On peut rajouter une méthode `isRemovable`

## Downcast

Le downcast ressemblerait à ça.

```ts
class NumberRemover {
  remove(collection: Collection) {
    if (collection instanceof ImmutableCollection) {
      throw new Error("Cannot remove elements from an immutable collection");
    }

    collection.remove(new EvenSelector());
  }
}
```

Evidemment, c'est dégueulasse.

- Déjà, comment fait-on lorsqu'on a plusieurs implémentations de collections ? On va devoir rajouter un `instanceof`
  pour chaque implémentation et violer OCP.
- Ensuite, puisqu'on déclare accepter n'importe quelle collection, pourquoi vouloir vérifier le type de la collection ?
  C'est tout ce qu'il y a de plus procédural : on ne fait pas confiance à l'objet, on veut savoir ce qu'il est, on lui
  demande ses papiers d'identité car visiblement il faut avoir un âge légal pour pouvoir supprimer des éléments...

## Caught Exception

On peut pas vraiment faire ça en TS, mais on pourrait imaginer une interface comme ça.

```ts
interface Result {
  isSuccess(): boolean;

  isFailure(): boolean;
}

interface Collection {
  select(selector: Selector): number[];

  remove(selector: Selector): Result;
}

class MutableCollection implements Collection {
  private elements: number[] = [];

  select(selector: Selector): number[] {
    return this.elements.filter((element, index) => selector.approve(index));
  }

  remove(selector: Selector): Result {
    this.elements = this.elements.filter((element, index) => !selector.approve(index));
    return new Success();
  }
}

class ImmutableCollection implements Collection {
  private elements: number[] = [];

  select(selector: Selector): number[] {
    return this.elements.filter((element, index) => selector.approve(index));
  }

  remove(selector: Selector): Result {
    return new Failure("Cannot remove elements from an immutable collection");
  }
}

class NumberRemover implements Selector {
  remove(collection: Collection) {
    const result = collection.remove(new EvenSelector());
    if (result.isFailure()) {
      // what now ?
    }
  }
}
```

Ce qui n'est pas forcément une mauvaise idée car en cas d'échec le code n'émet plus d'exception mais... on a quand même
eu une erreur.

`NumberRemover` prétend pouvoir supprimer des éléments de la collection, mais il ment comme il respire.

## isRemovable

```ts
interface Collection {
  select(selector: Selector): number[];

  remove(selector: Selector): void;

  isRemovable(): boolean;
}

class MutableCollection implements Collection {
  private elements: number[] = [];

  select(selector: Selector): number[] {
    return this.elements.filter((element, index) => selector.approve(index));
  }

  remove(selector: Selector): Result {
    this.elements = this.elements.filter((element, index) => !selector.approve(index));
    return new Success();
  }

  isRemovable(): boolean {
    return true;
  }
}

class ImmutableCollection implements Collection {
  private elements: number[] = [];

  select(selector: Selector): number[] {
    return this.elements.filter((element, index) => selector.approve(index));
  }

  remove(selector: Selector): Result {
    return new Failure("Cannot remove elements from an immutable collection");
  }

  isRemovable(): boolean {
    return false;
  }
}


class NumberRemover implements Selector {
  remove(collection: Collection) {
    if (collection.isRemovable()) {
      collection.remove(new EvenSelector());
    }
  }
}
```

Vous voyez une différence avec le Result ? Moi pas. Les avantages et les inconvénients sont les mêmes.

:::notice{.info}
D'une manière générale, dans un code orienté objet, méfiez vous des `if`.
A chaque fois que vous avez un `if`, vous avez potentiellement un problème de conception. C'est loin d'être toujours le
cas,
mais de mon expérience, ça l'est souvent.

Idéalement, vous devriez limiter vos `if` à de la création d'objet, à l'intérieur d'une `factory`.
:::

## Le coeur du problème

Dans chaque cas, on délègue la détection du problème au niveau du `runtime`. Tout ce qu'on sait, c'est que le code
risque
de nous exploser à la figure à un moment donné car on permet des incohérences dans notre système.

Il s'avère que dans ce cas, le problème est que `ImmutableCollection` n'est... pas une collection. En tout cas, pas
selon
la définition qu'on se donne d'une collection.

```ts
interface Collection {
  select(selector: Selector): number[];

  remove(selector: Selector): void;
}
```

Ce contrat stipule que toute collection doit être capable de supprimer des éléments. Or, `ImmutableCollection` ne peut
pas. Par conséquent,
`ImmutableCollection` n'est pas une collection.

Le souci vient donc de la définition même de nos objets. D'une manière ou d'une autre, il faut qu'on soit capable de
distinguer une collection mutable
d'une collection qui ne l'est pas car ces deux objets sont traités différemments.

On pourrait imaginer deux hiérarchies de classe, par exemple.

```ts
interface ImmutableCollection {
  select(selector: Selector): number[];
}

interface Collection extends ImmutableCollection {
  remove(selector: Selector): void;
}
```

Et ainsi modifier notre `NumberRemover`

```ts
class NumberRemover implements Selector {
  remove(collection: Collection) {
    collection.remove(new EvenSelector());
  }
}
```

Tadam ! Plus de problème, plus de `if`. Certaines collections sont des `Collection` qui sont donc mutables, et d'autres
sont des
`ImmutableCollection`. On a cuisiné à l'intérieur même du système de type les contraintes de notre système, en plus d'en
avoir
réduit la complexité cyclomatique. Beaucoup plus simple à tester !

Gardez en tête que **Refused Bequest** est un code smell, pas un anti-pattern. C'est un syndrôme d'un potentiel
problème, et comme on vient
de le voir dans cet article (car dans les articles, les exemples sont toujours parfaits) c'est souvent un indicateur d'
un code pas vraiment objet.

Mais ce n'est pas toujours le cas. En fait, ça dépend vraiment des clients des objets de notre système. Un exemple.

```ts 
interface User {
  changeEmailAddress(email: string): void;
}

class RegularUser implements User {
  changeEmailAddress(email: string) {
    // code
  }
}

class BannedUser implements User {
  changeEmailAddress(email: string) {
    throw new ClientError("You are banned !")
  }
}

interface UserRepository {
  findById(id: string): Promise<User>
}

class UserService {
  constructor(private readonly repository: UserRepository) {
  }

  changeEmailAddress(id: string, email: string) {
    const user = this.userRepository.findById(id);
    user.changeEmailAddress(email);
  }
}
```

Dans ce cas, on peut partir du principe que notre système est conçu pour attraper les opérations impossibles (le
UserService est
invoqué depuis un contrôleur qui peut renvoyer une erreur 400 lorsqu'il intercept un ClientError). C'est justement une
façon
élégante de gérer les erreurs sans introduire de condition (on déteste vraiment les `if`. C'est pas un mauvais bois
pourtant...)

Là, on a pas de Refused Bequest car c'est un **comportement attendu**. Evidemment, la contrainte est implicite car elle
découle
de l'architecture du système, mais c'est une contrainte extrêmement courante et facile à deviner.

Gardez en tête que le smell dépend uniquement du point de vue de l'objet client, celui qui exploite le comportement. Un
**Refused Bequest** pour un objet ne le sera pas pour un autre, même si les deux objets communiquent avec le même 3e
objet.