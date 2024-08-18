import { ChevronDown } from "lucide-react";
import Image from "next/image";

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
  return (
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
        <ChevronDown className='text-2xl font-medium w-7 h-7 cursor-pointer hover:font-bold' />
      </div>
    </div>
  );
}
