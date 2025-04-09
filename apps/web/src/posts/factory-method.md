---
title: Factory Method
date: 2025-04-09T03:30:00+01:00
lastmod: 2025-03-09T03:30:00+01:00
author: Anthony Cyrille
categories:
  - software engineering
tags:
  - design patterns
  - object-oriented
  - advanced
draft: false
---

Vous pensez qu'il suffit de créer une classe statique et d'y ajouter une méthode factory pour obtenir un
**Factory Method** ? Alors vous passez à côté de toute la subtilité de ce pattern. Voyons ça ensemble.

---

## Template Method

Pour bien comprendre comment fonctionne le pattern **Factory Method** (qui est très mal nommé), il faut comprendre un
second pattern intitulé **Template Method** (lui aussi extrêmement mal nommé).

Admettions que vous ayiez une classe `Bow` qui représente un Arc qui vous permet de tirer des flèches. Vous savez déjà
que vous allez avoir plusieurs types d'Arc : `LongBow` ou `RegularBow` par exemple.

Vous pouvez définir le comportement général de la classe `Bow` mais déléguer aux classes enfants certains aspects de
l'implémentation.
On peut par exemple définir la portée de l'Arc dans une classe enfant.

```ts
abstract class Bow {
  hit(ennemy) {
    if (ennemy.isInRange(this.range())) {
      ennemy.takeDamage(100);
    }
  }

  abstract range(): number;
}

class RegularBow extends Bow {
  range(): number {
    return 100;
  }
}

class LongBow extends Bow {
  range(): number {
    return 500;
  }
}
```

Ici, la classe `Bow` définit le comportement général de l'arc et notamment la méthode `hit` qui frappe un adversaire à
condition
qu'il soit à portée. Seulement, la portée de l'arc varie, et cette variation est encodée dans la méthode abstraite
`range`. Chaque
classe concrète peut déterminer sa propre portée.

C'est ça l'essence du `Template Method`. Une classe parent définit l'algorithme générale, les classes enfants
définissent les variations.
On peut dire aussi que la classe parent laisse ouvert des *hooks* qui permettent aux classes enfants d'entrer en jeu à
certains points
clés de l'algorithme.

## Factory Method

Disons maintenant que chaque Arc puisse tirer différentes flèches. On définit une interface `Arrow` pour représenter une
flèche
avec les dégats qu'elle inflige et éventuellement d'autres propriétés comme son type élémentaire (feu, eau, etc.).

```ts
interface Arrow {
  getDamage(): number;

  getType(): string;
}
```

On laisse la possibilité à chaque Arc de créer ses propres flèches. Pour se faire, on définit une méthode `createArrow`
dans la classe `Bow`.

```ts
abstract class Bow {
  hit(ennemy) {
    if (ennemy.isInRange(this.range())) {
      ennemy.takeDamage(this.createArrow().getDamage());
    }
  }

  abstract range(): number;

  abstract createArrow(): Arrow;
}
```

Vous avez réuni ici les deux conditions nécessaires pour que le pattern **Factory Method** soit appliqué :

- Vous avez défini un **algorithme générique** dans une classe parent `Bow` qui permet à ses enfants de définir
  certaines
  variations (`Template Method`)
- Et vous avez défini une méthode de création d'objet qui est **abstraite** (donc qui doit être implémentée par les
  enfants)
  et qui **retourne elle-même une classe abstraite** (`Arrow`)

Chaque classe enfant peut créer sa propre flèche.

```ts 
class RegularBow extends Bow {
  range(): number {
    return 100;
  }

  createArrow(): Arrow {
    return new RegularArrow();
  }
}

class LongBow extends Bow {
  range(): number {
    return 500;
  }

  createArrow(): Arrow {
    return new PiercingArrow();
  }
}
```

Comme vous le voyez, `Template Method` et `Factory Method` sont étroitement liés. En fait, **il ne peut pas y avoir de
Factory Method sans Template Method**.

Et si je vous disais maintenant... Qu'il existe deux autres patterns qui permettent de faire la même chose, mais avec
différents avantages et inconvénients ?

## Class and Object Patterns

Les patterns `Template Method` et `Factory Method` sont des pattern de classe. C'est à dire qu'ils s'appliquent
directement
au niveau de la classe. Ils sont statiques, une fois défini, on ne peut changer ces définitions au runtime.

L'avantage, c'est qu'ils sont très rapides à implémenter et simple à analyser. Il suffit d'ouvrir le code, tout est là,
on sait
d'avance comment le programme va se comporter.

Mais le désavantage, c'est qu'ils peuvent mener à une prolifération de classes et ne sont pas très flexibles aux
combinaisons.

Imaginez qu'on aimerait avoir un arc long qui tire plusieurs types de flèches.

