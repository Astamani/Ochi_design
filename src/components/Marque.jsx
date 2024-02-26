import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full py-20 bg-[#004D43]  rounded-t-3xl'>
      <div className='overflow-hidden text text-start border-t-[1px] border-b-[1px] flex whitespace-nowrap text-[19vw] leading-none font-semibold  font-custom '>
        {['we are ochi','we are ochi','we are ochi'].map((item,index)=>{
          return(
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',duration:5,repeat:Infinity}} key={index} className='text-center -mb-[3vw] pt-0 uppercase'>{item}&nbsp;</motion.h1>
            // <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:9}} key={index} className='text-center -mb-10 pt-0 uppercase'>{item}</motion.h1>
          );
        })}
      </div>
    </div>
  )
}

export default Marque