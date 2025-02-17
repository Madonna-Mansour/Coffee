import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import user1 from '../assets/user-1.jpg'
import user2 from '../assets/user-2.jpg'
import user3 from '../assets/user-3.jpg'
import user4 from '../assets/user-4.jpg'



export default function App() {
  return (
    <>
    <div className='flex justify-center text-center p-10 black'>
          <div className="">
          <h1 className='text-3xl font-bold' >Testimonials</h1>
          <hr className='h-[1px] mt-2 w-[170px] bg-orange-500  border-none mb-10'/>
          </div>
       </div>
       <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        
        className="mySwiper black text-center ">
        <SwiperSlide className=" ">
            <div className=''>
                <img src={user1} alt="" />
                <p>Amazing service and top-notch coffee!</p>
                <h2>- John Doe</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="">
                <img src={user2} alt="" />
                <p>Amazing service and top-notch coffee!</p>
                <h2>- John Smith</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="">
                <img src={user3} alt="" />
                <p>Amazing service and top-notch coffee!</p>
                <h2>- Emily brown</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="">
              <img src={user4} alt="" />
              <p>Amazing service and top-notch coffee!</p>
              <h2>- Lena Mark</h2>
            </div>
        </SwiperSlide>
        
      </Swiper>

      
     
    </>
  );
}
