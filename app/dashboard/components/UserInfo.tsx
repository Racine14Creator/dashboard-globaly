"use client";

import { ChevronDown, ChevronUp, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  Role: string;
  companyName: string;
  profile: string;
};
const User = {
  name: "M. Waternoose",
  Role: "Admin",
  companyName: "Monster Inc - Enterprise",
  profile: "/assets/avatar.svg",
};

export default function UserInfo() {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  return (
    <>
      <div className='flex justify-between text-black items-center gap-5 mr-10'>
        <div className='userData flex flex-col'>
          <h3 className='text-sm font-semibold'>
            {User.name} - <span>{User.Role}</span>
          </h3>
          <span className='font-light text-sm'>{User.companyName}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <Image
            src={User.profile}
            alt={`Profile of ${User.name}`}
            width={100}
            height={100}
            className='w-[73px] h-[73px]'
          />
          {dropDownMenu ? (
            <ChevronUp
              className='text-2xl transition-all font-medium w-7 h-7 cursor-pointer hover:font-bold'
              onClick={() => setDropDownMenu(!dropDownMenu)}
            />
          ) : (
            <ChevronDown
              className='text-2xl  transition-all font-medium w-7 h-7 cursor-pointer hover:font-bold'
              onClick={() => setDropDownMenu(!dropDownMenu)}
            />
          )}
        </div>
      </div>
      <div className={`${dropDownMenu ? "block" : "hidden"}`}>
        <div
          className={`absolute text-black flex flex-col gap-y-5 justify-between w-[220px] p-5 top-[97px] z-20 right-10 bg-white drop-shadow-md rounded-lg rounded-tr-none`}
        >
          <div className='userData'>
            <h3 className='font-semibold px-3'>Hi, Talan!</h3>
            <span className='font-thin text-sm px-3'>user@example.com</span>
          </div>
          <div className='LinksDropDown '>
            <p className='flex  p-3 rounded-md justify-between items-center'>
              Dark Mode{" "}
              <input
                type='checkbox'
                className='toggle toggle-primary toggle-xs'
                defaultChecked
              />
            </p>
            <Link
              href={"/dashboard/settings"}
              className='flex hover:bg-blue-200 p-3 rounded-md transition-all hover:font-normal justify-between items-center'
            >
              Settings
            </Link>
          </div>
          <Link
            className='flex hover:bg-blue-200 p-3 rounded-md transition-all hover:font-normal justify-between items-center'
            href={"#logout"}
          >
            Logout <LogOutIcon className='w-5 h-5 text-red-500' />
          </Link>
        </div>
      </div>
    </>
  );
}
