import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            let mouseX = event.clientX;
            let mouseY = event.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * 57.;
            setRotate(angle - 180);
        })
    });
    return (
        <div className=' w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-white bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='absolute  w-1/2  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 items-center justify-center'>
                    <div className='  w-[16vw] h-[16vw] bg-white rounded-full flex items-center justify-center'>
                        <div className='relative bg-black h-2/3 w-2/3 rounded-full flex justify-center items-center'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='w-full h-6 '>
                                <div className='w-6 h-6 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='  w-[16vw] h-[16vw] bg-white rounded-full flex items-center justify-center'>
                        <div className='bg-black h-[10vw] w-[10vw] rounded-full  flex justify-center items-center'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='w-full h-6 flex item-start'>
                                <div className='w-6 h-6 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes