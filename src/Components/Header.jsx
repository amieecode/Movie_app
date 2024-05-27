import React, { useState } from 'react';
import LogoImg from "../assets/images/logo.png";
import {FaBars, FaSearch, FaUser} from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

const Menus = [
    {
        id: 1,
        name: "Home",
        link: "./#",
    }, 
    {
        id: 2,
        name: "Series",
        link: "./series",
    }, 
    {
        id: 3,
        name: "Movies",
        link: "./movies",
    }, 
    {
        id: 4,
        name: "Pages",
        link: "./pages",
    },
    {
        id: 5,
        name: "Pricing",
        link: "./pricing",
    },
    {
        id: 6,
        name: "Contact",
        link: "./contact",
    }, 
];

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    };
  return (
    <>
      <header className='bg-black z-50 text-white shadow-md lg:px-16 px-6 py-3 relative'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                {/*Logo Section*/}
                <div className=''>
                    <a href='#'>
                        <img 
                            src={LogoImg}
                            alt=""
                            className='h-10 object-contain'
                        />
                    </a>
                </div>
                {/*Menu Items*/}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                        {Menus.map(({id,name,link}) => (
                            <li key={id}>
                                <a href={link} className='inline-block px-4 text-lg font-semibold hover:text-primary transition-colors duration-300'>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
            {/*NavBar  Right Section*/}    
            <div className='flex justify-between items-center gap-4'>
                    {/*Search Bar Section*/} 
                    <div className='relative group'>
                        <input 
                          type='text'
                          placeholder='Search' 
                          className='search-bar'
                        />
                        <FaSearch className='text-xl group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 ' />
                    </div>
                    {/*Notification Bell Section*/} 
                    <div className='relative rounded-full border-2 py-2 px-2 hover:scale-105'>
                        <FaBell className='text-xl' />
                        <div className='w-4 h-4 bg-primary text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                    </div>
                    {/*User icon Section*/} 
                    <div className=' rounded-full border-2 py-2 px-2 hover:scale-105'>
                        <FaUser className='text-xl' />
                    </div>
                    <button className='bg-primary rounded-xl hidden lg:block px-8 py-2 transform hover:scale-105 duration-300 font-semibold whitespace-nowrap '>
                        Subscribe Now
                    </button>

            </div> 

            {/*Mobile Sidebar menu*/}
            <div className='lg:hidden block'>
                <div className='flex items-center gap-4'>
                  {showMenu ? (
                    <HiMenuAlt1
                       onClick={toggleMenu}
                       className='cursor-pointer'
                       size={30}
                    />
                    ) : (
                    <HiMenuAlt3 
                        onClick={toggleMenu}
                        className='cursor-pointer'
                        size={30}
                    />
                 )}
                </div>
            </div>
        </div> 
        {/*Responsive Menu*/} 
        <div className={`${ showMenu ? "block": "hidden"} z-10 h-screen w-full flex-col justify-between px-8 pb-12 top-0 left-0 bg-black pt-8 md:hidden`}>
          <div className='mt-4'>
            <ul className='space-y-4 text-xl'>
               {Menus.map(({id,name,link}) => { 
                return(
                    <li key={id} className='py-4'>
                        <a href={link} className='text-xl font-semibold hover:text-primary py-2 transition-colors duration-300'>{name}</a>
                    </li>
                );
               })}
                <button className='bg-primary rounded-xl px-8 py-2 transform hover:scale-105 duration-300 text-xl font-semibold whitespace-nowrap '>
                    Subscribe Now
                </button>
                </ul>
          </div>
        </div>      
      </header>
    </>
  )
}


