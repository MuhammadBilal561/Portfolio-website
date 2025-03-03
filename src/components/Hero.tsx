
'use client'
import React from 'react'
import Image from 'next/image'
import hero from "../../public/image3.png"
import { FaFacebookF, FaLinkedinIn  ,FaGithub} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from '@/variant';

const Hero = () => {

   
  return (
    <section 
    id='home'
    className='min-h-screen flex py-10 md:flex-row flex-col items-center '>
        

        <div className='flex-1 flex items-center justify-center h-full '>
<Image
src={hero}
alt='hero'
width={500}
height={500}
className='m-10  '
/>
        </div>
        <div className='flex-1 '>
<div className='md:text-left text-center'>
    <motion.h1
                  variants={fadeIn("up", 0.3)}
                  initial="hidden "
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
    className='md:text-5xl text-2xl md:leading-normal leading-10 animate-pulse duration-100  text-white font-mono'>
        <span className='md: text-6xl text-5xl text-cyan-600'>
            Hello!
            <br />
        </span>
        My Name is <span>M.Bilal</span>
    </motion.h1>
    <motion.div
           
           variants={fadeIn("up", 0.4)}
           initial="hidden "
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          className="mb-6 mt-2 text-lg lg:text-lg font-secondary font-semibold uppercase leading-[1]">
            <span className=" text-white mr-4">I  am a </span>
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Software Engineer",
                2000,
              ]}
              speed={50}
              className="text-accent text-cyan-600 "
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
<button className='btn-primary mt-8'>Contact Me</button>
<div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
<FaFacebookF className='bg-gray-600 hover:text-white cursor-pointer' />
<FaGithub className='bg-gray-600 hover:text-white cursor-pointer' />
<FaLinkedinIn className='bg-gray-600 hover:text-white cursor-pointer'/>
<AiFillInstagram className='bg-gray-600 hover:text-white cursor-pointer'/>


</div>
</div>
        </div>
    </section>
  )
}

export default Hero