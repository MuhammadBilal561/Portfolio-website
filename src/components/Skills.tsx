import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";


const Skills = () => {
    
  return (<section
    id="skills"
    className='py-10 bg-gray-800 relative'
    >
<div className='mt-8 text-gray-100 text-center '>
<h3 className='text-4xl font-semibold'>
    My<span className='text-cyan-600'>
Skills
    </span>
</h3>
<p className='text-gray-400 mt-3 text-lg'>My Knowledge</p>





<div className='lg:flex justify-evenly  '>


<div className='flex items-center justify-center mt-12 gap-10 flex-wrap '>

<div className='border-2 relative min-w-[10rem] max-w-[16rem] bg-gray-900
 border-cyan-600 p-10  rounded-xl'>

<div style={{
    background:`conic-gradient(rgb(8,145,170 )86%, #ddd 86%)`
}} className= 'w-32 h-32 flex items-center justify-center rounded-full'>
<div className='text-6xl w-28 h-28 bg-gray-900 rounded-full  
flex items-center justify-center  '>
<FaHtml5 className='hover:text-cyan-600' name='logo-html'/>

</div>
</div>
<p className='text-xl mt-3'>Advance</p>




</div>
</div>

<div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>

<div className='border-2 relative min-w-[10rem] max-w-[16rem] bg-gray-900
 border-cyan-600 p-10  rounded-xl'>

<div style={{
    background:`conic-gradient(rgb(8,145,170 )86%, #ddd 86%)`
}} className= 'w-32 h-32 flex items-center justify-center rounded-full'>
<div className='text-6xl w-28 h-28 bg-gray-900 rounded-full  
flex items-center justify-center '>
<TbBrandNextjs className='hover:text-cyan-600'  name='logo-next.js'/>

</div>
</div>
<p className='text-xl mt-3'>Intermediate</p>




</div>
</div>

<div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>

<div className='border-2 relative min-w-[10rem] max-w-[16rem] bg-gray-900
 border-cyan-600 p-10  rounded-xl'>

<div style={{
    background:`conic-gradient(rgb(8,145,170 )86%, #ddd 86%)`
}} className= 'w-32 h-32 flex items-center justify-center rounded-full'>
<div className='text-6xl w-28 h-28 bg-gray-900 rounded-full  
flex items-center justify-center '>
<TbBrandJavascript className='hover:text-cyan-600'  name='logo-Js'/>

</div>
</div>
<p className='text-xl mt-3'>Advance</p>




</div>
</div>

</div>
</div>

    </section>
  )
}

export default Skills