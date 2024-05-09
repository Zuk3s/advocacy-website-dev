"use client";

import { useState } from "react";
import { NavGroup } from "./Group";

export default function Collapse({
  children,
  notBackground,
}: {
  children: React.ReactNode;
  notBackground?: boolean;
}) {
  const [isColapsed, setIsColapsed] = useState(false);

  const toggleNavGroup = () => {
    setIsColapsed(!isColapsed);
  };

  return (
    <>
      <button
        className="md:hidden absolute end-10 top-8 z-20"
        onClick={toggleNavGroup}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <NavGroup notBackground={notBackground} Collapse={isColapsed}>
        {children}
      </NavGroup>
    </>
  );
}
