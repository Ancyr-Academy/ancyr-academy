export type WorkshopType = {
  title: string;
  resume: string;
  imageUrl: string;
  url: string;
  dates: string;
  duration: string;
  level: string;
  environment: string;
  programUrl: string;
};

export const allWorkshops = [
  // {
  //   title: "Test-Driven Development",
  //   resume: [
  //     "Dans cette formation, vous apprendrez les rudiments du Test-Driven Development (TDD) ",
  //     "en partant de programmes simples jusqu'à créer de vraies application. ",
  //     "Vous découvrirez les différentes écoles de TDD (Stateism & Mockism), ",
  //     "leurs avantages et inconvénients et comment les exploiter dans vos programmes. ",
  //     "Vous y apprendrez également plusieurs patterns de tests avancés destinés à rendre votre ",
  //     "suite de tests flexible, solide et resistante aux refactorings.",
  //   ].join(""),
  //   imageUrl: "",
  //   url: "https://4yv4n2t0bjp.typeform.com/to/SiD3eztl",
  //   dates: "14 / 15 Janvier 2025",
  //   duration: "2 jours",
  //   level: "Tout niveau",
  //   environment: "JavaScript (TS)",
  //   programUrl:
  //     "https://docs.google.com/document/d/1SuxkImDgFAcJSC1sSAwXDzP_gS6mGQQL/edit?usp=sharing&ouid=100271380031090031223&rtpof=true&sd=true",
  // },
  {
    title: "Clean Architecture - React + SSR (Next)",
    resume: [
      "Dans cette formation, vous apprendrez les rudiments de la Clean Architecture ",
      "ainsi que les moyens de la mettre en pratique dans votre développement logiciel front-end. ",
      "Vous y apprendrez comment découper votre application en modules, à faire émerger vos Use Cases, à tester ",
      "intelligemment votre code et à couvrir de tests la partie complexe de votre application. ",
      "Vous apprendrez également comment développer vos pages React avec une boucle de TDD (via testing-library) avant de ",
      "descendre d'un cran. Enfin, vous découvrirez comment exploiter les React Server Components et le SSR en gardant votre code ",
      "testable pour gagner en SEO et en performances.",
    ].join(""),
    imageUrl: "",
    url: "https://4yv4n2t0bjp.typeform.com/to/T2syJXJf",
    dates: "8 / 9 Avril 2025",
    duration: "2 jours",
    level: "Tout niveau",
    environment: "JavaScript (TS), React, Next",
    programUrl:
      "https://docs.google.com/document/d/1SuK8yJvZqzGZWqvqANGhQiEFiTMYJiJi/edit?usp=sharing&ouid=100271380031090031223&rtpof=true&sd=true",
  },
  {
    title: "Clean Architecture - BackEnd NodeJS",
    resume: [
      "Dans cette formation, vous apprendrez les rudiments de la Clean Architecture ",
      "ainsi que les moyens de la mettre en pratique dans votre développement logiciel back-end. ",
      "Vous y apprendrez comment découper votre application en modules, à faire émerger vos Use Cases, à tester ",
      "intelligemment votre code sans écrire trop de tests, à tester de bout en bout votre programme avec ",
      "les différentes formes de tests (Unit, Integration, e2e) et à déployer votre code ",
      "en production en toute confiance.",
    ].join(""),
    imageUrl: "",
    url: "https://4yv4n2t0bjp.typeform.com/to/tpEmYrMO",
    dates: "15 / 16 Avril 2025",
    duration: "2 jours",
    level: "Tout niveau",
    environment: "JavaScript (TS), NestJS",
    programUrl:
      "https://docs.google.com/document/d/1SuVpRJkSU1cbu6VmoXLjnV1IchCe2QJg/edit?usp=sharing&ouid=100271380031090031223&rtpof=true&sd=true",
  },
];
