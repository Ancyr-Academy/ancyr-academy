import React from "react";
import styles from "./Course.module.scss";
import { Button } from "./Button";

export const Course: React.FC<{
  title: string;
  price: number;
  imageUrl: string;
  status:
    | {
        type: "available";
        url: string;
      }
    | {
        type: "soon";
      }
    | {
        type: "unavailable";
      };
  isHot?: boolean;
  children: React.ReactNode;
  discount?: {
    code?: string;
    percentage: number;
  } | null;
}> = ({ title, children, price, imageUrl, status, isHot, discount }) => {
  let finalUrl: string | null = null;

  if (status.type === "available") {
    finalUrl = status.url;
    if (discount && discount.code) {
      finalUrl = `${status.url}?coupon_code=${discount.code}`;
    }
  }

  return (
    <div className={styles.view}>
      {isHot ? <div className={styles.hot_badge}>Hot</div> : null}
      <img className={styles.head_image} src={imageUrl} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{children}</p>
        {status.type === "available" && (
          <>
            {discount ? (
              <>
                <p className={styles.old_pricing}>{price}€ TTC</p>
                <p className={styles.pricing}>
                  {price - price * discount.percentage}€ TTC
                </p>
              </>
            ) : (
              <p className={styles.pricing}>{price}€ TTC</p>
            )}
          </>
        )}
      </div>

      <div className={styles.button_container}>
        {status.type === "available" && (
          <Button url={finalUrl!} wide>
            Découvrir
          </Button>
        )}
        {status.type === "soon" && (
          <Button disabled tint="secondary" wide>
            En développpement
          </Button>
        )}
        {status.type === "unavailable" && (
          <Button disabled tint="tertiary" wide>
            Indisponible
          </Button>
        )}
      </div>
    </div>
  );
};
