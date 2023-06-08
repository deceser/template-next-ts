import React from "react";

import Navigation from "./Navigation";

type Props = {};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = (props: Props) => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export default TheHeader;
