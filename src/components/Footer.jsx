import React from 'react'

function Footer() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full  py-20'>
            <div className='footer_container px-16 flex'>
                <div className='w-1/2 h-[40vw] font-semibold'>
                    <h1 className='text-[9vw] leading-none font-custom'>EYE-
                    </h1>
                    <h1 className='text-[9vw] leading-[.5] font-custom'>OPENING</h1>
                </div>
                <div className='w-1/2 h-[40vw] font-semibold'>
                    <h1 className='text-[8vw] leading-none font-custom'>PRESENTATIONS</h1>
                    <div className='all_text flex gap-36'>
                        <div>

                            <div className=''>
                                <div className='flex flex-col  py-9'>
                                    <h6>S:</h6>
                                    <span>Instagram</span>
                                    <span>Behance</span>
                                    <span>Facebook</span>
                                    <span>Linkedin</span>
                                </div>
                                <div className='flex flex-col  py-9'>
                                    <h6>L:</h6>
                                    <span>202-1965 W 4th Ave
                                        Vancouver, Canada</span>
                                    <span>30 Chukarina St
                                        Lviv, Ukraine</span>
                                </div>
                                <div className='flex flex-col  py-9' >
                                    <h6>E:</h6>
                                    <span>hello@ochi.design</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h6 className='py-4'>M:</h6>
                            <span>Home</span>
                            <span>Services</span>
                            <span>Our work</span>
                            <span> About us</span>
                            <span>Insights</span>
                            <span> Contact us</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer