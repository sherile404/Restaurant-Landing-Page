import React from "react";
import { IoMdCart } from "react-icons/io";

function Navbar(){

    return(
        <div className="flex sticky bg-white top-0 items-center shadow-md justify-around py-3">
            <div>
                <img src="/Logo.svg" alt="logo"className="h-18 w-20" />
            </div>
            <div>
                <ul className="flex items-center font-medium justify-center gap-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                    <li><IoMdCart className="w-10 h-6" /></li>
                    <li><button className="bg-[#FE9E0D] rounded-full py-2 px-4 text-white">Booking Now</button></li>                    
                </ul>
            </div>


        </div>
    )
}

export default Navbar;