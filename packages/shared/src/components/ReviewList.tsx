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
  const [showAll, setShowAll] = useState(false);

  const reviewsToShow = showAll === false ? allReviews.slice(0, 3) : allReviews;

  return (
    <ReviewList>
      {reviewsToShow.map((review, index) => (
        <Review
          key={index}
          authorName={review.authorName}
          authorImage={review.authorImage}
        >
          {review.content}
        </Review>
      ))}
      {showAll === false && (
        <Button onClick={() => setShowAll(true)}>Voir plus</Button>
      )}
      {showAll === true && (
        <Button onClick={() => setShowAll(false)}>Voir moins</Button>
      )}
    </ReviewList>
  );
};
