"use client";

import React from "react";

import { getPostBySearch } from "@/services/getData";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = React.useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostBySearch(search);

    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search" value={search} onChange={(event) => setSearch(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
