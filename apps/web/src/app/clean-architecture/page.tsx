"use client";

import { styled } from "styled-components";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Container } from "../../modules/ui/Container";
import { Content } from "../../modules/course-selling-page/Content";
import { Course } from "../../modules/course-selling-page/Course";
import { CourseList } from "../../modules/course-selling-page/CourseList";
import { ReviewList } from "../../modules/course-selling-page/ReviewList";
import { Review } from "../../modules/course-selling-page/Review";
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
import { Promotional } from "../../modules/promotion/Promotional";
import { Overview } from "../../modules/course-selling-page/Overview";
import { allCourses } from "../../modules/formations/clean-architecture";
import { useCurrentDiscount } from "../../modules/promotion/discount-hooks";

const Page = () => {
  const discount = useCurrentDiscount();

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
              <h2>Une approche pragmatique et concrète</h2>
              <p>
                L’objectif de cette formation est de vous rendre capable de{" "}
                <b>
                  {" "}
                  coder des applications plus robustes et plus facile à
                  maintenir en situation réelle.
                </b>
              </p>
              <p>Vous y apprendez :</p>
              <ul>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Les principes fondateurs de la <b>Clean Architecture</b>
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
                    Comment tirer profit des <b>principes SOLID</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    A <b>modulariser votre code</b> pour
                    <b> travailler à plusieurs sur la même feature</b> sans se
                    marcher dessus
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    A rendre votre application
                    <b> entièrement testable en unitaire et en intégration</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Comment développer en <b>Test-Driven Development</b> afin de
                    faire émerger la solution au problème
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    A isoler votre{" "}
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
                    A créer toute votre application{" "}
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
            </section>
            <section>
              <h2>Les Bundle</h2>
              <p>Ces formations sont souvent achetées ensembles</p>
              <CourseList>
                <Course
                  imageUrl="https://cdn.filestackcontent.com/GRpxyomeR4iUNCauuZFu"
                  isHot
                  price={400}
                  status={{
                    type: "available",
                    url: "https://courses.ancyracademy.fr/p/clean-architecture-mega-bundle",
                  }}
                  title="MegaBundle"
                  discount={discount}
                >
                  Toutes les formations Clean Architecture disponibles
                  (JavaScript & Spring) +{" "}
                  <b>Celles à venir (.NET, Symfony...)</b>
                </Course>
                <Course
                  imageUrl="https://cdn.filestackcontent.com/SStck28YTRS73B1Ys9ls"
                  price={300}
                  status={{
                    type: "available",
                    url: "https://courses.ancyracademy.fr/p/clean-architecture-javascript-bundle",
                  }}
                  title="JavaScript Bundle"
                  discount={discount}
                >
                  L'ensemble des formations Clean Architecture JavaScript :{" "}
                  <b>Fondamentaux</b> + <b>Web NextJS</b> + <b>API NestJS</b>
                </Course>

                <Course
                  imageUrl="https://cdn.filestackcontent.com/2wspVDc5TaKYbLO11hIl"
                  price={180}
                  status={{
                    type: "available",
                    url: "https://courses.ancyracademy.fr/p/clean-architecture-java-bundle",
                  }}
                  title="Java Bundle"
                  discount={discount}
                >
                  L'ensemble des formations Clean Architecture en environnement
                  Java : <b>Fondamentaux</b> + <b>Java Spring</b>.
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

            <section>
              <h2>A qui s'adresse cette formation ?</h2>
              <p>Cette formation s'adresse à : </p>
              <ul>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tout développeur souhaitant atteindre{" "}
                    <b>un niveau Senior</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tout développeur préparant un{" "}
                    <b>entretien dans une entreprise à haut niveau technique</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    Tout développeur désireux d'écrire{" "}
                    <b>du code maintenable & extensible</b>
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <h2>Prérequis</h2>
              <p>Pour suivre cette formation, il est conseillé : </p>
              <ul>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    D'avoir déjà <b>développé quelques applications</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    D'être à l'aise avec les rudiments du code{" "}
                    <b>Orienté Objet</b>
                  </span>
                </li>
                <li>
                  <IoCheckmarkCircle />
                  <span>
                    D'être curieux et{" "}
                    <b>désireux d'en apprendre toujours plus</b>
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <h2>Ce qu'en disent les élèves (+800)</h2>
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
                <Review authorName="Geoffrey Villard">Vraiment Top !</Review>
              </ReviewList>
            </section>
          </Content>
        </Container>
      </ContentBody>
    </main>
  );
};

const ContentBody = styled.div`
  margin-top: 80px;
`;

export default Page;
