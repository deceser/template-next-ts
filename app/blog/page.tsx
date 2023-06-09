import React from "react";
import { Metadata } from "next";

import PostsList from "@/components/PostsList";
import PostSearch from "@/components/PostSearch";

type Props = {};

export const metadata: Metadata = {
  title: "Blog | Template Next-TS",
};

const Blog = async (props: Props) => {
  return (
    <>
      <h1>Blog</h1>
      <PostSearch />
      <PostsList />
    </>
  );
};

export default Blog;
