import React from 'react'

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.01" className='w-full  py-28  rounded-t-3xl text-zinc-900 bg-[#CDEA68]'>
            <div className='px-20'>
                <h1 className='  text-[3.8vw] leading-[1] w-[90vw] tracking-tight font-[Neue_Montreal]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            </div>
            <div className='border-t-[1px] w-full max-2xl:py-5 border-[#9bae58] mt-[3vw] flex max-md:flex-col gap-5'>
                <div className='px-20 max-sm:w-full max-2xl:w-1/2'>
                    <h1 className='text-[3.8vw] leading-[1] tracking-tight font-[Neue_Montreal]'>Our approach:</h1>
                    <button className='max-:py-2 max-lg:px-5 max-2xl:py-4 max-2xl:px-10 bg-black text-white uppercase rounded-full mt-6 flex max-sm:gap-2 max-sm:text-xl max-sm:w-fullmax-2xl:gap-5 items-center'>Read more
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className=' max-md:w-[90vw] max-2xl:w-1/2  h-[70vh] max-2xl:mx-10 overflow-hidden max-2xl:px-20 rounded-2xl'>
                  <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className='w-full h-full' alt="" />
                </div>
            </div>
        </div >
    )
}

export default About