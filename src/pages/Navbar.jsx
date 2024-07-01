import React from "react";
import { IoMdCart } from "react-icons/io";

function Navbar(){

    return(
        <div className="flex sticky  top-0 bg-[#1a202c] text-white items-center shadow-md justify-around py-3">
            <div>
                <img src="/Logo.svg" alt="logo"className="h-18 w-20" />
            </div>
            <div>
                <ul className="flex items-center font-medium justify-center gap-5">
                    <li>
                        <a href="#" className="hover:text-[#FE9E0D]">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-[#FE9E0D]">About</a>
                    </li>
                    <li>
                        <a href="#work" className="hover:text-[#FE9E0D]">Work</a>
                    </li>                    
                    <li>
                        <a href="#testimonials" className="hover:text-[#FE9E0D]">Testimonials</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-[#FE9E0D]">Contact</a>
                    </li>
                    <li><IoMdCart className="w-10 h-6 hover:text-[#FE9E0D]" /></li>
                    <li><button className="bg-[#FE9E0D] rounded-full py-2 px-4 text-white">Booking Now</button></li>                    
                </ul>
            </div>


        </div>
    )
}

export default Navbar;