export type WorkshopType = {
  title: string;
  resume: string;
  imageUrl: string;
  url: string;
  nextDates: string;
};

export const allWorkshops = [
  {
    title: "Domain-Driven Design",
    resume:
      "Maitrisez la complexité de votre logiciel avec le Domain-Driven Design et apprenez comment le mettre en oeuvre dans vos propres applications",
    imageUrl:
      "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/workshops/w_ddd.png",
    url: "/workshops/ddd",
    nextDates: "Les Mardis, du 20 Janvier au 3 Mars 2025",
  },
];
