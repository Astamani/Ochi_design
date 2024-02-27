import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen pt-20'>
            <div className='cards px-14 flex gap-5'>
                <div className='relative w-[47vw] h-[26vw] rounded-xl bg-[#004D43] flex justify-center items-center flex-col'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-30 h-[4vw]' alt="" />
                        <div className='w-full absolute bottom-0 flex text-center py-14 px-10'>
                        <h1 className='invisible min-[1000px]:visible tag uppercase  px-5 py-2 border-[1px] border-zinc-500 rounded-full'>&copy;2019-2022</h1>
                        </div>
                </div>
                <div className='relative w-[20vw] h-[26vw] rounded-xl bg-[#212121] flex justify-center items-center flex-col'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-30 h-[5vw]' alt="" />
                        <div className='w-full absolute bottom-0 flex text-center py-14 px-10'>
                        <h1 className='invisible min-[1000px]:visible tag uppercase px-5 py-2 border-[1px] border-zinc-500 rounded-full'>rating 5.0 on clunch</h1>
                        </div>
                </div>
                <div className='relative w-[21vw] h-[26vw] rounded-xl bg-[#212121] flex justify-center items-center flex-col'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-35 h-[7vw]' alt="" />
                        <div className='w-full absolute bottom-0 flex text-center py-14 px-10'>
                        <h1 className='invisible min-[1000px]:visible tag uppercase px-5 py-2 border-[1px] border-zinc-500 rounded-full'>@2019-2022</h1>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Cards