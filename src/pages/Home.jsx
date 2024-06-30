import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen px-8 pt-8 mx-auto max-w-6xl'>
        <div className='w-1/2'>
            <h1 className='font-bold text-4xl'>Your Favourite Food <br /> Delivered Hot & <br /> Fresh </h1> <br />
            <p>Healthy switcher chefs do all the prep work,like <br /> 
            peeding,chopping & marinating,so you can cook <br />a fresh food.
            </p> <br />
            <button className='flex items-center justify-center bg-[#FE9E0D] text-white rounded-full py-2 px-4 gap-2'>Order Now <FaArrowRight/></button>            
        </div>
        <div className='w-1/2'>
            <img src="/home-banner.png" className='w-full h-full' alt="banner" />
        </div>
    </div>
  )
}

export default Home;