import { motion } from 'framer-motion';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900  pt-1'>
      <div className="textstructure mt-36 px-20 text-center font-custom">
        {["We create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className='w-fit flex items-end  overflow-hidden'>
                {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "8.5vw" }} transition={{ ease: [0, 0.55, 0.45, 1], duration: 1 }} className=' mr-[1vw] w-[8.5vw] h-[5.8vw] relative -top-[0vw] bg-green-500'></motion.div>)}
                <h1 className='relative -top-[.9] pt-[2vw] -mb-[1vw] text-[9vw] uppercase leading-[.72] tracking-tighter font-medium '>{item}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=' max-sm:flex-col border-t-[1px] border-zinc-800 max-sm:mt-60 max-sm:items-start max-2xl:mt-20 flex justify-between items-center px-10  py-3'>
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => {
          return <p key={index} className='max-sm:py-5 text-md font-light tracking-tight'>{item}</p>
        })}
        <div className='start flex gap-3 items-center'>
          <div className='uppercase px-6 text-md border-2 border-zinc-600 py-1 font-light tracking-tighter rounded-full'>
            start the Project
          </div>
          <div className='w-8 h-8 rounded-full border-2 font-light border-zinc-600'><FiArrowUpRight className='w-full h-full' /></div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage