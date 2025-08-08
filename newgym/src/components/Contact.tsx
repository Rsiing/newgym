

function Contact() {
  return (
    <>
    <div className='flex flex-col justify-center items-center p-20 lg:w-[80%] mx-auto cursor-default'>
        <h1 className='xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center my-10 font-extrabold'> Have a question that needs answering?</h1>
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-center text-gray-400 pt-4">
             use the FAQs and contact forms below to reach out for any inquiries or support you may need.
        </h2>
    </div>

    <div className="flex flex-col md:flex-row gap-10 lg:w-[70%] lg:justify-between lg:mx-auto mb-20 lg:px-0 px-4 text-center cursor-default">
        <div className="flex flex-col lg:w-1/2 text-start">
            <h3 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl pt-4 text-violet-400">
                Frequently Asked Questions
            </h3>
            <p className="xl:text-2xl lg:text-xl md:text-lg text-gray-400">Can't find the answer you're looking for? Don't hesitate to 
                <span className="text-violet-400"> Email us.</span> or contact through the social links below</p>
        </div>
        
        <div className="flex flex-col items-center lg:w-1/2 text-start pt-4">
            <div>
                <h4 className="lg:text-4xl md:text-3xl sm:text-2xl pb-2">How do I create an account?</h4>
                <p className="xl:text-2xl lg:text-xl md:text-lg text-gray-400">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
            </div>

            <div>
                <h4 className="lg:text-4xl md:text-3xl sm:text-2xl pb-2">What features does the app offer?</h4>
                <p className="xl:text-2xl lg:text-xl md:text-lg text-gray-400">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
            </div>

            <div>
                <h4 className="lg:text-4xl md:text-3xl sm:text-2xl pb-2">How can I reset my password?</h4>
                <p className="xl:text-2xl lg:text-xl md:text-lg text-gray-400">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
            </div>

            <div>
                <h4 className="lg:text-4xl md:text-3xl sm:text-2xl pb-2">Is there a mobile app available?</h4>
                <p className="xl:text-2xl lg:text-xl md:text-lg text-gray-400">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
            </div>

            <div>
                <h4 className="lg:text-4xl md:text-3xl sm:text-2xl pb-2">How do I contact support?</h4>
                <p className="xl:text-2xl lg:text-xl md:text-lg text-gray-400">It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
            </div>
                    
        </div>
    </div>
    </>
  )
}

export default Contact