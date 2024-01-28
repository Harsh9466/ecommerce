"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import Logo from "@/assets/images/logo/TradeHub.svg";
import LogoWhite from "@/assets/images/logo/TradeHub-white.svg";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme } = useTheme();

  return (
    <>
      <nav
        class="relative pt-4 bg-transparent"
        data-config-id="toggle-mobile"
        data-config-target=".navbar-menu"
        data-config-class="hidden"
      >
        <div class="container px-4 mx-auto">
          <div class="flex items-center">
            <a class="inline-block text-lg font-bold" href="#">
              <Image
                class="h-10"
                src={theme === "light" ? Logo : LogoWhite}
                alt=""
                width={"200"}
                height={"50"}
              ></Image>
            </a>
            <div class="lg:hidden ml-auto">
              <button class="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-config-id="auto-svg-1-2"
                >
                  <path
                    d="M3 12H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 6H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 18H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <ul class="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
              <li class="group relative">
                <a
                  class="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  href="#"
                  data-config-id="auto-txt-1-2"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  class="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  href="#"
                  data-config-id="auto-txt-11-2"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  class="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  href="#"
                  data-config-id="auto-txt-12-2"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  class="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  href="#"
                  data-config-id="auto-txt-13-2"
                >
                  Articles
                </a>
              </li>
            </ul> */}
            <div class="hidden lg:flex ml-14 lg:w-80 lg:space-x-12">
              <Input
                placeholder="Search Products"
                className="outline-none shadow-none"
              />
            </div>
            <div class="hidden lg:block ml-auto">
              <div class="flex items-center">
                <a
                  class="inline-block mr-9 text-sm font-semibold hover:text-gray-900"
                  href="#"
                  data-config-id="auto-txt-14-2"
                >
                  Sign In
                </a>
                <a
                  class="relative group inline-block py-2 px-4 text-sm font-semibold hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
                  href="#"
                >
                  <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span class="relative" data-config-id="auto-txt-15-2">
                    Create an account
                  </span>
                </a>
                <div className='ms-4'>
                <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-2" />
      </nav>
    </>
  );
}
