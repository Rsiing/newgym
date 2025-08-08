import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-20 lg:w-[80%] mx-auto cursor-default'>
          <h1 className='flex flex-col xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl my-10 font-extrabold'>
            <span className='xl:text-4xl lg:text-3xl md:text-2xl text-xl flex text-violet-500'>
              Welcome
            </span>To your FitrLyfe dashboard
          </h1>

          <button className="border-3 border-gray-600 hover:border-gray-500 font-bold
                  duration-200 px-4 py-2 rounded-3xl text-gray-400 lg:text-xl md:text-lg sm:text-base">
                  Where to start? check out the
              <Link to="/guide" className='text-violet-500 font-bold pl-1 cursor-pointer'>get started guide →</Link>
          </button>
      </div>
      <div className='flex md:flex-row flex-col w-[80%] mx-auto'>
        <div className=' flex flex-col justify-center p-10'>
        <h2 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-violet-500 font-bold '>Your nutrition</h2>
        <p className='xl:text-3xl lg:text-2xl md:text-xl text-md'>A huge index of foods alongside accompanying macros, giving you the information required for a healthier lifestyle</p>  
        </div>  
        <div className=' flex flex-col justify-center p-10'>
        <h2 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-violet-500 font-bold'>Your exercises</h2>
        <p className='xl:text-3xl lg:text-2xl md:text-xl text-md'>An expansive library of exercises to assist you in achieving your fitness goals</p>
        </div>
      </div>
    </>
  )
}

export default Dashboard