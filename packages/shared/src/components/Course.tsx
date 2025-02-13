import React from "react";
import styles from "./Course.module.scss";
import { Button } from "./Button";
import currency from "currency.js";

export const Course: React.FC<{
  title: string;
  price: number;
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
  imageUrl,
  status,
  isHot,
  discount,
  previewUrl,
}) => {
  let finalUrl: string | null = null;

  finalUrl = `https://courses.ancyracademy.fr/purchase?product_id=${status.productId}`;
  if (discount && discount.code) {
    finalUrl = finalUrl + `&coupon_code=${discount.code}`;
  }

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
          <>
            <p className={styles.old_pricing}>{price}.00€</p>
            <p className={styles.pricing}>
              {currency(price - price * discount.percentage).format({
                precision: 2,
                symbol: "",
              })}
              €
            </p>
          </>
        ) : (
          <p className={styles.pricing}>
            {currency(price).format({ precision: 2, symbol: "" })}€
          </p>
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
