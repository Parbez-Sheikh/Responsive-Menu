import { Link, NavLink } from "react-router-dom";
import { ImSun } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {

    const menuItems = [
        { name: 'About', link: '/about' },
        { name: 'Resume', link: '/resume' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' }
      ];

      const[showMenu,setShowMenu]=useState(false);

      const handleButton=()=>{

        setShowMenu(!showMenu)

      }


    return (
       <header className="bg-black py-6 fixed top-0 left-0 w-full">
        <div className="container mx-auto flex justify-between items-center ">
            <div className="w-[20%] ">
            <Link to="/" className="font-semibold text-3xl text-white"><ImSun className="inline-block text-4xl text-[#2b8a3e]" /> <i>SP</i></Link>
            </div>

            <div className="w-[70%]">
                <ul className="sm:flex justify-end sm:gap-4 md:gap-3 hidden ">
                    {
                        menuItems.map((item,i)=><li><NavLink to={item.link} key={i} className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-white text-xl"}>{item.name}</NavLink></li>)
                    }
                </ul>
            </div>
            <div className="w-[5%] text-right sm:hidden ">
                {
                    showMenu?<button className="text-white text-3xl" onClick={handleButton}><RxCross2 /></button> :<button className="text-white text-3xl" onClick={handleButton}><FiMenu /></button>
                }
            </div>
        </div>
        <div className=" w-[20%] mx-[70%] mt-5 sm:hidden text-left ">
        <ul className={`${showMenu?"" :"hidden"}`}>
             {
                 menuItems.map((item,i)=><li><NavLink to={item.link} key={i} className={({ isActive}) => isActive ? "text-white text-2xl font-semibold" : "text-white text-2xl"}>{item.name}</NavLink></li>)
             }
        </ul>
        </div>
       </header>
    );
};

export default Header;
