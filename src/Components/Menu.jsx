import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";
import {FaBars, FaSearch, FaUser} from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

const MenusBar = [
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

const Menu = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () =>{
     setShowMenu(!showMenu)
   };
  return (
    <div>
      <div className='shadow-md w-full fixed top-0 left-0'>
       <div className='md:flex bg-black py-4 md:px-10 px-7'>
         {/*Logo Section*/}
          <div>
           <a href=''>
              <img 
                  src={Logo} 
                  className='h-10 object-contain'
             />
            </a>  
          </div>

         {/*Menu Section*/}
          <div className='py-2'>
             <ul className={` ${showMenu ? "top-20 opacity-100": "top-[-490px" } md:opacity-100 opacity-0 md:flex md:item-center md:pb-0 pb-12 bg-black text-white hover:text-primary absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
                {MenusBar.map(({id,name,link}) => (
                    <li key={id} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link} className='text-white hover:text-primary transition-colors duration-500'>{name}</a>
                    </li>
                ))}
             </ul>
          </div>
           {/*NavBar  Right Section*/}    
           <div className='flex justify-between items-center gap-4'>
                    {/*Search Bar Section*/} 
                    <div className='relative group hidden sm:block'>
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
       </div> 
       
      </div>
    </div>
  )
}

export default Menu;
