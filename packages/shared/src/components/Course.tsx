import React from "react";
import styles from "./Course.module.scss";
import { Button } from "./Button";
import currency from "currency.js";

export const Course: React.FC<{
  title: string;
  price: number;
  upcomingPrice?: number;
  imageUrl: string;
  status: {
    type: "available";
    productId: string;
  };
  isHot?: boolean;
  children: React.ReactNode;
  discount?: {
    code?: string;
    percentage: number;
  } | null;
  previewUrl?: string;
}> = ({
  title,
  children,
  price,
  upcomingPrice,
  imageUrl,
  status,
  isHot,
  discount,
  previewUrl,
}) => {
  const baseUrl = `https://courses.ancyracademy.fr/purchase?product_id=${status.productId}`;
  const finalUrl = discount?.code
    ? `${baseUrl}&coupon_code=${discount.code}`
    : baseUrl;

  return (
    <div className={styles.view}>
      {isHot ? <div className={styles.hot_badge}>Hot</div> : null}
      <img className={styles.head_image} src={imageUrl} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{children}</p>
      </div>
      <div className={styles.price_section}>
        {discount ? (
          <div className={styles.pricings}>
            <p className={styles.old_pricing}>{upcomingPrice ?? price}.00€</p>
            <p className={styles.pricing}>
              {currency(price - price * discount.percentage).format({
                precision: 2,
                symbol: "",
              })}
              €
            </p>
          </div>
        ) : (
          <div className={styles.pricings}>
            {upcomingPrice && (
              <p className={styles.upcoming_price}>
                Bientôt à{" "}
                {currency(upcomingPrice).format({
                  precision: 2,
                  symbol: "",
                })}
                €
              </p>
            )}
            <p className={styles.pricing}>
              {currency(price).format({ precision: 2, symbol: "" })}€
            </p>
          </div>
        )}
      </div>

      <div className={styles.button_container}>
        <Button url={finalUrl!} wide>
          Acheter
        </Button>
        {!!previewUrl && (
          <Button url={previewUrl} wide tint={"secondary"} newTab>
            Prévisualiser
          </Button>
        )}
      </div>
    </div>
  );
};
