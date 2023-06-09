"use client";

// client component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.href} href={link.href} className={isActive ? "active" : ""}>
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
