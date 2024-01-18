'use client'
import { IoMenuSharp } from "react-icons/io5";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const Navbar = () => {
    const [sticky ,setSticky]=useState(false);
    const [open ,setOpen]=useState(false);
    const menuLinks = [
{name: 'Home',link:"#home"},
{name: 'About',link:"#about"},
{name: 'Skills',link:"#skills"},
{name: 'Projects',link:"#projects"},
{name: 'Contact',link:"#contact"},
    ];
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            const nav=document.querySelector('nav')
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    },[])
  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky? 'bg-white/60 text-gray-900':'text-white'}`}>
<div className='flex items-center justify-between'>

    <div className='mx-7'>
        <h4 className='text-4xl font-bold uppercase'>
            BI<span className='text-cyan-600'>l

            </span>AL
        </h4>
    </div>
    <div className={`${sticky ? 'md:bg-white/0 bg-white':'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium 
    bg-white rounded-bl-full`}>
        <ul className='flex items-center py-2 gap-1 text-lg'>
          {
            menuLinks?.map((menu,i)=>(
                <li key={i} className='px-6 hover:text-cyan-600'>
                    <Link href={menu?.link}>
                        {menu?.name}
                    </Link>

                </li>
            ))
          }

        </ul>
    </div>
    <div 
    onClick={()=>setOpen(!open)}
    className={`text-3xl z-[999] md:hidden m-5 ${open ? 'text-gray-700' :"text-gray-700" }`}>
    <IoMenuSharp name="menu" />
    </div>
    <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 my-2 
    font-medium bg-white top-0 right-0 duration-300 ${open ? 'right-0': 'right-[-100%]' } `}>
    <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
          {
            menuLinks?.map((menu,i)=>(
                <li onClick={()=>setOpen(false)} key={i} className='px-6 hover:text-cyan-600'>
                    <Link href={menu?.link}>
                        {menu?.name}
                    </Link>

                </li>
            ))
          }

        </ul>
    </div>
</div>

    </nav>
  )
}

export default Navbar