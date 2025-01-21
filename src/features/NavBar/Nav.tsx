"use client";

import Logo from "../../../public/logo-b.png";
import Image from "next/image";
import { Section } from "@/components/Content/Section";
import { useState } from "react";
import { NavLink } from "@/features/NavBar/components/Link";
import CollapseButton from "@/features/NavBar/components/CollapseButton";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent py-6">
      <Section>
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image src={Logo} alt="" className="sm:w-16 w-14 object-cover" />
          </div>
          <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
            <div className="flex items-baseline space-x-4">
              <NavLink  />
            </div>
          </div>
          <div className="md:hidden">
            <CollapseButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open main menu</span>
            </CollapseButton>
          </div>
        </div>
      </Section>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-800/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-slate-900 shadow-lg">
            <div className="flex items-center justify-between h-28 px-6">
              <span className="text-white text-lg font-bold">Menu</span>
              <CollapseButton isOpen={isOpen} onClick={() => setIsOpen(false)}>
                <span className="sr-only">Close main menu</span>
              </CollapseButton>
            </div>
            <div className="px-2 pt-4 pb-3 space-y-2 flex flex-col">
              <NavLink isFullWidth={isOpen} onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
