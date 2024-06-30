import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row gap-24 px-16 py-20 items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <h1>FOODIE</h1>
            <ul className='flex items-center gap-3'>                
                <li>
                    <img src="/facebook.svg" alt="facebook" className='h-7 w-12'/>
                </li>
                <li>
                    <img src="/ig.svg" alt="instagram" className='h-6 w-6'/>
                </li>
                <li>
                    <img src="/youtube.png" alt="youtube" className='h-7 w-6'/>
                </li>
                <li>
                    <img src="/linkedin.png" alt="linkedin" className='h-8 w-8'/>
                </li>
            </ul>
        </div>
        <div>  
            <ul>
                <li>Quality</li>
                <li>Careers</li>
                <li>Help</li>
                <li>Share</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>(+254)793-721-334</li>
                <li>hello@food.com</li>
                <li>carees@food.com</li>
                <li>contact@food.com</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;