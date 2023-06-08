import React from "react";
import Link from "next/link";

type Props = {};

const TheHeader = (props: Props) => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default TheHeader;
