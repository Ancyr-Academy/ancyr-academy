"use client";
import { notFound } from "next/navigation";
import React from "react";
import { Container } from "../ui/Container";
import { PostBody } from "./PostBody";

export const Post: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div>
      <Container>
        <article>
          <h2>{post.title}</h2>
          <PostBody>{post.body}</PostBody>
        </article>
      </Container>
    </div>
  );
};
