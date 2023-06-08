import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

const getPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, // post updates every minute
    },
  });

  return res.json();
};

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
  const post = await getPost(id);

  return {
    title: post.title, // dynamic SEO optimization, this is the name of the post
  };
};

const Post = async ({ params: { id } }: Props) => {
  const post = await getPost(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
