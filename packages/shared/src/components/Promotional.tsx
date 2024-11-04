"use client";

import React from "react";
import { useDiscountDuration } from "../discount-hooks";
import { Container } from "./Container";

import styles from "./Promotional.module.scss";
import { Duration } from "../lib/duration";

export const PromotionalUI: React.FC<{
  duration: Duration;
  title: string;
  message: any;
}> = ({ duration, title, message }) => {
  if (duration.total === 0) {
    return null;
  }

  return (
    <div className={styles.view}>
      <Container>
        <div className={styles.subview}>
          <div className={styles.left}>
            <h2 className={styles.title}>{title.toUpperCase()}</h2>
            <div className={styles.content}>{message}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.countdowns}>
              <div className={styles.countdown}>
                <div className={styles.countdown_number}>
                  {duration.pad(duration.days)}
                </div>
                <div className={styles.countdown_label}>jours</div>
              </div>
              <div className={styles.countdown}>
                <div className={styles.countdown_number}>
                  {duration.pad(duration.hours)}
                </div>
                <div className={styles.countdown_label}>heures</div>
              </div>
              <div className={styles.countdown}>
                <div className={styles.countdown_number}>
                  {duration.pad(duration.minutes)}
                </div>
                <div className={styles.countdown_label}>minutes</div>
              </div>
              <div className={styles.countdown}>
                <div className={styles.countdown_number}>
                  {duration.pad(duration.seconds)}
                </div>
                <div className={styles.countdown_label}>sec</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const Promotional: React.FC = () => {
  const { duration, discount } = useDiscountDuration();

  if (!discount) {
    return null;
  }

  return (
    <PromotionalUI
      duration={duration}
      title={"En cours"}
      message={
        <>
          Jusqu'à <b>-{discount!.percentage * 100}%</b> sur les{" "}
          <b>cours en e-learning</b> avec le code <b>{discount!.code}</b>
        </>
      }
    />
  );
};
