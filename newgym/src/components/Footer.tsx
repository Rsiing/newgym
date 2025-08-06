import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className='flex-row mb-4'>
        
        <ul className='flex flex-row justify-center items-center gap-10'>
            <li className='cursor-pointer text-5xl'><FaFacebook/></li>
            <li className='cursor-pointer text-5xl'><FaTiktok/></li>
            <li className='cursor-pointer text-5xl'><FaXTwitter/></li>
        </ul>
        <ul className='flex md:flex-row flex-col justify-center items-center gap-6 mt-10'>
            <li className='cursor-pointer text-[16px] text-gray-400 hover:underline'>Terms & Conditions</li>
            <li className='cursor-pointer text-[16px] text-gray-400 hover:underline'>Privacy Policy</li>
            <li className='text-[16px] text-gray-400'>©2025 FitrLyfe All rights reserved. </li>
        </ul>
    </div>
    </>
  )
}

export default Footer