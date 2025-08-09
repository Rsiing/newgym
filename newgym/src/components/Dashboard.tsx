import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='lg:w-[80%] mx-auto'>
      <div className='flex flex-col justify-center items-center p-20  mx-auto cursor-default'>
          <h1 className='flex flex-col xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl my-10 font-extrabold'>
            <span className='xl:text-4xl lg:text-3xl md:text-2xl text-xl flex text-violet-500'>
              Welcome back
            </span>To your FitrLyfe dashboard
          </h1>

          <button className="border-3 border-gray-600 hover:border-gray-500 font-bold
                  duration-200 px-4 py-2 rounded-3xl text-gray-400 lg:text-xl md:text-lg sm:text-base">
                  Where to start? check out the
              <Link to="/guide" className='text-violet-500 font-bold pl-1 cursor-pointer'> get started guide →</Link>
          </button>
      </div>
      <h2 className='text-violet-500 xl:text-3xl lg:text-2xl text-xl font-bold pb-4'>wellness quick links</h2>
      <div className='grid grid-cols-3 mx-auto cursor-default gap-10 mb-12'>
        <div className='w-full shadow-xl mx-auto h-40 rounded-xl bg-[#191919]'></div>
        <div className='w-full shadow-xl mx-auto h-40 rounded-xl bg-[#191919]'></div>
        <div className='w-full shadow-xl mx-auto h-40 rounded-xl bg-[#191919]'></div>
      </div>
    </div>
  )
}

export default Dashboard