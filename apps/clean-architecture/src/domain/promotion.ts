import { endOfPromotion } from "../../lib/app";

export const secondsBeforeEndOfPromotion = () => {
  const now = new Date();
  const diff = endOfPromotion.getTime() - now.getTime();
  return Math.floor(diff / 1000);
};
