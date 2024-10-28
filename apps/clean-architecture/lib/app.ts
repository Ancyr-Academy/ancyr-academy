import { endOfDay } from "date-fns";

export const getCourseURL = () =>
  "https://courses.ancyracademy.fr/p/clean-architecture-mega-bundle";

export const endOfPromotion = endOfDay(new Date("2024-01-09T00:00:00"));
export const percentage = 0.4
export const isInPromotion = () => {
    const now = new Date();
    return now.getTime() < endOfPromotion.getTime();
}

export const code = 'HEY2024'