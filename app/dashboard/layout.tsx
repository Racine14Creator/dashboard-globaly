import Sidebar from "./components/Sidebar";

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
      {children}
    </div>
  );
}
