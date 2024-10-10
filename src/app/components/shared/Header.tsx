"use client";
import { BrandLogoDark } from "@/app/icons/brand-logo-dark";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/app/utils/utils";

export const Header = () => {
  const [ontoggle, setOntoggle] = useState(false);

  const handleToggle = () => {
    setOntoggle((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setOntoggle(false);
  };

  return (
    <div className="bg-white w-full">
      <div className="flex container items-center justify-between ~pt-9/14 pb-1">
        <BrandLogoDark className="~w-24/[9.75rem]" />
        <nav className="hidden lg:flex items-center gap-10 text-base font-semibold font-open-sans text-dark-blue">
          <Link
            href="/"
            className="hover:text-brand-green ease-out duration-300 transition-colors"
          >
            Product
          </Link>
          <Link
            href="/"
            className="hover:text-brand-green ease-out duration-300 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/"
            className="hover:text-brand-green ease-out duration-300 transition-colors"
          >
            About
          </Link>
          <Button>Log in</Button>
        </nav>
        <div onClick={handleToggle} className="lg:hidden block">
          <Menu className="text-black" />
        </div>
        {ontoggle && (
          <div
            className={cn(
              "lg:hidden block h-full top-0 bottom-0 left-0 bg-black/70 fixed w-full z-30 transition-transform duration-300 ease-in-out "
            )}
          >
            <nav className="flex flex-col px-4 py-20 relative bg-white gap-10 text-base font-semibold font-open-sans text-dark-blue">
              <Link
                href="/"
                className="hover:text-brand-green ease-out duration-300 transition-colors"
                onClick={handleLinkClick}
              >
                Product
              </Link>
              <Link
                href="/"
                className="hover:text-brand-green ease-out duration-300 transition-colors"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                href="/"
                className="hover:text-brand-green ease-out duration-300 transition-colors"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Button onClick={handleLinkClick}>Log in</Button>
              <X
                className="text-dark-blue absolute right-4 top-7 cursor-pointer"
                onClick={handleToggle}
              />
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
