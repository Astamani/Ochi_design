import React from 'react'

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.01" className='w-full  py-28  rounded-t-3xl text-zinc-900 bg-[#CDEA68]'>
            <div className='px-20'>
                <h1 className='  text-[3.8vw] leading-[1] w-[90vw] tracking-tight font-[Neue_Montreal]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            </div>
            <div className='border-t-[1px] w-full py-5 border-[#9bae58] mt-[3vw] flex gap-5'>
                <div className='px-20 w-1/2'>
                    <h1 className='text-[3.8vw] leading-[1] tracking-tight font-[Neue_Montreal]'>Our approach:</h1>
                    <button className='py-4 px-10 bg-black text-white uppercase rounded-full mt-6 flex gap-5 items-center'>Read more
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className=' w-1/2 bg-black h-[70vh] mx-10 rounded-2xl'>
                  
                </div>
            </div>
        </div >
    )
}

export default About