```ts
abstract class Bow {
  hit(ennemy) {
    if (ennemy.isInRange(this.range())) {
      ennemy.takeDamage(this.createArrow().getDamage());
    }
  }

  abstract range(): number;

  abstract createArrow(): Arrow;
}

abstract class LongBow extends Bow {
  range(): number {
    return 500;
  }
}

class PiercingArrowLongBow extends LongBow {
  createArrow(): Arrow {
    return new PiercingArrow();
  }
}

class ElementalArrowLongBow extends LongBow {
  createArrow(): Arrow {
    return new ElementalArrow();
  }
}
```

Ici, on a deux types de flèche : `PiercingArrow` et `ElementalArrow`. Et on a qu'un seul type d'arc, `LongBow`.
Pour avoir toutes les combinaisons, on multiplie le nombre de flèche par le nombre d'arcs, soit 2.

Si maintenant on a besoin de rajouter `FireArrow` et `IceArrow` et qu'on veut gérer `LongBow`, `RegularBow` et
`CrossBow`, on va devoir gérer **4 types de flèche et 3 types d'arc.**

**Soit 12 classes**.

Si on rajoute une dimension, par exemple le type de bois de l'arc, par exemple `WoodenBow` et `SteelBow`, on va devoir
gérer **2 types de bois, 3 types d'arc et 4 types de flèche.**

Ce qui nous fait 2 x 3 x 4 = 24 classes.

C'est le gros problème de cette approche, elle **multiplie** le nombre de classes à gérer.

C'est en général le problème des **class based** patterns. Ils fonctionnent bien pour des hiérarchies fixes et petites,
mais très mal sur des hiérarchies larges et dynamiques.

## L'approche objet

L'autre approche, beaucoup plus scalable, gérable mais aussi plus complexe, implique d'utiliser deux autres patterns
qui sont strictement équivalents sur le plan fonctionnel : `Strategy` et `AbstractFactory`.

Le pattern `Strategy` est l'équivalent du `Template Method`, à la différence qu'il utilise la délégation à la place de
l'héritage.

```ts 
interface BowType {
  range(): number;
}

class Bow {
  constructor(
    private readonly type: BowType
  ) {
  }

  hit(ennemy) {
    if (ennemy.isInRange(this.type.range())) {
      ennemy.takeDamage(100);
    }
  }
}

class RegularBowType implements BowType {
  range(): number {
    return 100;
  }
}

class LongBowType implements BowType {
  range(): number {
    return 500;
  }
}
```

Comme on peut le voir ici, le type d'arc est externe à la classe `Bow` et lui est injecté directement dans son
constructeur. Notre classe `Bow` est concrète et générique, et la variation sur la portée de l'arc est déléguée à la
stratégie
`BowType`.

Si on a besoin maintenant de gérer différents types de flèche, il suffit de faire la même chose que `BowType` en créant
une interface `ArrowFactory`

```ts
interface ArrowFactory {
  createArrow(): Arrow;
}

class Bow {
  constructor(
    private readonly type: BowType,
    private readonly arrowFactory: ArrowFactory
  ) {
  }

  hit(ennemy) {
    if (ennemy.isInRange(this.type.range())) {
      ennemy.takeDamage(this.arrowFactory.createArrow().getDamage());
    }
  }
}

class PiercingArrowFactory implements ArrowFactory {
  createArrow(): Arrow {
    return new PiercingArrow();
  }
}

class ElementalArrowFactory implements ArrowFactory {
  createArrow(): Arrow {
    return new ElementalArrow();
  }
}
```

Notre interface `ArrowFactory` est une démonstration du pattern `Abstract Factory` :

- L'interface `ArrowFactory` est l'Abstract Factory
- L'interface `Arrow` est l'Abstract Product
- Les classes `PiercingArrowFactory` et `ElementalArrowFactory` sont les Concrete Factory
- Les classes `PiercingArrow` et `ElementalArrow` sont les Concrete Product

Et là, gérer toutes les variations devient beaucoup plus simple.
Je peux combiner :

- LongBow avec PiercingArrow
- LongBow avec ElementalArrow
- RegularBow avec PiercingArrow
- RegularBow avec ElementalArrow

En utilisant seulement 4 classes.

Si je veux gérer également `FireArrow` et `IceArrow`, je n'ai qu'à créer deux nouvelles classes et les ajouter à mon
système.

Là où avant il me fallait 12 classes (3*4), il m'en faut maintenant plus que 7 (3+4).

Rajoutons le type de bois (`WoodenBow` et `SteelBow`) et passe à 9 classes contre 24.

Passer d'un pattern de classe à un pattern d'objet transforme les multiplications en additions !

## Conclusions

D'une manière générale, il est bon de suivre les conseils du livre Design Pattern.

> Favor composition over inheritance

Les patterns de Classe poussent à l'héritage et les patterns d'Objet à la composition. Et comme on vient de le voir,
ces derniers sont beaucoup plus flexibles et moins lourd.

Donc favorisez plutôt `Strategy` et `Abstract Factory` à `Template Method` et `Factory Method`.

Mais n'hésitez pas à utiliser `Factory Method` et `Template Method` sur des hiérarchies simples et fixes. Ils peuvent
être très élégant et plus simples à comprendre car impliquent moins d'indirections.

J'utilise beaucoup les deux.