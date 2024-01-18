import { Content } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import AboutImage from '../../public/aboutimage.png'
import Image from 'next/image'

const About = () => {

    const info=[
        {text:'Years Experience', count:'04'},
        {text:'Completed Project', count:'20'},
        {text:'Companies Work', count:'03'},

      
    
    
    ]
  return (
    <section
    id="about"
    className='py-10 text-white'
    >
<div className='text-center mt-8'>
<h3 className='text-4xl font-semibold'>
   About<span className='text-cyan-600'>
Me
    </span>
</h3>
<p className='text-gray-400 my-3 text-lg'>My Introduction</p>
<div className='flex md:flex-row flex-col-reverse items-center
 md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
    <div className='p-2 '>

    <div className='text-gray-300 my-3 '>
        <p className='text-justify leading-7 w-11/12'>
        Hey, I m Muhammad Bilal, Freelance Front-end 
        Developer with over 4 years of experience.
     The average Developer tends to be methodical, structured, 
     and serious. They can be very 
      organized and attentive to detail,
    especially when given plenty of personal
     space to think and work privately.
        </p>
        <div className='flex items-center mt-10 gap-7 '>
           {
            info.map((Content)=>(
                <div key={Content.text}>
                    <h3 className='md:text-4xl text-2xl text-white font-semibold'>
                        {Content.count}
                        <span className='text-cyan-600 '>+</span>{""}
                    </h3>
                    <span className='md:text-base text-xs'>{Content.text}</span>

                </div>
            ))
           }
        </div>
        <br />
        <br />
<Link href={'#'}>
<button className='btn-primary'>Download CV</button>

</Link>
    </div>
    </div>
   
    <div className='flex-1 md:mt-0 mt-6 items-center justify-center'>
<div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
<Image
className='w-full object-cover '
src={AboutImage}
alt='About Image'
/>
</div>

    </div>
</div>
</div>


    </section>
  )
}

export default About