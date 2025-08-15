import { Link } from 'react-router-dom';
import { motion } from "motion/react";

function Hero() {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth'});
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth'})
    }
  }

  

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1 }}>
      <div className='flex flex-col justify-center items-center p-20 lg:w-[80%] mx-auto my-20 cursor-default'>
          <button className="border-3 border-gray-600 hover:border-gray-500 
                  duration-200 px-4 py-2 rounded-3xl cursor-pointer text-gray-400 lg:text-xl md:text-lg sm:text-base">
                  The next generation of fitness.
              <span onClick={scrollToAbout} className='text-violet-500 font-bold pl-1'>Read more →</span>
          </button>
          <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center my-10 font-extrabold'>The next generation of Fitness applications</h1>
          <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-center text-gray-400 pt-4">Use our tools to monitor your workouts and nutrition,
               Receive tailored workout and meal plans to fit your goals, to fit your goals.
          </h2>
          <div className="flex gap-4 mt-10 font-bold xl:text-2xl lg:text-xl text-base">
              <Link to="/register" className="px-4 py-2 bg-violet-500 hover:bg-violet-600 duration-200 rounded-xl cursor-pointer">Get started</Link>
              <span onClick={scrollToContact} className="cursor-pointer flex items-center">Contact us →</span>
          </div>
      </div>
    </motion.div>
    </>
  )
}

export default Hero