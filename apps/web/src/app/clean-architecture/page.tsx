"use client";

import { styled } from "styled-components";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Container } from "../../ui/Container";
import { Content } from "../../components/Content";
import { Course } from "../../components/Course";
import { CourseList } from "../../components/CourseList";
import { ReviewList } from "../../components/ReviewList";
import { Review } from "../../components/Review";
import Amazon from "../../assets/companies/amazon.png";
import Google from "../../assets/companies/google.png";
import UKG from "../../assets/companies/ukg.png";
import CapGemini from "../../assets/companies/capgemini.png";
import Orange from "../../assets/companies/orange.png";
import SimonPotier from "../../assets/reviews/simonpotier.png";
import YazidDaoudi from "../../assets/reviews/yaziddaoudi.jpeg";
import AdrienVerschaere from "../../assets/reviews/adrienverschaere.jpeg";
import MelDonati from "../../assets/reviews/meldonati.jpeg";
import FlavioMoreno from "../../assets/reviews/flaviomoreno.jpeg";
import FredericLossignol from "../../assets/reviews/frederic_lossignol.jpeg";
import AnthonyDelhaye from "../../assets/reviews/anthony_delhaye.jpeg";
import AmelieHusson from "../../assets/reviews/amlie_husson.jpeg";
import RachidJeffali from "../../assets/reviews/rachid_jeffali.jpeg";
import YlliesH from "../../assets/reviews/yllies_h.jpeg";
import YohannHerbet from "../../assets/reviews/yohann_herbet.png";
import YounesAdem from "../../assets/reviews/younes_adem.jpeg";
import BastienCorre from "../../assets/reviews/bastien_corre.jpeg";
import { Promotional } from "../../components/Promotional";
import { Overview } from "../../components/Overview";
import { useCurrentDiscount } from "ui";
import { pxToRem } from "../../ui/font-utils";
import { allCourses } from "../../core/clean-architecture";

