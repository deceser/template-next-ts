"use client";

import React from "react";
import { Metadata } from "next";

import PostsList from "@/components/PostsList";
import PostSearch from "@/components/PostSearch";

import { getData } from "@/services/getData";

type Props = {};

export const metadata: Metadata = {
  title: "Blog | Template Next-TS",
};

const Blog = async (props: Props) => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getData()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <PostsList posts={posts} />}
    </>
  );
};

export default Blog;
