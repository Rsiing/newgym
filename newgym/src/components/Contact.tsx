import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Contact() {

    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    const contactBox = [
        {
            question: "How do I create an account?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        },
        {
            question: "What features does the app offer?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        },
        {
            question: "How can I reset my password?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        },
        {
            question: "Is there a mobile app available?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        }
    ];

   
  return ( 
      
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.75, ease: "easeOut" }}>
    <div id="contactSection">

        <div className='flex flex-col p-20 lg:w-[80%] mx-auto cursor-default'>
            <span className=" text-violet-500 font-semibold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                    Contact us anytime
            </span>
            <h1 className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl 
                    mt-6 mb-10 font-extrabold'>
                    Have any Questions or queries?
            </h1>
        </div>
    
    
        <div className="grid xl:grid-cols-3 xl:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:w-[80%] lg:mx-auto mx-4 mb-20 text-gray-400 text-center cursor-default">
    <motion.button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.1 }}>
          <div className='shadow-xl bg-[#1d1d1d] xl:row-span-2 rounded-3xl p-10 flex flex-col items-center justify-center text-center'>
            <h3 className='text-violet-400 mt-8 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold'>How do I create an account?</h3>
            <p className='mt-4 lg:text-xl md:text-lg'>It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
          </div>
    </motion.button>
          <div className='shadow-xl bg-[#1d1d1d] xl:row-span-2 rounded-3xl p-10 flex flex-col items-center justify-center text-center'>
            <h3 className='text-violet-400 mt-8 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold'>What features does the app offer?</h3>
            <p className='mt-4 lg:text-xl md:text-lg'>It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
          </div>
    
          <div className='shadow-xl bg-[#1d1d1d] xl:row-span-2 rounded-3xl p-10 flex flex-col items-center justify-center text-center'>
            <h3 className='text-violet-400 mt-8 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold'>How can I reset my password?</h3>
            <p className='mt-4 lg:text-xl md:text-lg'>It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
          </div>

          <div className='shadow-xl bg-[#1d1d1d] xl:row-span-2 xl:row-start-3 rounded-3xl p-10 flex flex-col items-center justify-center text-center'>
            <h3 className='text-violet-400 mt-8 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold'>Is there a mobile app available?</h3>
            <p className='mt-4 lg:text-xl md:text-lg'>It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
          </div>
          
          <div className='shadow-xl bg-[#1d1d1d] xl:row-span-2 xl:row-start-3 rounded-3xl p-10 flex flex-col items-center justify-center text-center'>
            <h3 className='text-violet-400 mt-8 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold'>Is there a mobile app available?</h3>
            <p className='mt-4 lg:text-xl md:text-lg'>It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
          </div>
          
          <div className='shadow-xl bg-[#1d1d1d] xl:row-span-2 xl:row-start-3 rounded-3xl p-10 flex flex-col items-center justify-center text-center'>
            <h3 className='mt-8 xl:text-3xl lg:text-2xl text-2xl font-bold'>Can't find the answer you're looking for? Don't hesitate to 
                <span className="text-violet-400 cursor-pointer hover:text-violet-500 duration-300"> Email us.</span> or contact through the social links below</h3>
            
          </div>
    </div>
    </div>
    </motion.div>
    
  )
}

export default Contact
/*
{contactBox.map((item, index) => (
          <div key={index} className='flex flex-col p-20 lg:w-[80%] mx-auto cursor-default'>
              <h2 className='text-violet-500 font-semibold xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base'>
                  {item.question}
              </h2>
              <p className='mt-4 lg:text-xl md:text-lg'>{item.answer}</p>
          </div>
      ))}*/