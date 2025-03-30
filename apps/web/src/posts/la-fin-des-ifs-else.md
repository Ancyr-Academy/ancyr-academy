---
title: La fin des ifs/else
date: 2025-03-30T03:30:00+01:00
lastmod: 2025-03-30T03:30:00+01:00
author: Anthony Cyrille
categories:
  - software engineering
tags:
  - advanced
  - object-oriented
  - design patterns
draft: false
---

Saviez vous que `if` n'existe pas en Smalltalk, l'ancêtre des langages objets ? On pourrait croire que c'est par
fainéantise ou que c'est une lubie d'illuminés de la Silicon Valley, mais la réalité est bien plus profonde..

---

> Factories are where conditionals go to die

Vous utilisez des `if`/`else` dans vos codes ? Naturellement. Moi aussi, j'en utilise.

Cela dit, je traite chaque condition comme un potentiel suspect. Et j'espère qu'à la fin de cet article,
vous serez convaincu d'en faire tout autant.

# Un premier exemple

Admettons que vous développiez une application de gestion de restaurant, et on vous donne la règle suivante :

- Notre restaurant a 3 étages
- Chaque étage a une capacité différente
- On peut ajouter / retirer des tables à chaque étage
- Ces tables ont une capacité
- La capacité de toutes les tables d'un étage ne peut dépasser la capacité de l'étage

Pour résumer, si j'ai un étage qui peut accueillir 10 personnes, je peux mettre 2 tables pour 4 et une table pour 2.
Mais je ne peux pas mettre 2 table pour 4 et une table pour 3.

Logique ?

En bon développeurs objets que vous êtes, vous allez créer une belle classe `Floor` pour modéliser cet invariant.

```ts
class Floor {
  constructor(
    private type: "ground" | "first-floor" | "second-floor",
  ) {
  }

  addTable(table: Table) {
    let maximumCapacity = 0;
    if (this.type === "ground") {
      maximumCapacity = 10;
    } else if (this.type === "first-floor") {
      maximumCapacity = 15;
    } else if (this.type === "second-floor") {
      maximumCapacity = 25;
    }

    const totalCapacity = this.remainingCapacity() + table.capacity();
    if (totalCapacity < maximumPartySize) {
      throw new Error('Maximum floor size exceeded');
    }

    this.tables.push(table);
  }
}
```

On est content de cette modélisation, même si on a un gros `if` (qui en réalité est un `switch`) en plein milieu d'une
méthode pourtant simple.

Pour bien insister sur le problème, mettons que certains étages (comme le `first-floor`) ne peuvent pas avoir de tables
de 2.

Me demandez pas pourquoi, c'est comme ça.

```ts
class Floor {
  constructor(
    private type: "ground" | "first-floor" | "second-floor",
  ) {
  }

  addTable(table: Table) {
    if (this.type === "first-floor" && table.capacity() === 2) {
      throw new Error('First floor cannot have tables of 2');
    }

    let maximumCapacity = 0;
    if (this.type === "ground") {
      maximumCapacity = 10;
    } else if (this.type === "first-floor") {
      maximumCapacity = 15;
    } else if (this.type === "second-floor") {
      maximumCapacity = 25;
    }

    let totalCapacity = this.remainingCapacity() + table.capacity();
    if (totalCapacity < maximumPartySize) {
      throw new Error('Maximum floor size exceeded');
    }

    this.tables.push(table);
  }
}
```

On peut aller très loin avec ce genre de cas particuliers. C'est d'ailleurs dans le contexte de cas particuliers que
le pattern de **Domain Model** brille, pour citer Martin Fowler. Mais passons.

Voyez comment ce code d'apparence simple peut facilement déborder avec les cas particulier ?

- Que se passe t'il si on rajoute un 4e étage ?
- Et si par hasard ce 4e étage a lui aussi une capacité de 25 ? On serait tenté de regrouper des ifs et nuire encore
  plus à la
  lisibilité de la fonction
- Et si on doit rajouter une autre variance ? Par exemple, seuls certains étages peuvent-être réservés pour des
  évènements et pas d'autres

La classe souffre d'un **trouble dissociatif de l'identité**. Tantôt elle se comporte comme le premier étage, tantôt
comme
le second étage.

Elle doit se regarder constamment dans le miroir pour savoir qui elle est avant de pouvoir faire quoique ce soit.

C'est vraiment triste comme situation.

L'évidence est là. On a en réalité plusieurs objets en un, et chaque objet s'étend sur l'axe de **variabilité** du
concept
d'étage.

Compliqué dit comme ça, je sais. Pour faire plus simple, on a actuellement 2 niveaux de variabilité :

- Chaque étage a une capacité différente
- Certains étages refusent les tables de 2 personnes

Pourtant, un point est commun à tous les étages : **ce sont des Etages**.

On a donc :

- Une abstraction qui représente l'étage
- Cette abstraction met en évidence les niveaux de variabilité avec des méthodes appropriés
- Chaque implémentation de cette abstraction est une instance de cette variabilité

En code, ça donne ça :

