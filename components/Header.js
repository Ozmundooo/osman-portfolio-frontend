import React from "react";
import Logo from "../assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
export default function Header() {
  return (
    <>
      <header className="flex lg:justify-between lg:p-10 p-4  lg:place-items-center bg-black">
        <div>
          <Link href="/">
            <Image className=" w-[200px] lg:w-64" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="font-['Poppins'] text-white ">
          <ul className="lg:flex hidden flex-row align-middle gap-8 text-2xl">
            <Link href="/work">
              <li>Work</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden">
          <Sidebar />
        </div>
      </header>
    </>
  );
}
