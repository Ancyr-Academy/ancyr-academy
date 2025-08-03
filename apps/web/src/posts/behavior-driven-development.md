---
title: Behavior-Driven Development
date: 2025-08-01T03:30:00+01:00
lastmod: 2025-08-01T03:30:00+01:00
author: Anthony Cyrille
categories:
  - software engineering
  - specification
tags:
  - BDD
  - TDD
draft: false
---

Le Behavior-Driven Development est l'un des concepts les moins bien compris de l'ingénierie logicielle. Retraçons ensemble
l'historique du BDD pour mieux comprendre de quoi il s'agit.

---

## Le Test-Driven Development

Si vous lisez ce blog, vous connaissez déjà le Test-Driven Development. C'est une approche de développement logiciel chère 
à un mouvement très connu : l'Extreme Programming (XP), le père d'agile. Les promoteurs de l'XP étaient convaincus que la qualité
devait être une valeur première du code sans quoi il était impossible de livrer par itérations courtes et rapides.

En somme, ils ne voyaient pas le "test" du TDD comme étant une méthode de vérification du logiciel. Ils voyaient le "test"
du TD comme un objectif à atteindre. En TDD, le test a pour vocation de justifier l'existence de code. On écrit du code en réaction
à un test qui échoue, et cette dynamique permet d'avoir une forme de "double-entry book-keeping" dans lequel le test passe au vert pour 
nous signifier que la feature a bien été implémenté.

J'insiste là dessus, en TDD on spécifie, on ne vérifie pas. C'est important car c'est cette confusion qui mènera à la 
naissance du Behavior-Driven Development.

## Le problème du TDD

