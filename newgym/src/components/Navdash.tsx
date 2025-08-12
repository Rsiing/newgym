import { useState } from 'react';
import '../App.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navdash() {
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
    <div className='flex justify-between items-center text-white p-4 lg:text-[40px] text-[32px] cursor-default'>   
        <Link to='/dashboard'>FitrLyfe</Link>
        <div className='flex items-center lg:gap-12 gap-6 font-semibold lg:text-[32px] text-[24px]'>
            <Link to="/about" className='hidden lg:flex'>My plan</Link>
            <Link to="/contactdash" className='hidden lg:flex'>Contact</Link>
            <Link to="/" className='px-4 py-2 rounded-xl border-3 border-transparent hover:border-white duration-300 hidden lg:flex'>Log out</Link>
            <Link to="/account" className='px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 duration-200 hidden lg:flex'>Account</Link>
            
            <FaBars onClick={toggleMenu} className='cursor-pointer lg:text-[56px] text-[48px] flex lg:hidden' />
        </div>
    </div>

    <div>
        {isOpen && (
            <ul className='flex flex-col lg:flex-row justify-around items-center pt-10 gap-10 text-[24px] font-semibold lg:hidden'>
                <Link to="/plan">My plan</Link>
                <Link to="/contactdash">Contact</Link>
                <Link to="/" className='px-4 py-2 rounded-xl border-3 border-transparent hover:border-white duration-300 '>Log out</Link>
                <Link to="/account" className='px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 duration-200'>Account</Link>
            </ul>
        )}
    </div>
    </>
  )
}
export default Navdash