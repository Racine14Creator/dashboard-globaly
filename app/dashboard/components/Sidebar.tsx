import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
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

      {/* Toggle Actions */}

      {/* Responsive  */}
    </>
  );
}
