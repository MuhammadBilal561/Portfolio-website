"use server"
import React from 'react'
import Hire  from "../../public/Hireme.png"
import Image from 'next/image'

const Hireme = () => {
  return (
    <section
    id='hireme'
    className='py-10 px-3 text-white'
    >
<div className='text-center'>
<h3 className='text-4xl font-semibold'>
    Hire <span className='text-cyan-600'>Me</span>

</h3>
<p className='text-gray-400 mt-3 text-lg'>
    DO You Hve Any Work?
</p>
</div>
<div className=' bg-gray-700 relative px-8 py-5 rounded-2xl lg:max-w-4xl mx-auto min-h-[24rem] mt-24 
flex gap-6 lg:flex-row flex-col-reverse items-center'>
    <div>
        <h2 className='text-2xl font-semibold'>
            Do you any work from me?
    
        </h2>
      <p className=' lg:text-left text-justify max-w-sm text-sm mt-4 text-gray-200 leading-6'>
      Researching, designing, implementing,
       and managing software programs. Testing and evaluating new programs. 
      Identifying areas for modification in existing programs and subsequently
       developing these modifications.
      </p>
      <button className='btn-primary mt-10'> Say Hello!</button>
    
    </div>

    <Image
    src={Hire}
    alt='Hireme'
    className='h-80 md:h-[32rem]  lg:absolute bottom-0 -right-3 object-cover'
    />
</div>

    </section>
  )
}

export default Hireme