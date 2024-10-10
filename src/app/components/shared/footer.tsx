import { BrandLogoDark } from "@/app/icons/brand-logo-dark";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

export const Footer = () => {
  return (
    <div className="~pt-16/24 ~pb-16/28 font-open-sans bg-white container">
      <div className="flex lg:flex-row flex-col ~gap-20/44">
        <div className="flex flex-col gap-10">
          <BrandLogoDark className="~w-24/[9.75rem]" />
          <p className="font-open-sans text-base text-gray-500 md:max-w-[500px] lg:max-w-[300px]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-start ~gap-10/24">
          <div className="flex flex-col ~gap-5/7 ~text-lg/xl">
            <p className="font-bold text-black">Landings</p>
            <Link
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
              href="/"
            >
              Home{" "}
            </Link>
            <Link
              href="/Product"
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
            >
              Product
            </Link>
            <Link
              href="/Services"
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
            >
              Services
            </Link>
          </div>
          <div className="flex flex-col ~gap-5/7 ~text-lg/xl">
            <p className="font-bold text-black">Company</p>
            <Link
              href="/About"
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/Contact"
              className="text-gray-500 hover:text-brand-green flex gap-1 items-center ease-out duration-300 transition-colors"
            >
              Careers
              <Badge name="Hiring!" />
            </Link>
            <Link
              href="/Blog"
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
            >
              Services
            </Link>
          </div>
          <div className="flex flex-col ~gap-5/7 ~text-lg/xl">
            <p className="font-bold text-black">Resources</p>
            <Link
              href="/Blog"
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/About"
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/Contact"
              className="text-gray-500 hover:text-brand-green ease-out duration-300 transition-colors"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 mt-3 font-open-sans">All rights reserved.</p>
    </div>
  );
};
