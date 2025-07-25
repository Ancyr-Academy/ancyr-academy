type Course = {
  title: string;
  resume: string;
  isNew?: boolean;
  isFree: boolean;
  isHot: boolean;
  imageUrl: string;
  url: string;
};

export const allCourses: Course[] = [
  {
    title: "Clean Architecture",
    resume:
      "Apprenez à développer des applications robustes et scalables en mettant en place une Clean Architecture testée de bout en bout.",
    url: "/clean-architecture",
    isFree: false,
    isHot: true,
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_ca.png",
  },
  {
    title: "CQRS",
    resume:
      "Découvrez le pattern CQRS et apprenez comment simplifier votre code en séparant les opérations de lecture et d’écriture.",
    url: "/cqrs",
    isFree: false,
    isHot: true,
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_cqrs.png",
  },
  {
    title: "Test-Driven Development",
    resume:
      "Apprenez à développer des applications riches & complexes en étant véritablement guidés par les tests.",
    url: "/test-driven-development",
    isNew: false,
    isFree: false,
    isHot: false,
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_tdd.png",
  },
  {
    title: "Tests Unitaires",
    resume:
      "Découvrez ce que sont les tests unitaires et apprenez à les mettre en oeuvre dans n’importe quel type de projet, qu’il s’agisse d’une app, d’un CLI ou d’un jeu.",
    url: "https://courses.ancyracademy.fr/p/essentials-tests-unitaires",
    isFree: true,
    isHot: false,
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_tests_unitaires.png",
  },
  {
    title: "Principes SOLID",
    resume:
      "Découvrez les principes SOLID en profondeur avec des exemples de code tirés de la vie réelle.",
    url: "https://courses.ancyracademy.fr/p/essentials-principes-solid",
    isFree: true,
    isHot: false,
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/courses/v_solid.png",
  },
];
