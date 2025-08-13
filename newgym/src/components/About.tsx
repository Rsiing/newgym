import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  
  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="aboutSection"
    >  

    <div id="aboutSection">
        <div className='flex flex-col  p-20 lg:w-[80%] mx-auto cursor-default'>
            <span className=" text-violet-500 font-semibold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                    Wellness made easy
            </span>
            <h1 className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl 
                    mt-6 mb-10 font-extrabold'>
                    Everything you need in one application
            </h1>
        </div>

       <div className="grid xl:grid-cols-4 md:grid-cols-2 md:grid-rows-6 h-200 gap-6 lg:w-[80%] lg:mx-auto mx-4 mb-20 text-gray-400 text-center cursor-default">

        <div className='shadow-xl bg-[#1d1d1d] rounded-3xl xl:col-span-4 xl:row-span-2 md:col-span-2 md:row-span-2 flex flex-col items-center justify-center text-center'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Track Your Progress</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Use our tools to monitor your workouts and nutrition.</p>
        </div>

        <div className='shadow-xl bg-[#1d1d1d] rounded-3xl xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-3 md:row-span-2 md:col-start-2 md:row-start-3 flex flex-col items-center justify-center text-center'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Join the Community</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Connect with others on similar fitness journeys.</p>
        </div>

        <div className='shadow-xl bg-[#1d1d1d] rounded-3xl xl:col-span-2 xl:row-span-4 xl:col-start-1 xl:row-start-3 md:row-span-2 md:col-start-1 md:row-start-3 flex flex-col items-center justify-center text-center'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Get Personalized Plans</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Receive tailored workout and meal plans to fit your goals.</p>
        </div>

        <div className='shadow-xl bg-[#1d1d1d] rounded-3xl xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-5 md:col-span-2 md:row-span-2 md:row-start-5 flex flex-col items-center justify-center text-center'>
          <h3 className='text-violet-400 mt-8 lg:text-4xl md:text-3xl text-2xl font-bold'>Stay Motivated</h3>
          <p className='mt-4 lg:text-xl md:text-lg'>Access motivational content and tips to keep you going.</p>
          </div>
        
       
    

      </div>
    </div>
      </motion.div>
  )
}

export default About