"use client";

import { ExternalLink, Menu, User, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useIsMobile } from "@/hooks/isMobile";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonDefault, ButtonOutline } from "./Button";

const navigationItems = [
  { name: "Sobre", href: "#about" },
  { name: "Comunidades", href: "#comunity" },
  { name: "Projetos", href: "#projects" },
  { name: "Depoimentos", href: "#testmonials" },
  { name: "Contato", href: "#contact" },
];

const HeaderMobile = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <ButtonOutline>
          <Menu />
        </ButtonOutline>
      </SheetTrigger>
      <SheetContent className="bg-primary border-none w-full">
        <SheetHeader>
          <SheetClose className="text-text-high self-end px-4">
            <X />
          </SheetClose>
          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="H4rt Logo"
              className="px-4"
              width={100}
              height={16}
            />
          </Link>
        </SheetHeader>
        <nav>
          <ul className=" flex flex-col px-8">
            {navigationItems.map((item) => {
              return (
                <li
                  key={item.name}
                  className="px-3 py-4 rounded-lg focus-within:ring focus-within:ring-neutral-outline"
                  onClick={() => setSheetOpen(false)}
                >
                  <Link
                    href={item.href}
                    //
                    className="font-family-secondary font-semibold text-base text-text-high hover:bg-transparent hover:underline hover:text-text-high hover:underline-offset-4 focus:outline-none"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <SheetFooter>
          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/he4rt/he4rt-landing"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonOutline>
                Github <ExternalLink />
              </ButtonOutline>
            </a>

            <ButtonDefault>
              <User />
              Entrar Agora
            </ButtonDefault>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const HeaderDesktop = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="gap-11">
          {navigationItems.map((item) => {
            return (
              <NavigationMenuItem key={item.name}>
                <Link
                  href={item.href}
                  className="font-family-secondary font-semibold text-base text-text-high hover:bg-transparent hover:underline hover:text-text-high hover:underline-offset-4"
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-8">
        <a
          href="https://github.com/he4rt/he4rt-landing"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonOutline>
            Github <ExternalLink />
          </ButtonOutline>
        </a>

        <ButtonDefault>
          <User />
          Entrar Agora
        </ButtonDefault>
      </div>
    </>
  );
};

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-primary flex items-center justify-between px-4 sm:px-16 py-6  fixed top-0 z-50 w-full">
      <Link href="#he4rt">
        <Image src="/images/Logo.svg" alt="H4rt Logo" width={147} height={21} />
      </Link>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};