const Page = () => {
  return (
    <main>
      <Overview />
      <Promotional />
      <ContentBody>
        <Container>
          <Content>
            <section>
              <h2>Ils ont suivi cette formation</h2>
              <div className="companies">
                <img alt="Amazon" src={Amazon.src} />
                <img alt="Google" src={Google.src} />
                <img alt="UKG" src={UKG.src} />
                <img alt="CapGemini" src={CapGemini.src} />
                <img alt="Orange" src={Orange.src} />
              </div>
            </section>
            <section>
              <h2>Une approche qui résout notre vrai problème</h2>
              <p>Est-ce que, comme moi auparavant, vous en avez marre...</p>
              <ul>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    De passer la majeure partie de votre temps{" "}
                    <b>sur des bugs et des hotfix ?</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    De perdre des heures à{" "}
                    <b>débugguer du code incompréhensible ?</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    D'écrire des tests qui vous{" "}
                    <b>empêchent de changer votre code</b>
                    et que <b>vous devez systématiquement réécrire ?</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    De devoir bloquer le développement à cause{" "}
                    <b>
                      d'une mise à jour de votre framework ou de votre ORM ?
                    </b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    De bloquer le développement de features pendant{" "}
                    <b>
                      des semaines voir des mois pour faire du refactoring ?
                    </b>
                  </span>
                </li>
              </ul>
              <p>Si c'est le cas, alors une chose est certaine.</p>
              <p>
                <b>Vous avez perdu le contrôle de votre propre code.</b>
              </p>
              <p>
                Avec le temps,
                <br />
                Le code se complexifie. <br />
                La vélocité diminue. <br />
                Le projet devient douloureux.
                <br />
                Et en même pas 3 ans, <b>on repart de zéro.</b>
              </p>
              <p>
                Je sais que vous avez déjà connu cette situation. <br />
                Et je suis sûr que vous la vivez en ce moment même. <br />
              </p>
              <p>
                Vous pensez certainement que c'est normal. <br />
                Que toutes les boîtes fonctionnent comme ça.
                <br />
                <b>Sauf que ça n'a rien de normal.</b>
              </p>
              <p>
                Des milliers d'entreprises travaillent très différement.
                <br />
                Avec une méthode qui leur permet d'empiler feature sur feature,
                <br />
                Jour après jour,
                <br />
                <b>Sans jamais sacrifier leur vélocité.</b>
              </p>
              <p>
                Grâce à <b>4 outils</b> extrêmement connus et complémentaires.
              </p>
              <ul>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    La <b>Clean Architecture</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Le <b>Test-Driven Development</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Le <b>Domain-Driven Design</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Le <b>Refactoring</b>
                  </span>
                </li>
              </ul>
              <p>
                Je les utilise au quotidien depuis plus de 7 ans, <br />
                En témoigne mes{" "}
                <a
                  href={"https://www.malt.fr/profile/anthonycyrille"}
                  target={"_blank"}
                >
                  39 missions sur Malt et mes nombreux retours client.
                </a>
              </p>
              <p>
                Ces méthodes, je vous les fait découvrir en profondeur dans
                cette formation.
                <br />
                Vous y apprendrez...
              </p>
              <ul>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Les principes fondateurs de la <b>Clean Architecture</b>, y
                    compris les moins connus
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Ce qu'est véritablement l'architecture logicielle avec des
                    heuristiques riches sur la <b>gestion des dépendances</b> et{" "}
                    <b>la décomposition modulaire</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Comment structurer vos applications, front-end comme
                    back-end
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Comment tirer profit des <b>principes SOLID</b> dans un
                    niveau de détail insoupçonné
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    <b>Modulariser votre code</b> pour
                    <b> travailler à plusieurs sur la même feature</b> et
                    booster votre productivité d'équipe
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Rendre votre application
                    <b> entièrement testable en unitaire et en intégration</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Ecrire des tests <b>robustes</b> qui{" "}
                    <b>ne se mettent pas en travers de votre</b> route quand
                    vous avez besoin de changer votre code
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tester correctement vos applications en end-to-end avec{" "}
                    <b>PlayWright</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Entrer dans une boucle de développement itérative en TDD et
                    à être véritablement guidé par les tests
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Isoler votre{" "}
                    <b> logique métier des détails d’infrastructure</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Comment <b>se rendre indépendant de la base de données</b>{" "}
                    et changer de technologie au besoin
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Créer toute votre application{" "}
                    <b>
                      sans même ouvrir votre navigateur ou votre client Postman.
                    </b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Exploiter le <b> Domain-Driven Design</b> pour faire émerger
                    la problématique métier à l’intérieur de votre code
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Exploiter le <b>CQRS</b> pour optimiser différemment votre
                    modèle de lecture et votre modèle d’écriture
                  </span>
                </li>
              </ul>
              <p>
                Plus encore, j'y partage <b>les erreurs que j'ai commises</b>,
                les astuces que j'ai appris par ma longue expérience de
                développeur (y compris dans l'open source){" "}
                <b>
                  et quelques petits tricks secrets introuvables sur Internet.
                </b>
              </p>
            </section>
            <section>
              <h2>Ils en parlent mieux que moi</h2>
              <ReviewList>
                <Review
                  authorImage={RachidJeffali.src}
                  authorName="Rachid Jeffali"
                >
                  Excellente formation ! Je suis Développeur depuis un moment et
                  j'avais l'impression de stagner sur les concepts
                  d'Architecture. Le contenu anglophone et francophone sur la
                  Clean Architecture était soit indigeste, soit compliqué à
                  comprendre et surtout je ne trouvais pas de projet de A à Z en
                  Clean Architecture. Je suis formateur, je dois rester à
                  l'affût de ce qui se fait, des nouvelles tendances etc... Et
                  l'architecture hexagonale et le TDD m'ont toujours intéressés
                  et j'avais besoin de faire sauter ce verrou de compréhension.
                  La formation d'Anthony Cyrille vient régler ce problème. A
                  l'issue on a l'impression de faire parti d'une élite, d'une
                  classe (limitée en places) de développeurs à part, on se sent
                  enfin Dev Senior !
                </Review>
                <Review authorName="Rosko">
                  La formation Clean Architecture offerte par Anthony Cyrille a
                  été très satisfaisante. Le formateur démontre une pédagogie
                  remarquable, la partie théorique est bien structurée avec des
                  schémas facilitant la compréhension, et la flexibilité des
                  vidéos permet une visualisation à tout moment. La partie
                  pratique de la formation utilise des sujets concrets
                  rencontrés en entreprise, renforçant l'applicabilité des
                  compétences acquises dans des situations réelles. L'accès au
                  code du projet est un atout majeur, et le discord actif
                  présente une communauté de développeurs prête à répondre aux
                  questions et partager des informations pertinentes. Le rapport
                  qualité-prix est vraiment imbattable compte tenu de la
                  complexité du sujet, et Anthony manifeste un réel engagement à
                  nous aider à réussir. Je recommande fortement !
                </Review>
                <Review authorName="Carlo">
                  "Comment créer une nouvelle fonctionnalité ? Quels fichiers
                  dois-je modifier pour mettre à jour cette fonctionnalité ? Ah
                  tiens, pourquoi ne pas ré-implémenter le même code, une énième
                  fois, à cet endroit ? Mais il sert vraiment à quelque chose ce
                  test ? Ce test est instable non ? Non non, il fonctionne bien
                  sur ma machine" Sur le long terme, ce sont effectivement des
                  questions du quotidien. De ce constat, je cherchais, moi
                  aussi, à améliorer la qualité et la maintenabilité de mes
                  applications, et surtout à retrouver le plaisir de coder. Les
                  formations d'Anthony constituent, pour moi, la porte d'entrée
                  idéale aux concepts de Clean architecture et de stratégies de
                  tests. Anthony a su rendre concrets les concepts qui restaient
                  encore trop abstraits pour moi. J'ai toujours un onglet ouvert
                  sur la formation pour me rassurer et me donner le cap. Enfin,
                  je suis très heureux de faire partie de sa belle communauté !
                </Review>
                <Review authorName="Celdama">
                  La formation Clean Architecture d'Anthony a été une révélation
                  pour moi en tant que développeur junior. Elle combine une
                  excellente pédagogie avec une compréhension profonde des
                  principes de conception logicielle, rendant le contenu
                  accessible à tous les niveaux. Les études de cas pratiques
                  utilisant React et Next.js sont particulièrement
                  enrichissantes. Un plus notable est la disponibilité d'Anthony
                  sur Discord pour répondre aux questions, ce qui renforce
                  l'apprentissage continu. Je recommande pour ceux qui veulent
                  affiner leurs compétences en architecture logicielle.
                </Review>
              </ReviewList>
            </section>
            <section>
              <h2>A qui s'adresse cette formation ?</h2>
              <p>Cette formation a été pensée pour toi si...</p>
              <ul>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tu sens que ta façon de développer n'est pas encore optimale
                    et que tu as l'impression <b>de tatonner à l'aveuglette</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tu es lassé{" "}
                    <b>de passer 70% de ton temps à régler des bugs</b> et
                    désire plutôt en passer{" "}
                    <b>90% à ajouter de la valeur continuellement</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tu désires passer deux ou trois crans au dessus et
                    t'affirmer en tant que <b>développeur Senior</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tu désires avoir le jargon et le savoir technique pour
                    discuter avec des <b>Tech Leads & Architectes</b>
                  </span>
                </li>
              </ul>
            </section>

            <Courses />
            <section>
              <Moneyback>
                <h2>Et si la formation ne me plait pas ?</h2>
                <p>
                  Aucune chance, la formation est complète et de très haute
                  qualité. <b>Elle a déjà aidé plus de 1500 développeurs</b> à
                  passer au niveau supérieur{" "}
                  <b>en seulement un an d'existence.</b>
                  <br />
                  <br />
                  Si bien que j'ai une politique de remboursement inédite :{" "}
                  <b>
                    tu as 30 jours pour consommer toute la formation et demander
                    un remboursement si elle ne te convient pas.
                  </b>
                  <br />
                  <br />
                  Tu as bien lu : <b>30 jours.</b>
                  <br />
                  Si après ça tu désire tout de même être remboursé, je le ferai
                  sans te poser de question.
                  <br />
                  <br />
                  Mais jusqu'ici, <b>seulement 1 élève l'a demandé.</b>
                </p>
              </Moneyback>
            </section>

            <section>
              <h2>Ce qu'en disent les élèves (+1500)</h2>
              <ReviewList>
                <Review authorImage={YazidDaoudi.src} authorName="Yazid Daoudi">
                  Je conseil fortement la formation d'Anthony. Elle convient a
                  tous, debutant et confirmé. Anthony prend le temps d'expliquer
                  toute la theorie autour de la clean architecture pour ensuite
                  nous plonger dans une etude de cas avec react et next. De plus
                  le contenu est mis a jour en fonction des remarques faites par
                  les membres de la formation. Je recommande a 100% !
                </Review>
                <Review
                  authorImage={SimonPotier.src}
                  authorName="Simon Pottier"
                >
                  J'ai eu le privilège de participer à la formation Clean
                  Architecture d'Anthony et je suis impressionné par la qualité
                  et le contenu. Cette formation a dépassé toutes mes attentes
                  et m'a fourni une compréhension approfondie sur la façon
                  d'architecturer une application de manière cohérente.
                </Review>
                <Review authorName="Chaka">
                  Avant cette formation, je cherchais à améliorer la qualité et
                  la maintenabilité des architectures Front-end. Cette formation
                  a non seulement répondu à mes attentes, mais elle les a même
                  dépassées. cette formation a été extrêmement enrichissante et
                  m'a permis de consolider mes connaissances en clean
                  architecture. Je la recommande vivement à quiconque souhaite
                  améliorer ses compétences en matière d'architecture Front-end.
                </Review>
                <Review authorImage={MelDonati.src} authorName="Melaïna Donati">
                  Si je devais donner trois mots pour la définir, ce serait :
                  Clarté, Pédagogie et Pratique. Anthony a une façon unique de
                  rendre les concepts parfois abstraits, simples et accessibles.
                  Il utilise de nombreux schémas et fournit des exemples
                  concrets, ce qui permet de bien visualiser les concepts et de
                  comprendre leur application pratique. Sa pédagogie est
                  vraiment efficace et il est toujours disponible pour répondre
                  à toutes nos questions.La partie théorique de la formation a
                  grandement facilité mon apprentissage et m'a permis de
                  progresser de manière significative. C'est pourquoi je
                  recommande vivement cette formation à toute personne
                  souhaitant approfondir sa compréhension de l'architecture
                  logicielle !
                </Review>
                <Review
                  authorImage={RachidJeffali.src}
                  authorName="Rachid Jeffali"
                >
                  Excellente formation ! Je suis Développeur depuis un moment et
                  j'avais l'impression de stagner sur les concepts
                  d'Architecture. Le contenu anglophone et francophone sur la
                  Clean Architecture était soit indigeste, soit compliqué à
                  comprendre et surtout je ne trouvais pas de projet de A à Z en
                  Clean Architecture. Je suis formateur, je dois rester à
                  l'affût de ce qui se fait, des nouvelles tendances etc... Et
                  l'architecture hexagonale et le TDD m'ont toujours intéressés
                  et j'avais besoin de faire sauter ce verrou de compréhension.
                  La formation d'Anthony Cyrille vient régler ce problème. A
                  l'issue on a l'impression de faire parti d'une élite, d'une
                  classe (limitée en places) de développeurs à part, on se sent
                  enfin Dev Senior !
                </Review>
                <Review authorName="Rosko">
                  La formation Clean Architecture offerte par Anthony Cyrille a
                  été très satisfaisante. Le formateur démontre une pédagogie
                  remarquable, la partie théorique est bien structurée avec des
                  schémas facilitant la compréhension, et la flexibilité des
                  vidéos permet une visualisation à tout moment. La partie
                  pratique de la formation utilise des sujets concrets
                  rencontrés en entreprise, renforçant l'applicabilité des
                  compétences acquises dans des situations réelles. L'accès au
                  code du projet est un atout majeur, et le discord actif
                  présente une communauté de développeurs prête à répondre aux
                  questions et partager des informations pertinentes. Le rapport
                  qualité-prix est vraiment imbattable compte tenu de la
                  complexité du sujet, et Anthony manifeste un réel engagement à
                  nous aider à réussir. Je recommande fortement !
                </Review>
                <Review authorName="Carlo">
                  "Comment créer une nouvelle fonctionnalité ? Quels fichiers
                  dois-je modifier pour mettre à jour cette fonctionnalité ? Ah
                  tiens, pourquoi ne pas ré-implémenter le même code, une énième
                  fois, à cet endroit ? Mais il sert vraiment à quelque chose ce
                  test ? Ce test est instable non ? Non non, il fonctionne bien
                  sur ma machine" Sur le long terme, ce sont effectivement des
                  questions du quotidien. De ce constat, je cherchais, moi
                  aussi, à améliorer la qualité et la maintenabilité de mes
                  applications, et surtout à retrouver le plaisir de coder. Les
                  formations d'Anthony constituent, pour moi, la porte d'entrée
                  idéale aux concepts de Clean architecture et de stratégies de
                  tests. Anthony a su rendre concrets les concepts qui restaient
                  encore trop abstraits pour moi. J'ai toujours un onglet ouvert
                  sur la formation pour me rassurer et me donner le cap. Enfin,
                  je suis très heureux de faire partie de sa belle communauté !
                </Review>
                <Review authorName="Celdama">
                  La formation Clean Architecture d'Anthony a été une révélation
                  pour moi en tant que développeur junior. Elle combine une
                  excellente pédagogie avec une compréhension profonde des
                  principes de conception logicielle, rendant le contenu
                  accessible à tous les niveaux. Les études de cas pratiques
                  utilisant React et Next.js sont particulièrement
                  enrichissantes. Un plus notable est la disponibilité d'Anthony
                  sur Discord pour répondre aux questions, ce qui renforce
                  l'apprentissage continu. Je recommande pour ceux qui veulent
                  affiner leurs compétences en architecture logicielle.
                </Review>
                <Review
                  authorImage={YohannHerbet.src}
                  authorName="Yohann Herbet"
                >
                  Anthony est très bon pédagogue. J'ai adoré la formation et la
                  qualité technique est vraiment au rendez-vous ! J'ai obtenu
                  beaucoup de réponses à mes questions, avec en prime pas mal de
                  bonus à ce que je recherchais. Cette formation m'a fait monter
                  en niveau très rapidement et m'a permis de comprendre chaque
                  principe évoqué. J'ai maintenant une très bonne compréhension
                  de la clean architecture et suis capable d'interpréter
                  différentes façons de l'implémenter et de l'appliquer.
                </Review>
                <Review authorImage={YounesAdem.src} authorName="Younes Adem">
                  J'ai suivi la formation Clean Architecture + Spring. Celle-ci
                  fournit de très bonnes bases théoriques ainsi qu'un réel cas
                  pratique digne de ce que l'on retrouve dans le monde
                  professionnel. Bien que la formation soit focalisée sur la
                  Clean Architecture, j'ai vraiment apprécié le fait qu'Anthony
                  nous partage également sa façon de penser une application et
                  sa mise en oeuvre du Test-Driven Development. Il nous livre
                  même un avant goût de CQRS et de Domain-Driven Design dans
                  cette formation. Anthony est un excellent instructeur. Sa
                  capacité à vulgariser des choses complexes rend la formation
                  accessible, aussi bien aux juniors qu'aux plus seniors.
                </Review>
                <Review
                  authorImage={AmelieHusson.src}
                  authorName="Amélie Husson"
                >
                  C'est une formation très claire qui permet de stimuler
                  l'intérêt sur les sujets du Craft et corréler les notions de
                  bases entre elles. Recommandée d'intérêt public dans le monde
                  du dév !
                </Review>

                <Review authorImage={YlliesH.src} authorName="Yllies H">
                  J’ai trouvé la formation sur la Clean Architecture extrêmement
                  interessante. Elle m'a offert une compréhension approfondie
                  des principes fondamentaux de conception logicielle, en
                  mettant l'accent sur la séparation des préoccupations et la
                  maintenabilité du code. Je recommande sans hésiter surtout
                  pour se démarquer de la masse de développeurs !
                </Review>

                <Review
                  authorImage={AdrienVerschaere.src}
                  authorName="Adrien Verschaere"
                >
                  La formation Clean Architecture est clairement une référence à
                  avoir pour tous ceux qui cherchent à apprendre les bonnes
                  pratiques et faire du code professionnel et propre ! La
                  formation est bien structurée et Anthony fait preuve d'une
                  excellent pédagogie pour enseigner les concepts, il est
                  également toujours là pour nous répondre lorsqu'on a des
                  questions, ce qui permet d'avancer plus vite et de mieux
                  comprendre les concepts !
                </Review>

                <Review
                  authorImage={FlavioMoreno.src}
                  authorName="Flavio Moreno"
                >
                  Remettant continuellement en question la solidité et la
                  facilité de maintenance de mes programmes, j'ai finalement
                  obtenu des réponses grâce à la formation dispensée par
                  Anthony. J'ai ainsi découvert que mon code était bel et bien
                  robuste et maintenable, mais qu'il pouvait l'être encore bien
                  plus. Je tiens à souligner que cette formation est
                  incroyablement détaillée et complète, même pour des étudiants
                  débutant en programmation.
                </Review>
                <Review
                  authorImage={BastienCorre.src}
                  authorName="Bastien Corré"
                >
                  La formation théorique sur les principes fondamentaux de la
                  clean architecture m'a apporté beaucoup de précision sur des
                  concepts peu ou mal enseigné. Étant encore en étude j'en ai
                  plus appris pendant cette formation que pendant tous les
                  différents modules que j'ai pu suivre, qu'ils soient
                  d'architecture logicielle ou non. On retrouve ici des concepts
                  poussés mais expliqués d'une manière simple avec des exemples
                  à l'appui ce qui permet une compréhension profonde de ce qu'on
                  veut mettre en place. Je ne peux que recommander cette
                  formation, peu importe le niveau de compréhension de la
                  programmation logicielle.
                </Review>
                <Review
                  authorImage={FredericLossignol.src}
                  authorName="Frederic Lossignol"
                >
                  Formateur JS, Angular, Node.js orienté clean Architecture,
                  j'ai particulièrement aimé la précision de cette formation,
                  tant dans la terminologie du vocabulaire, que les comparaisons
                  des types de tests, leur raison d'être et le choix des tests à
                  privilégier selon les situations. Ce niveau de précision est
                  rare quand on parle des test, au niveau des développeurs,
                  c'est un plus indéniable de cette formation que je recommande
                  moi-même à mes apprenants.
                </Review>

                <Review authorName="Alex Boisseau">
                  Très content de la formation jusqu'ici, pas facile de tout
                  intégrer et c'est normal mais je trouve que tu as une très
                  bonne allure de croisière et que tu expliques bien les choses,
                  bravo !
                </Review>

                <Review
                  authorImage={AnthonyDelhaye.src}
                  authorName="Anthony Delhaye"
                >
                  Enfin une formation qui reprend les bases ou plutôt le socle
                  théorique de la clean architecture (bien plus que le livre du
                  même nom)
                </Review>
              </ReviewList>
            </section>
            <Courses />
          </Content>
        </Container>
      </ContentBody>
    </main>
  );
};

const Courses = () => {
  const discount = useCurrentDiscount();

  return (
    <>
      <section>
        <h2>Les Bundles</h2>
        <p>
          Pour toucher un maximum de développeurs, cette formation existe pour
          plusieurs langages.
          <br />
          <i>(payable en 2x et 3x)</i>
        </p>
        <CourseList>
          <Course
            imageUrl="https://cdn.filestackcontent.com/GRpxyomeR4iUNCauuZFu"
            isHot
            price={800}
            status={{
              type: "available",
              url: "https://courses.ancyracademy.fr/p/clean-architecture-mega-bundle",
            }}
            title="MegaBundle"
            discount={discount}
          >
            Toutes les formations Clean Architecture disponibles (JavaScript &
            Java) <b>+ celles à venir</b>
          </Course>
          <Course
            imageUrl="https://cdn.filestackcontent.com/SStck28YTRS73B1Ys9ls"
            price={600}
            status={{
              type: "available",
              url: "https://courses.ancyracademy.fr/p/clean-architecture-javascript-bundle",
            }}
            title="Fullstack JavaScript"
            discount={discount}
          >
            Contient les 3 formations "Clean Architecture Fondamentaux", "Clean
            Architecture API NestJS" & "Clean Architecture Frontend
            React/Next.js"
          </Course>

          <Course
            imageUrl="https://cdn.filestackcontent.com/2wspVDc5TaKYbLO11hIl"
            price={400}
            status={{
              type: "available",
              url: "https://courses.ancyracademy.fr/p/clean-architecture-java-bundle",
            }}
            title="Java"
            discount={discount}
          >
            Contient les 2 formations "Clean Architecture Fondamentaux" et
            "Clean Architecture Java/Spring"
          </Course>
        </CourseList>
      </section>
      <section>
        <h2>Les Formations</h2>
        <CourseList>
          {allCourses.map((course) => (
            <Course
              imageUrl={course.imageUrl}
              isHot={course.isHot}
              key={course.id}
              price={course.price}
              status={course.status}
              title={course.title}
              discount={discount}
            >
              {course.resume}
            </Course>
          ))}
        </CourseList>
      </section>
    </>
  );
};

const ContentBody = styled.div`
  margin-top: 80px;
`;

const Moneyback = styled.div`
  background-color: var(--color-primary);
  border-radius: 5px;

  padding: 40px;

  h2 {
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${pxToRem(32)};
  }

  p {
    color: white;
    font-size: ${pxToRem(22)};

    line-height: 1.3;
  }
`;
export default Page;
