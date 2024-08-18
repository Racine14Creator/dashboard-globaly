import Link from "next/link";
import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";
import { LogOut, LogOutIcon } from "lucide-react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[280px_1fr] lg:grid-cols-[299px_1fr]'>
      <div className='hidden relative sidebar bg-primary md:block'>
        <Sidebar />
      </div>
      <div className='main ml-10'>
        <div className='hidden myBorderLeftBottom relative bg-blue-300 py-3  md:flex justify-end items-center w-full'>
          <div className='userInfo'>
            <UserInfo />
          </div>
        </div>
        <div className='absolute text-black flex flex-col gap-y-5 justify-between w-[220px] p-5 top-[96px] z-20 right-10 bg-white drop-shadow-md rounded-lg rounded-tr-none'>
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
        {children}
      </div>
    </div>
  );
}
