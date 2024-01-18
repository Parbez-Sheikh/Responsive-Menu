import React from 'react';

import img from '../../src/assets/image/parbez.jpg'
const Home = () => {
  return (
    <div className='bg-black h-screen'>
      <div className='container mx-auto sm:flex justify-between items-center sm:pt-0 pt-28 '>
        <div className=' sm:w-[60%] w-full sm:pt-32 '>
          <h2 className='md:text-5xl lg:text-6xl  text-4xl font-Poppins font-bold tracking-widest text-center text-white'>Parbez Sheikh</h2>
          <h3 className=' md:text-2xl  lg:text-3xl  font-Poppins font-medium tracking-widest text-center pt-10 text-white'><marquee behavior="" direction="">I’m a Developer</marquee></h3>
        </div>

        <div className='sm:w-[30%] w-[50%] sm:mx-0 mx-auto sm:pt-40 md:pt-32 lg:pt10 truncate  lg:pb-5 pt-4 pb-10 box-border'>
          <img className=' w-[60%] h-[30%]  rounded-[50%] sm:pt-6 sm:ml-0 ml-10' src={img} alt="Banner_image" />

        </div>


      </div>
    </div>
  );
};

export default Home;