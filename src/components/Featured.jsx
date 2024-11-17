import { motion, useAnimation } from 'framer-motion';
import React from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const handleHover = (index) => {
        cards[index].start({ y: '0' });
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: '100%' });
    }
    return (
        <div className='w-full min-h-screen'>
            <dir className='py-10 '>
                <h1 className=' text-[4vw] tracking-tight'>Featured projects</h1>
            </dir>
            <div className='border-t-[1px] border-zinc-700 flex flex-col px-12'>
                <div className='relative w-full  py-14 max-2xl:flex flex max-sm:flex-col gap-5'>
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='max-sm:w-full max-2xl:w-1/2'>
                        <div className='flex gap-3 items-center '>
                            <div className='w-4 h-4 bg-white rounded-full'></div>
                            <h4 className='uppercase'>FYDE</h4>
                        </div>
                        <div className='w-full h-[85vh] '>
                            <h1 className='absolute left-1/2 uppercase tracking-tight text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2  z-10 text-7xl overflow-hidden'>{"fyde".split('').map((item, index) => {
                                return (
                                    <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.12, 0, 0.39, 0], delay: index * .01 }} className='inline-block' key={index}>{item}</motion.span>
                                );
                            })}</h1>
                            <div className='w-full h-full rounded-xl bg-cover bg-center overflow-hidden mt-4'>
                                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='w-full h-full bg-cover bg-center' alt="" />
                            </div>
                        </div>
                        <div className='max-md:invisible max-2xl:visible py-4 mt-2 flex gap-5'>
                            {['Audit', 'copywrite', 'sales deck', 'slides design'].map((item, index) => {
                                return (
                                    <div key={index} className='flex'>
                                        <button className='border-[1px] rounded-full px-6 uppercase py-[5px]'>{item}</button>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='max-sm:w-full max-2xl:w-1/2 '>
                        <div className='flex gap-3 items-center '>
                            <div className='w-4 h-4 bg-white rounded-full'></div>
                            <h4 className='uppercase'>VISE</h4>
                        </div>
                        <div className='w-full h-[85vh] '>
                            <div className='w-full h-full rounded-xl bg-[#19181E] border-2 bg-cover bg-center overflow-hidden mt-4'>
                                <h1 className=' overflow-hidden absolute left-1/2 uppercase tracking-tight text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2  z-10 text-7xl'>{"vise".split('').map((item, index) => {
                                    return (
                                        <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.12, 0, 0.39, 0], delay: index * .01 }} className='inline-block' key={index}>{item}</motion.span>
                                    );
                                })}</h1>
                                <img src=" https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='w-full h-full bg-cover bg-center' alt="" />
                            </div>
                        </div>
                        <div className='max-md:invisible max-2xl:visible py-4 mt-2 flex gap-5'>
                            {['agency', 'company presentation'].map((item, index) => {
                                return (
                                    <div key={index} className='flex'>
                                        <button className='border-[1px] rounded-full px-6 uppercase py-[5px]'>{item}</button>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>



                <div className='w-full max-2xl:flex max-sm:flex-col relative  flex gap-5'>
                    <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className=' max-sm:w-full max-2xl:w-1/2'>
                        <div className='flex gap-3 items-center '>
                            <div className='w-4 h-4 bg-white rounded-full'></div>
                            <h4 className='uppercase'>
                                TRAWA</h4>
                        </div>
                        <div className=' w-full h-[85vh] '>
                            <div className='w-full h-full rounded-xl bg-cover bg-center overflow-hidden mt-4'>
                                <h1 className='overflow-hidden absolute left-1/2 uppercase tracking-tight text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2  z-10 text-7xl'>{"TRAWA".split('').map((item, index) => {
                                    return (
                                        <motion.span initial={{ y: "100%" }} animate={cards[2]} transition={{ ease: [0.12, 0, 0.39, 0], delay: index * .01 }} className='inline-block' key={index}>{item}</motion.span>
                                    );
                                })}</h1>
                                <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" className=' w-full h-full bg-cover bg-center' alt="" />
                            </div>
                        </div>
                        <div className=' max-md:invisible max-2xl:visible py-4 mt-2 flex gap-5'>
                            {['braded identity', 'design research', 'investor deck'].map((item, index) => {
                                return (
                                    <div key={index} className='flex'>
                                        <button className='border-[1px] rounded-full px-6 uppercase py-[5px]'>{item}</button>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverEnd(3)} className='max-sm:w-full max-2xl:w-1/2'>
                        <div className='flex gap-3 items-center '>
                            <div className='w-4 h-4 bg-white rounded-full'></div>
                            <h4 className='uppercase'>PREMIUM BLEND</h4>
                        </div>
                        <div className='w-full h-[85vh] '>
                            <div className='w-full h-full rounded-xl bg-[#19181E] border-2 bg-cover bg-center overflow-hidden mt-4'>
                                <h1 className=' overflow-hidden absolute left-1/2 uppercase text-[#CDEA68] tracking-tight -translate-x-1/2 -translate-y-1/2 top-1/2  z-10 text-7xl'>{"PREMIUM BLEND".split('').map((item, index) => {
                                    return (
                                        <motion.span initial={{ y: "100%" }} animate={cards[3]} transition={{ ease: [0.12, 0, 0.39, 0], delay: index * .01 }} className='inline-block' key={index}>{item}</motion.span>
                                    );
                                })}</h1>
                                <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" className='w-full h-full bg-cover bg-center' alt="" />
                            </div>
                        </div>
                        <div className='py-4 mt-2 flex gap-5'>
                            <div className='flex'>
                                <button className=' max-md:invisible max-2xl:visible border-[1px] rounded-full px-6 uppercase py-[5px]'>branded templet </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className='my-10 flex justify-center items-center'>
                    <button className='max-sm:w-full max-2xl:w-[16vw] border-[1px] rounded-full py-[10px] px-[30px] uppercase'>VIew all casestydy</button>
                </div>

            </div>
        </div>
    )
}

export default Featured