```ts
abstract class Floor {
  abstract maximumCapacity(): number;

  abstract acceptsTable(table: Table): boolean;

  addTable(table: Table) {
    if (!this.acceptsTable(table)) {
      throw new Error('This floor cannot have this table');
    }

    const totalCapacity = this.remainingCapacity() + table.capacity();
    if (totalCapacity < this.maximumCapacity()) {
      throw new Error('Maximum floor size exceeded');
    }

    this.tables.push(table);
  }
}

class GroundFloor extends Floor {
  maximumCapacity(): number {
    return 10;
  }

  acceptsTable(table: Table): boolean {
    return true;
  }
}

class FirstFloor extends Floor {
  maximumCapacity(): number {
    return 15;
  }

  acceptsTable(table: Table): boolean {
    return table.capacity() !== 2;
  }
}
```

On a ici une réification du pattern Template Method. La classe parent `Floor` définit le fonctionnement général du
principe
d'étage tandis que les classes enfants définissent les variations de ce principe.

Le coeur de ce qui fait un étage se trouve dans la classe abstraite, les détails des variations dans les classes enfant.

C'est un pattern extrêmement courant lorsqu'on fait du Domain Modeling et que les variations sont fixes.

Et surtout, comme on peut le voir : on s'est débarrassé de beaucoup de conditions. Les seules conditions qu'on a gardé
sont des `clause guards` ou `assertions`, elles sont là pour empêcher des violations et sont des conditions parfaitement
légales.

Mais les conditions de sélection, elles, doivent vous faire lever le sourcil.

# Un second exemple

Un autre point fort du DDD et du design orienté objet, c'est sa capacité à faire émerge des concepts.

Mettons que vous devez créer un système d'authentification avec des profils, et chaque profil peut avoir des règles très
complexes.
Vous avez, quelque part, un code qui ressemble à ça.

```ts
interface Profile {
  isAuthorized(action: string): boolean;
}

class User {
  constructor(private readonly profile: Profile | null) {
  }

  getProfile() {
    return this.profile;
  }
}

class Authorizer {
  authorize(user: User, action: string) {
    const profile = user.getProfile();
    if (profile === null) {
      // User has no profile, he's not authorized
      return false;
    }

    return profile.isAuthorized(action)
  }
}
```

Vous voyez, je vois ce genre de code partout, tous les jours, et il me pose un gros problème.

J'ai dû commenter une ligne pour expliquer que dans le cas où un utilisateur n'a pas de profil, il n'est pas autorisé.

Pourquoi cette règle ? D'où vient-elle ? Et pourquoi dois-je savoir ça ?

En temps qu'Authorizer, je sais des choses que je préfèrerais ne pas savoir :

- Qu'un utilisateur PEUT ne pas avoir de profil
- Que dans ce cas là, il n'est pas autorisé

Et si cette règle change ? Et si, finalement, par défaut, tout utilisateur sans profil est autorisé ?

Autant de raisons de changer cet objet et de répartir un savoir qu'on préfèrerait centraliser quelque part.

Moi, je vois la chose différemment.

Et si l'absence de profil... était en soit un concept ? Un profil ?

Plutôt que de partir du principe qu'un utilisateur peut ne pas avoir de profil, on pourrait partir du principe que
l'utilisateur
a un profil `DenyAllProfile` qui rejette tout par défaut.

```ts
interface Profile {
  isAuthorized(action: string): boolean;
}

class DenyAllProfile implements Profile {
  isAuthorized(action: string): boolean {
    return false;
  }
}

class User {
  constructor(private readonly profile: Profile) {
  }

  getProfile() {
    return this.profile;
  }
}

// Somewhere in our code, a user get instanciated with a DenyAllProfile
// if they have no profile

class Authorizer {
  authorize(user: User, action: string) {
    return user.getProfile().isAuthorized(action);
  }
}
```

Le prix est d'avoir rajouté une classe de 5 lignes qui se content de retourner `false`, une implémentation du
**Null Object** pattern.

Mais ce faisant, on a supprimé un cas particulier.

Notre classe `Authorizer` devient extrêmement simple à tester car la condition a disparue. Sa complexité cyclomatique
est de 1. Un seul test suffira.

Et enfin on a révélé un concept qui était avant abstrait : celui de profile empêche-tout.

Moins de code dans Authorizer, moins de tests et un code plus clair.

# Conclusions

Vous voyez comment dans les deux cas plus haut, on a remplacé des conditions (et donc des tests plus complexes) par de
nouvelles classes.

Evidemment, ça implique de créer, quelque part, une factory ou une méthode de construction qui va instancier des objets
selon certaines conditions. On a repousser les conditions très loin dans notre code, loin du Domain-Model, dans des
factory
qui sont appelés très tôt dans le cycle de vie du code, à un moment différent, sans qu'on ai à s'en soucier.

Et tout notre code raisonne en terme d'interface.

C'est exactement ce que signifie le `Open/Closed Principle` de Bertrand Meyer : le code doit-être ouvert à l'extension
et fermé à la modification.

Il y a toujours un endroit où il faut gérer la création de ces nouveaux objets, généralement une factory ou un IoC
container.

Mais on a largement réduit la partie du code qui n'est pas OCP compliant afin d'en faire bénéficier tout le reste du
code.