Dan North (ainsi que d'autres devs) ont remarqué que le TDD prenait en popularité mais était très mal compris. Pour le grand public, le 
TDD était une approche de test, et pour eux faire du TDD signifiait tester le code.

Cette mentalité a plusieurs conséquences négatives :

- Les tests deviennent très couplés à la structure du code, on se retrouve avec un test unitaire par classe
- Le focus est mis sur la vérification, et il devient facile de trop tester
- A trop tester, le code devient difficile à changer, ce qui est antithétique à la raison d'être du TDD
- En général, on fait des tests après avoir créé le code, pas avant, ce qui impliquait beaucoup de résistances à l'adoption
- On a pas forcément le temps de tester le code, surtout dans un contexte où on manque de temps (ce qui est souvent le cas)

Vous voyez, associer "TDD" à "test" implique à la fois une très mauvaise compréhension du TDD mais également une très 
mauvaise mise en application. Au final, personne ne veut faire de TDD.

## La genèse du BDD

Pour palier à ce problème, Dan North a suggéré qu'il était intéressant de présenter le TDD autrement.

**Premièrement**, en mettant de côté l'aspect "test" et en avant le côté "spécification". Là où un test unitaire va généralement
être associé aux méthodes d'une classe, une spécification va être associé à un comportement.

A l'échelle d'une seule classe, la mentalité va passer de "comment couvrir toutes les méthodes de cette classe" à "comment expliquer 
le fonctionnement de cette classe (grâce aux tests)". D'un côté on veut vérifier, de l'autre on veut spécifier et documenter.

**Deuxièmement**, en mettant l'accent sur le comportement, le "test" devient indépendant de la structure du code. Chaque test
correspond à un comportement / à une feature, et cette feature est entièrement indépendante du code qui l'implémente. De cette façon, 
je suis beaucoup plus libre de repenser la structure de mon code au besoin.

**Troisièmement**, on repensant la façon de nommer ses tests. La plupart des tests étaient mal nommés et donnaient très peu
de contexte, comme `testEmptyList` ou `testBrokenCar`. Le vocabulaire du test y est trop présent. Pour y palier, Dan North 
proposa d'adopter une approche plus verbeuse et de changer de vocabulaire avec le fameux `should`.

Dans le cas de la liste vide, le test passerait de `testEmptyList` à `anEmptyList_should_haveSizeOfZero`. 

Le simple fait de shifter de `test` à `should` a un impact dramatique sur l'orientation de la pratique : je ne suis plus en train
d'écrire un test pour vérifier du code, **je suis en train d'expliquer comment fonctionne mon programme et quels sont ses règles**.

Pour aller plus loin dans l'idée de "spécifier", Dan North proposa également de revoir le wording des trois A. Pour rappel, un test est
structuré autour de 3 phases : 
- Arrange, dans laquelle on prépare le contexte d'éxecution du test
- Act, dans laquelle on effectue une action sur le système testé
- Assert, dans laquelle on vérifie le résultat

Les 3A étant trop "test-oriented", Dan North propose plutôt l'approche **Given, When, Then**. Dans le cadre de la liste vide,
ça donnerait...

```gherkin
GIVEN an empty list
WHEN asking the size of the list
THEN the size should be 0
```

Ce qui n'a plus rien à voir avec du testing et tout à voir avec de la documentation.

Ces 3 points avaient pour objectif non pas de réinventer le TDD mais de mettre en avant ce que signifie véritablement le TDD. Au départ,
le BDD n'était rien de plus que **TDD done right**. 

## L'évolution du BDD

Le BDD aurait pu s'arrêter là : à une autre façon de voir le TDD.

Seulement, Dan North et ses collègues (notamment Dave Astels et Liz Keogh) avaient des idées beaucoup plus profondes à explorer, 
notamment une qui est centrale au BDD d'aujourd'hui.

> Et si on pouvait spécifier la totalité du fonctionnel du point de vue des utilisateurs externes ?

Le sujet principal du BDD était donc de déterminer ce que devait faire le software afin de produire le software qui sera le 
plus utile à ses usagers. Là où le TDD reste très developer-centric avec un zoom très avancé sur **la création de code**, le BDD commence à 
prendre beaucoup de recul et cherche à mettre en place les outils pour aider les développeurs à **créer le bon produit**.

Et cette démarche commence en brisant un premier mur : **celui de la spécification**.

Dans l'approche BDD, la spécification n'est plus un besoin figé venu d'en haut mais un sujet de conversation que l'on
veut explorer, en mettant à la table les développeurs, les business analyst, l'équipe product et tout autre stakeholder ayant
un intérêt quelconque vis à vis du logiciel.

En d'autre terme, de rendre la spécification négociable et challengeable.

En faisant de la spécification un sujet de conversation, on créé de la conversation et on s'offre :

- La possibilité d'explorer la spécification dans ces moindres détails et **de mettre en avant les edge cases**
- D'essayer d'autres fonctionnalités **potentiellement plus intéressantes**
- De mieux comprendre **pourquoi** on développe cette feature, car on prend en compte **le besoin qui motive la spécification**
- D'itérer sur une spécification beaucoup plus légère et d'approfondir **seulement si le feedback est positif**

Du véritable Agile.

Et c'est ça qu'il faut retenir du BDD d'aujourd'hui : **mettre l'accent sur la discussion pour déterminer comment créer le logiciel 
qui sera utile à toutes les parties prenantes**.

L'aspect "automatisation" du BDD, qui a donné naissance au BDD, **est un aspect purement secondaire du BDD**. Pour citer Dan North, 
le plus grand préjudice qu'il a pu porter au concept de BDD est de l'avoir associé à cette notion.

## Le BDD aujourd'hui

Aujourd'hui, le BDD porte en lui deux définitions proches mais assez différentes dues à son historique.

- D'une part, c'est une réhabilitation de ce qu'aurait dû être le TDD
- D'autre part, une méthodologie qui aide à déterminer comment construire le bon logiciel à travers la discussion

Elles ne sont pas opposées, mais différentes. Malheureusement, elles donnent lieu à des débats parfaitement inutiles.

**Le plus dangereux étant que BDD = TDD**. Rien n'est plus faux, mais on verra pourquoi dans un autre article. Retenez simplement :

- Que le TDD est une pratique de construction de code itérative et incrémentale qui aide le développeur à construire du code une étape à la fois
- Le BDD est une approche qui permet de spécifier ce que doit faire le logiciel

Le BDD **commence autour de la table, lors d'une conversation**.
Le TDD commence dans **l'IDE**.

Simple, non ?

Mais à cause de l'histoire chaotique du BDD, je préfère ne pas parler de BDD mais plutôt de **Specification by Example**, une notion
introduite par Gojko Adzic dans son livre éponyme. 

Un terme qui reflète beaucoup plus l'état d'esprit du BDD et qui marque beaucoup mieux la distinction avec le TDD.