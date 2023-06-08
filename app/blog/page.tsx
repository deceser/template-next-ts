import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {};

// server function

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60, // post updates every minute
    },
  });

  if (!res.ok) throw new Error("Unable to fetch posts!");

  return res.json();
};

export const metadata: Metadata = {
  title: "Blog | Template Next-TS",
};

const Blog = async (props: Props) => {
  const posts = await getData();

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
