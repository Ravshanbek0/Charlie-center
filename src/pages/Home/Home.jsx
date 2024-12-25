import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Home() {

    return (
        <div className='pt-[69px]  overflow-hidden'>
            <header className='lg:w-[1280px] px-3 lg:m-auto  flex lg:flex-row justify-center items-center lg:justify-between flex-col'>
                <div className='lg:w-[580px] mb-7 lg:mb-0'>
                    <h1 className='lg:text-6xl font-bold md:text-4xl text-2xl text-center lg:text-left'>
                        Getting Quality Education is now more Easy
                    </h1>
                    <p className='md:text-lg text-sm mt-8 mb-8 text-[#565A5B] text-center lg:text-left'>is a long established fact that a reader will be distracted by the readable content of a page when looking  </p>
                    <div className='flex lg:justify-start justify-center mt-6 lg:mt-0 gap-4'>
                        <button className='px-4 md:py-2 py-1 text-black bg-[#F5C362] rounded-xl'>Join Us Free</button>
                        <button className='px-4 md:py-2 py-1 text-black bg-white border border-[#309DC1] rounded-xl'>Join Us Free</button>
                    </div>
                </div>
                <div className=''>
                    <img className='object-contain' src="./imgs/heros.png" alt="" />
                </div>
            </header>
            <section className='w-full bg-[#0166FF] h-[270px] mt-[118px] flex flex-wrap justify-around text-white items-center'>
                <div className='flex flex-col md:text-3xl text-xl'>8200 <span className='md:text-lg text-base'>Success Stories</span></div>
                <div className='w-[1px] h-[75px] bg-white hidden md:block'></div>
                <div className='flex flex-col md:text-3xl text-xl'>12200 <span className='md:text-lg text-base'>Success Stories</span></div>
                <div className='w-[1px] h-[75px] bg-white hidden md:block'></div>
                <div className='flex flex-col md:text-3xl text-xl'>50000 <span className='md:text-lg text-base'>Success Stories</span></div>
                <div className='w-[1px] h-[75px] bg-white hidden md:block'></div>
                <div className='flex flex-col md:text-3xl text-xl'>70000 <span className='md:text-lg text-base'>Success Stories</span></div>
            </section>
            <section className='pt-[110px] bg-[#F9FAFC]'>
                <div>
                    <h1 className='text-center text-6xl'>Benefits of online Education  </h1>
                    <p className='text-[#565A5B] text-lg text-center mt-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking  </p>
                    <div className='flex mt-10 flex-wrap gap-4 lg:gap-1 justify-around px-3'>
                        <div className='w-full lg:w-[320px] bg-white rounded-2xl p-6'>
                            <span className='bg-[#3D81C2] w-10 h-10 mb-4 rounded text-white flex justify-center items-center'><CiUser className='text-xl' /></span>
                            <h1 className='text-xl mb-4'>One on One Monitor</h1>
                            <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div>
                        <div className='w-full lg:w-[320px] bg-white rounded-2xl p-6'>
                            <span className='bg-[#3D81C2] w-10 h-10 mb-4 rounded text-white flex justify-center items-center'><CiUser className='text-xl' /></span>
                            <h1 className='text-xl mb-4'>One on One Monitor</h1>
                            <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div>
                        <div className='w-full lg:w-[320px] bg-white rounded-2xl p-6'>
                            <span className='bg-[#3D81C2] w-10 h-10 mb-4 rounded text-white flex justify-center items-center'><CiUser className='text-xl' /></span>
                            <h1 className='text-xl mb-4'>One on One Monitor</h1>
                            <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div>
                        <div className='w-full lg:w-[320px] bg-white rounded-2xl p-6'>
                            <span className='bg-[#3D81C2] w-10 h-10 mb-4 rounded text-white flex justify-center items-center'><CiUser className='text-xl' /></span>
                            <h1 className='text-xl mb-4'>One on One Monitor</h1>
                            <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-[110px] px-3 flex lg:flex-row flex-col items-center justify-between overflow-hidden gap-4 lg:w-[1280px] lg:m-auto'>
                    <div><img src="./imgs/Group 36.png" alt="" /></div>
                    <div className='lg:max-w-[432px]'>
                        <h1 className='lg:text-4xl text-2xl'>We are Always Ensure Best Course for your learning</h1>
                        <p className='text-[#565A5B] mt-4 lg:text-lg text-base' >Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the  </p>
                        <button className='px-4 md:py-2 mt-4 py-1 text-black bg-[#F5C362] rounded-xl'>Join Us Free</button>

                    </div>
                </div>
                <div className='px-3 mt-[110px]'>
                    <h1 className='text-center text-6xl'>Our Popular Course  </h1>
                    <p className='text-[#565A5B] text-lg text-center mt-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking  </p>
                    <div className='flex justify-center flex-wrap mt-[60px] gap-6'>
                        <div className='pb-3 w-full max-w-[400px] bg-white flex flex-col items-center gap-4 overflow-hidden rounded-2xl'>
                            <img className='w-full object-contain' src="./imgs/Rectangle 525.png" alt="" />
                            <h1>Web Design  Basic to advance</h1>
                            <img src="./imgs/Group 121.png" alt="" />
                            <button className='border-2 px-12 py-2 border-[#309DC1] rounded'>Add to card</button>
                        </div>
                        <div className='pb-3 w-full max-w-[400px] bg-white flex flex-col items-center gap-4 overflow-hidden rounded-2xl'>
                            <img className='w-full object-contain' src="./imgs/Rectangle 525.png" alt="" />
                            <h1>Web Design  Basic to advance</h1>
                            <img src="./imgs/Group 121.png" alt="" />
                            <button className='border-2 px-12 py-2 border-[#309DC1] rounded'>Add to card</button>
                        </div>
                        <div className='pb-3 w-full max-w-[400px] bg-white flex flex-col items-center gap-4 overflow-hidden rounded-2xl'>
                            <img className='w-full object-contain' src="./imgs/Rectangle 525.png" alt="" />
                            <h1>Web Design  Basic to advance</h1>
                            <img src="./imgs/Group 121.png" alt="" />
                            <button className='border-2 px-12 py-2 border-[#309DC1] rounded'>Add to card</button>
                        </div>
                        <div className='pb-3 w-full max-w-[400px] bg-white flex flex-col items-center gap-4 overflow-hidden rounded-2xl'>
                            <img className='w-full object-contain' src="./imgs/Rectangle 525.png" alt="" />
                            <h1>Web Design  Basic to advance</h1>
                            <img src="./imgs/Group 121.png" alt="" />
                            <button className='border-2 px-12 py-2 border-[#309DC1] rounded'>Add to card</button>
                        </div>
                        <div className='pb-3 w-full max-w-[400px] bg-white flex flex-col items-center gap-4 overflow-hidden rounded-2xl'>
                            <img className='w-full object-contain' src="./imgs/Rectangle 525.png" alt="" />
                            <h1>Web Design  Basic to advance</h1>
                            <img src="./imgs/Group 121.png" alt="" />
                            <button className='border-2 px-12 py-2 border-[#309DC1] rounded'>Add to card</button>
                        </div>
                        <div className='pb-3 w-full max-w-[400px] bg-white flex flex-col items-center gap-4 overflow-hidden rounded-2xl'>
                            <img className='w-full object-contain' src="./imgs/Rectangle 525.png" alt="" />
                            <h1>Web Design  Basic to advance</h1>
                            <img src="./imgs/Group 121.png" alt="" />
                            <button className='border-2 px-12 py-2 border-[#309DC1] rounded'>Add to card</button>
                        </div>

                    </div>
                    <button className='px-4 block m-auto mt-8 md:py-2 py-1 text-black bg-[#F5C362] rounded-xl'>See more</button>


                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="w-full h-[450px] mt-[100px] px-3 pb-3"
                    // centeredSlides={true}
                    breakpoints={{
                        1: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className="flex flex-col px-4  justify-center bg-white  shadow rounded-lg">
                        <h1 className='text-2xl font-semibold mb-6'>Great Platform</h1>
                        <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  </p>
                        <img className='object-contain w-[220px]' src="./imgs/Group 58.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col px-4  justify-center bg-white  shadow rounded-lg">
                        <h1 className='text-2xl font-semibold mb-6'>Great Platform</h1>
                        <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  </p>
                        <img className='object-contain w-[220px]' src="./imgs/Group 58.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col px-4  justify-center bg-white  shadow rounded-lg">
                        <h1 className='text-2xl font-semibold mb-6'>Great Platform</h1>
                        <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  </p>
                        <img className='object-contain w-[220px]' src="./imgs/Group 58.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="flex flex-col px-4  justify-center bg-white  shadow rounded-lg">
                        <h1 className='text-2xl font-semibold mb-6'>Great Platform</h1>
                        <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  </p>
                        <img className='object-contain w-[220px]' src="./imgs/Group 58.png" alt="" />
                    </SwiperSlide>

                </Swiper>

            </section>
            <footer className='bg-[#0166FF] w-full lg:pt-[130px] pt-8 pb-4'>
                <div className='flex flex-col xl:flex-row  w-ful max-w-[1280px] m-auto justify-between text-white gap-4'>
                    <div className='flex justify-around lg:w-1/2'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[40px]' src="./imgs/logo.jpg" alt="" />
                                <h1 className='text-white font-semibold lg:text-xl text-[18px]'>Charlie</h1>
                            </div>
                            <p>Follow on social service</p>
                            <img className='w-16' src="./imgs/Group 54.png" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Links</h1>
                            <ul className='mt-4'>
                                <li>Home</li>
                                <li>Help center</li>
                                <li>Center</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-around lg:w-1/2'>
                        <div>
                            <h1 className='text-xl font-semibold'>Links</h1>
                            <ul className='mt-4'>
                                <li>Home</li>
                                <li>Help center</li>
                                <li>Center</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Links</h1>
                            <ul className='mt-4'>
                                <li>Home</li>
                                <li>Help center</li>
                                <li>Center</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-3/4 bg-white h-[1.5px] mt-8 m-auto opacity-60'></div>
                    <h1 className='text-white text-center mt-4'>Copyright 2020@ all right</h1>
                </div>
            </footer>
        </div>
    )
}

export default Home