'use client'
import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import Proj1 from "../../public/Proj1.png"
import Proj2 from "../../public/Proj2.png"
import Proj3 from "../../public/Proj3.png"
import Proj4 from "../../public/Proj4.png"
import Link from 'next/link'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from 'swiper/modules'
import ProjSec from "../../public/ProjectSectionImage.png" 




const Projects = () => {
  const Projects=[
{img:Proj1, github_link:"https://github.com/MuhammadBilal561/Blog-Website",live_link:"https://blog-website-psi-sandy.vercel.app/" , name:'Blog Website'},
{img:Proj2 , github_link:"https://github.com/MuhammadBilal561/hackathon-ecommerce",live_link:"https://hackathon-ecommerce2.vercel.app/", name:"Ecommerce"},

{img:Proj3 , github_link:"https://github.com/MuhammadBilal561/DummyWebsite-TailGrids",live_link:"dummy-website-tail-grids.vercel.app" , name:'TailGrids-website'},

{img: Proj4 , github_link:"#",live_link:"#" , name:"..."},
// {img:"", github_link:"#",live_link:"#"},

  ]
  return (
    <section
    id='projects'
    className='py-10 text-white '
    >
<div className='text-center'>
<h3 className='text-4xl font-semibold'>
    My <span className='text-cyan-600'>Projects</span>

</h3>
<p className='text-gray-400 mt-3 text-lg'>
My awesome Work
</p>
</div>
<br />
<div className='flex  gap-x-8 max-w-6xl px-5 mx-auto items-center relative '>
<div className='lg:w-2/3 w-full '>

<Swiper slidesPerView={1.2} spaceBetween={20} 
breakpoints={{
  768:{
    slidesPerView:2,
  }
}}
loop={true} autoplay={ {
  delay:3000,
}}
pagination={
  {
    clickable:true,
  }
}
modules={[Pagination , Autoplay]}
>
 {

  Projects.map((project,i)=>(

    <SwiperSlide key={i}>
    <div className='h-full w-full p-4 bg-slate-700 rounded-xl'>
    <Image
    src={project.img}
    alt='Proj1'
    className='rounded-ld'
    />
    <h3 className='text-xl my-4 '>{project.name}</h3>
    <div className='flex gap-3'>
      <Link className='text-cyan-600 px-2 py-1 bg-gray-800 inline-block' href={project.github_link}target='_blank' >
    GitHub
      </Link>
      <Link className='text-cyan-600 px-2 py-1 bg-gray-800 inline-block' href={project.live_link} target='_blank'>
      LiveDemo
      </Link>
    
    </div>
    </div>
    
      </SwiperSlide>
  ))
 }


</Swiper>

</div>
<div>
  <Image
  src={ProjSec}
  alt='ProjSec'
  className='h-96 lg:block hidden'
  />
</div>
</div>

    </section>
  )
}

export default Projects