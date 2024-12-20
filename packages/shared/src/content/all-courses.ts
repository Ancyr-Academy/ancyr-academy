type CourseType = "Cours Complet" | "Essentials";

type Course = {
  title: string;
  resume: string;
  type: CourseType;
  keyPoints: string[];
  isNew?: boolean;
  isFree: boolean;
  isHot: boolean;
  imageUrl: string;
  url: string;
};

export const allCourses: Course[] = [
  {
    title: "Test-Driven Development",
    resume:
      "Apprenez à développer des applications riches & complexes en étant véritablement guidés par les tests.",
    type: "Cours Complet",
    url: "/test-driven-development",
    keyPoints: [
      "Découvrir ce qu'est le TDD",
      "Apprendre à décomposer une tâche complexes en sous tâches",
      "Guider le développement de features difficiles par les tests",
      "Enfin comprendre le Classicisme et le Mockisme",
      "Savoir quand utiliser l'un ou l'autre selon le contexte",
      "Faire du TDD dans des projets complexes",
    ],
    isNew: false,
    isFree: false,
    isHot: false,
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/4IOk4vyYRAilc9MnO8LE",
  },
  {
    title: "Clean Architecture",
    resume:
      "Apprenez à développer des applications robustes et scalables en mettant en place une Clean Architecture testée de bout en bout.",
    type: "Cours Complet",
    url: "/clean-architecture",
    keyPoints: [
      "Découvrir les principes de la Clean Architecture",
      "Différencier les types de tests et leur utilité",
      "Reconnaître et appliquer les patterns les plus courants pour garder ses tests souples",
      "Mettre en place une stratégie de tests adapté au projet en cours",
      "Mettre en place des tests d’intégration facilement en automatisé",
      "Structurer et découper ses tests selon la difficulté du code à tester et le besoin du client",
    ],
    isFree: false,
    isHot: false,
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/WV6TlGkbRQChrQCdtLbn",
  },
  {
    title: "Tests Unitaires",
    resume:
      "Découvrez ce que sont les tests unitaires et apprenez à les mettre en oeuvre dans n’importe quel type de projet, qu’il s’agisse d’une app, d’un CLI ou d’un jeu.",
    type: "Essentials",
    url: "https://courses.ancyracademy.fr/p/essentials-tests-unitaires",
    keyPoints: [
      "Définir ce que sont les tests automatisés",
      "Différencier les types de tests et leur utilité",
      "Reconnaître et appliquer les patterns les plus courants pour garder ses tests souples",
      "Mettre en place une stratégie de tests adapté au projet en cours",
      "Mettre en place des tests d’intégration facilement en automatisé",
      "Structurer et découper ses tests selon la difficulté du code à tester et le besoin du client",
    ],
    isFree: true,
    isHot: false,
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/ZPoSCdqeQK2NNUe8DDkP",
  },
  {
    title: "Principes SOLID",
    resume:
      "Découvrez les principes SOLID en profondeur avec des exemples de code tirés de la vie réelle.",
    type: "Essentials",
    url: "https://courses.ancyracademy.fr/p/essentials-principes-solid",
    keyPoints: [
      "Définir l'origine des principes SOLID",
      "Comprendre chacun des principes",
      "Apprendre comment les exploiter dans vos projets",
      "Savoir quand les utiliser et quand les éviter",
    ],
    isFree: true,
    isHot: false,
    imageUrl:
      "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/6dxz2j8gRWiiSR2SihPY",
  },
];
