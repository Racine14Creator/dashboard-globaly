import { InfoIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className='max-w-7xl mx-auto md:mr-20 grid grid-cols-1 gap-10 md:grid-cols-3 my-5'>
      <div className='bg-white hover:drop-shadow-lg p-10 text-black rounded-2xl drop-shadow-md'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className='text-blueCustome font-bold text-2xl'>Plan</h3>
          <span className='text-sm font-thin text-blueCustome'>(Startup)</span>
        </div>
        <div className='content my-5 flex flex-col gap-y-5'>
          <p className='flex flex-row text-lg font-sans font-light justify-between'>
            <span>Spaces</span>
            <span>7</span>
          </p>
          <p className='flex flex-row text-lg font-sans font-light justify-between'>
            <span className='flex flex-row gap-2 items-center'>
              Discount <InfoIcon className='w-3 h-3' />
            </span>
            <span>-20%</span>
          </p>
          <p className='flex flex-row text-lg font-sans font-light justify-between'>
            <span className='flex flex-row gap-2 items-center'>
              Cost <InfoIcon className='w-3 h-3' />
            </span>
            <span>$500</span>
          </p>
        </div>
        <p className='text-[14px] font-sans font-light mt-5'>
          Did you know that you can control cost by turning the spaces you don't
          need off?
        </p>
      </div>
      <div className='bg-white hover:drop-shadow-lg p-10 text-black rounded-2xl drop-shadow-md'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className='text-blueCustome font-bold text-2xl'>Users</h3>
        </div>
        <div className='content flex flex-row gap-5 my-10'>
          <div className=''>Active User</div>
          <div className=''>Inactive User</div>
        </div>
        <p className='text-[14px] font-sans font-light mt-5'>
          Did you know that you can control cost by turning the spaces you don't
          need off?
        </p>
      </div>
      <div className='bg-white hover:drop-shadow-lg p-10 text-black rounded-2xl drop-shadow-md'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className='text-blueCustome font-bold text-2xl'>Plan</h3>
          <span className='text-sm font-thin text-blueCustome'>(Startup)</span>
        </div>
        <div className='content my-5 flex flex-col gap-y-5'>
          <p className='flex flex-row text-lg font-sans font-light justify-between'>
            <span>Spaces</span>
            <span>7</span>
          </p>
          <p className='flex flex-row text-lg font-sans font-light justify-between'>
            <span className='flex flex-row gap-2 items-center'>
              Discount <InfoIcon className='w-3 h-3' />
            </span>
            <span>-20%</span>
          </p>
          <p className='flex flex-row text-lg font-sans font-light justify-between'>
            <span className='flex flex-row gap-2 items-center'>
              Cost <InfoIcon className='w-3 h-3' />
            </span>
            <span>$500</span>
          </p>
        </div>
        <p className='text-[14px] font-sans font-light mt-5'>
          Did you know that you can control cost by turning the spaces you don't
          need off?
        </p>
      </div>
    </div>
  );
}
