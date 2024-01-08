"use client";

import styled from "styled-components";
import React from "react";
import { Book } from "../../modules/books/components/Book";
import { Container } from "../../modules/ui/Container";
import { PageIntro } from "../../modules/ui/PageIntro";
import { mediaQuery, size } from "../../modules/ui/media-query";
import { Intro } from "../../modules/course-selling-page/Intro";
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
import Chaka from "../../assets/reviews/chaka.jpeg";

const Page = () => {
  return (
    <main>
      <Intro title="Développez des application robustes et scalables avec la Clean Architecture" />
      <ContentBody>
        <Container>
          <Content>
            <section>
              <h2>Une approche pragmatique et concrète</h2>
              <p>
                L’objectif de cette formation est de vous rendre capable de
                coder des applications plus robustes et plus facile à maintenir
                en situation réelle.
              </p>
              <p>Vous y apprendez :</p>
              <ul>
                <li>Les principes fondateurs de la Clean Architecture</li>
                <li>
                  Comment structurer vos applications, front-end comme back-end
                </li>
                <li>Comment tirer profit des principes SOLID</li>
                <li>
                  A modulariser votre code afin d’être capable de travailler à
                  plusieurs sur la même feature sans se marcher dessus
                </li>
                <li>
                  A rendre votre application entièrement testable en unitaire et
                  en intégration
                </li>
                <li>
                  A isoler votre logique métier des détails d’infrastructure
                </li>
                <li>
                  Comment se rendre indépendant de la base de données et changer
                  de technologie au besoin
                </li>
                <li>
                  Comment tirer parti du Domain-Driven Design pour faire émerger
                  la problématique métier à l’intérieur de votre code
                </li>
                <li>
                  A tirer parti du CQRS pour optimiser différemment votre modèle
                  de lecture et votre modèle d’écriture
                </li>
              </ul>
            </section>

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
              <h2>Ce que contient cette formation</h2>
              <p>En rejoignant cette formation, vous bénéficierez :</p>
              <ul>
                <li>
                  De dizaines d’heures de cours dans lesquels je code devant
                  vous
                </li>
                <li>D’un accès illimité au support de formation en VoD</li>
                <li>D’une communauté privée des élèves de la formation</li>
                <li>De mises à jour gratuites et illimités du contenu à vie</li>
                <li>
                  D’un accès anticipé aux futures formations et aux workshops
                </li>
              </ul>
            </section>

            <section>
              <h2>Les Formations</h2>
              <CourseList>
                <Course
                  imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/mBkKdN7QdaTOzbWXW9WF"
                  price={50}
                  text="Apprenez la théorie derrière la Clean Architecture en étudiant les concepts de principes SOLID, d’injection de dépendance et des patterns de la Clean Architecture."
                  title="Fondamentaux"
                  url="https://courses.ancyracademy.fr/courses/enrolled/2416567"
                />
                <Course
                  imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/HQeGzGLBT3iMntw82WdE"
                  price={150}
                  text="Apprenez à développer une application front-end en Clean Architecture avec des tests unitaires en utilisant le framework NextJS version 13."
                  title="Front-End NextJS"
                  url="https://courses.ancyracademy.fr/courses/enrolled/2416572"
                />
                <Course
                  imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/FI20zcQx6Wx1WweQUZmg"
                  price={150}
                  text="Apprenez à développer une application back-end en Clean Architecture avec le framework NestJS avec une suite de tests complète, allant des tests unitaires aux tests e2e."
                  title="Back-End NestJS"
                  url="https://courses.ancyracademy.fr/courses/enrolled/2416574"
                />
              </CourseList>
            </section>

            <section>
              <h2>Les Bundle</h2>
              <p>Ces formations sont souvent achetées ensembles</p>
              <CourseList>
                <Course
                  imageUrl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/WV6TlGkbRQChrQCdtLbn"
                  price={300}
                  text="L'ensemble des formations Clean Architecture (Fondamentaux + NextJS + NestJS) et les futures formations sur la Clean Architecture."
                  title="MegaBundle"
                  url="https://courses.ancyracademy.fr/p/clean-architecture-mega-bundle"
                />
              </CourseList>
            </section>
            <section>
              <h2>Ce qu'en disent les élèves</h2>
              <ReviewList>
                <Review authorName="Chaka">
                  Avant cette formation, je cherchais à améliorer la qualité et
                  la maintenabilité des architectures Front-end. Cette formation
                  a non seulement répondu à mes attentes, mais elle les a même
                  dépassées. cette formation a été extrêmement enrichissante et
                  m'a permis de consolider mes connaissances en clean
                  architecture. Je la recommande vivement à quiconque souhaite
                  améliorer ses compétences en matière d'architecture Front-end.
                </Review>
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
