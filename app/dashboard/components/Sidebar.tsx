"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "..";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const activeLink =
    "/dashboard" + (pathname.split("/")[2] ? "/" + pathname.split("/")[2] : "");
  return (
    <>
      {/* Logo and the Toggle Icon */}

      <div className='wrapper mt-[21px]'>
        <div className='hidden md:flex md:w-[196px] md:justify-between items-center gap-10'>
          <Link href={"/dashboard"}>
            <Image
              alt='Globaly Logo'
              src={`/assets/Logo-Globaly.svg`}
              width={196}
              height={84}
            />
          </Link>
          <ChevronLeft className='w-[29px] h-[29px] cursor-pointer font-bold' />
        </div>
      </div>

      {/* NavLinks */}
      <div className='mt-5'>
        {NavLinks.map(({ id, name, link, icon: Icon }) => (
          <Link
            href={link}
            key={id}
            className={`transition-all links flex items-center gap-5 py-5 mr-4 font-normal hover:font-semibold ${
              activeLink === link && "activeLink"
            }`}
          >
            <Icon
              className={`ml-[48px] w-5 h-5 ${
                activeLink === link && "font-semibold text-3xl"
              }`}
            />
            <span className='hidden md:block'>{name}</span>
          </Link>
        ))}
      </div>

      {/* Toggle Actions */}

      {/* Responsive  */}
    </>
  );
}
