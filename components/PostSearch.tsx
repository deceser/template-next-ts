"use client";

import React from "react";
import useSWR from "swr";

import { getPostsBySearch } from "@/services/getData";

type Props = {};

const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = React.useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search" value={search} onChange={(event) => setSearch(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
