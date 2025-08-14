import { useState } from 'react';
import '../App.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
    <div className='flex justify-between items-center text-white p-4 lg:text-[40px] text-[32px] cursor-default'>   
        <Link to='/'>FitrLyfe</Link>
        <div className='flex items-center gap-6 font-semibold lg:text-[32px] text-[24px]'>
            
            
            <Link to="/login" className='px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 duration-200 hidden lg:flex'>Log in</Link>
            <Link to="/register" className='px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 duration-200 hidden lg:flex'>Sign up</Link>
            
            <FaBars onClick={toggleMenu} className='cursor-pointer lg:text-[56px] text-[48px] flex lg:hidden' />
        </div>
    </div>

    <div>
        {isOpen && (
            <ul className='flex flex-col lg:flex-row justify-around items-center pt-10 gap-10 text-[24px] font-semibold lg:hidden'>
                
                <Link to="/login" className='px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 duration-200'>Log in</Link>
                <Link to="/register" className='px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 duration-200'>Sign up</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        )}
    </div>
    </>
  )
}

export default Navbar