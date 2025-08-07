import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
    <div className='flex flex-col justify-center items-center p-20 lg:w-[80%] mx-auto cursor-default'>
        

        <h1 className='flex flex-col xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl my-10 font-extrabold'><span className='xl:text-4xl lg:text-3xl md:text-2xl text-xl flex text-violet-500'>Whats new</span>on your FitrLyfe dashboard</h1>
        
        <div className="flex gap-4  font-bold xl:text-2xl lg:text-xl text-base">
            
            
        <button className="border-3 border-gray-600 hover:border-gray-500 
                duration-200 px-4 py-2 rounded-3xl cursor-pointer text-gray-400 lg:text-xl md:text-lg sm:text-base">
                Where to start? have a look at the
            <Link to="/guide" className='text-violet-500 font-bold pl-1'>get started guide →</Link>
        </button>
        </div>
    </div>
    </>
  )
}

export default Dashboard