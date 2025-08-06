

function About() {
  return (
    <>
        <div className='flex flex-col justify-center items-center p-20 lg:w-[80%] mx-auto cursor-default'>
            <button className=" text-violet-500 font-semibold lg:text-2xl md:text-xl :text-lg">
                    Wellness made easy
            </button>
            <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center 
                    mt-6 mb-10 font-extrabold'>
                    Everything you need in one application
            </h1>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 text-gray-400 lg:grid-cols-4 gap-10 lg:w-[80%] lg:mx-auto mx-4 mb-20 text-center cursor-default">

        <div className='shadow-xl bg-[#1d1d1d] p-4 md:col-span-2 rounded-3xl'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Track Your Progress</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Use our tools to monitor your workouts and nutrition.</p>
        </div>

        <div className='shadow-xl bg-[#1d1d1d] p-4 rounded-3xl lg:col-span-2'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Join the Community</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Connect with others on similar fitness journeys.</p>
        </div>

        <div className='shadow-xl bg-[#1d1d1d] p-4 rounded-3xl lg:col-span-2'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Get Personalized Plans</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Receive tailored workout and meal plans to fit your goals.</p>
        </div>

        <div className='shadow-xl bg-[#1d1d1d] p-4 rounded-3xl lg:col-span-2'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Stay Motivated</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Access motivational content and tips to keep you going.</p>
          </div>

        <div className='shadow-xl bg-[#1d1d1d] p-4 lg:col-span-4 rounded-3xl'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>blah blah blah</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Access motivational content and tips to keep you going.</p>
          </div>

      </div>
    </>
  )
}

export default About