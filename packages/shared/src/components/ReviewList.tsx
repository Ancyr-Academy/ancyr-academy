"use client";

import styles from "./ReviewList.module.scss";
import React, { useState } from "react";
import { Review } from "./Review";
import { allReviews } from "../content/all-reviews";
import { Button } from "./Button";

export const ReviewList: React.FC<{ children: any }> = ({ children }) => {
  return <div className={styles.view}>{children}</div>;
};

export const CompleteReviewList = () => {
  const [countToShow, setCountToShow] = useState(3);

  return (
    <ReviewList>
      {allReviews.slice(0, countToShow).map((review, index) => (
        <Review
          key={index}
          authorName={review.authorName}
          authorImage={review.authorImage}
        >
          {review.content}
        </Review>
      ))}
      {countToShow < allReviews.length && (
        <Button
          onClick={() =>
            setCountToShow((state) => Math.min(allReviews.length, state + 5))
          }
        >
          Voir plus
        </Button>
      )}
    </ReviewList>
  );
};
