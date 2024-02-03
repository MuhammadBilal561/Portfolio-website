import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
 
  return (
    <section
id='contact'
className='py-10 px-3 text-white'
    >
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
         Contact <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>
          Get in Touch
        </p>
        <div className='mt-16 flex flex-col md:flex-row gap-6 max-w-5xl rounded-lg bg-gray-800 p-6 mx-auto '>
          <form className='flex flex-col flex-1 gap-1' action="">
<input type="text" placeholder='Your Name' />
<input type="email" placeholder='Your Email Address' />
<textarea placeholder='Your Message 'rows={10} ></textarea>
<button className='btn-primary w-fit mt-2'>Send Message</button>

          </form>
          <div className='flex flex-col gap-7 '>
            <div className='flex gap-4  w-fit items-center'>
              <div className='min-w-[4rem]  text-3xl  min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full hover:bg-gray-500' >
<CiMail name='mail'/>
              </div>
              <p className='text-lg font-mono '> Bilal561@gmial.com</p>

            </div>
            <div className='flex gap-4 w-fit items-center'>
              <div className='min-w-[4rem] text-3xl   min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full hover:bg-gray-500' >
<CiLocationOn name='Location'/>
              </div>
              <p className='text-lg font-mono '> Lahore , Pakistan</p>

            </div>
            <div className='flex gap-4 w-fit items-center'>
              <div className='min-w-[4rem] text-3xl  min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full hover:bg-gray-500' >
<FaWhatsapp name='Whatsapp'/>
              </div>
              <p className='text-lg font-mono '> 1 2 3 45 67 </p>

            </div>
          </div>

        </div>

      </div>
      
      </section>
  )
}

export default Contact