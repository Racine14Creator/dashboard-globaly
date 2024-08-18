import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";

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
        {children}
      </div>
    </div>
  );
}
