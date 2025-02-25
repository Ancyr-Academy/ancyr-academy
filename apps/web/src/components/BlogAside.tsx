"use client";

import styles from "./BlogAside.module.scss";
import React from "react";
import { allCourses, useCurrentDiscount } from "@ancyracademy/shared";
import Link from "next/link";

export const BlogAside = ({}) => {
  const discount = useCurrentDiscount();

  return (
    <div>
      <div className={styles.about}>
        <img
          className={styles.about_avatar}
          src={
            "https://ancyracademy-public.s3.eu-west-1.amazonaws.com/website/core/ancyr.jpg"
          }
        />
        <p className={styles.about_text}>
          Je suis Anthony Cyrille, Formateur, Coach technique & Architecte
          Logiciel indépendant. Ma mission est de{" "}
          <b>démystifier les concepts complexes de l'ingénierie logicielle.</b>
        </p>
      </div>
      <div className={styles.mini_course_section}>
        <h4 className={styles.mini_course_section_intro}>Nos cours</h4>
        {allCourses.map((course) => (
          <Link href={course.url} className={styles.mini_course}>
            <img
              className={styles.mini_course_image}
              src={course.imageUrl}
              alt={course.title}
            />
            <p className={styles.mini_course_resume}>{course.resume}</p>
            {discount !== null && course.isFree === false && (
              <div className={styles.mini_course_hot}>En promo !</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
