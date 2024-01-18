import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";

const Bot = () => {
  return (
    <div className='fixed bottom-5 sm:right-8 right-4 flex justify-center items-center z-[999] cursor-pointer
     text-white rounded-full text-4xl bg-cyan-600 w-16 h-16 animate-bounce '>

<AiOutlineMessage />

    </div>
  )
}

export default Bot