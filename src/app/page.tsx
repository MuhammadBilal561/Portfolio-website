import Image from 'next/image'
import React from 'react'
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Hireme from "@/components/Hireme"
import Contact from "@/components/Contact"
import Fotter from "@/components/Fotter"
import Navbar from "@/components/Navbar"
import Bot from "@/components/Bot"


export default function Home() {
  return(
  <main className='bg-site bg-no-repeat bg-cover overflow-hidden'>

    <Navbar/>
    <Bot/>
    <Hero/>
 <About/>
 <Skills/>
 <Hireme/>
 <Projects/>
 <Contact/>
 <Fotter/>
<div className=''></div>

    
  </main>
  )
}
