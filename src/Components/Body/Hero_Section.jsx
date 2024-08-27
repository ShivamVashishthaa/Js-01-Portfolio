import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

function Hero_Section() {

  const el = useRef(null);

  const names = useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Web Designer", "Java Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backDelay: 100,
      backSpeed: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }
    , []);

  return (
    <main className='grid grid-rows-2 items-center justify-items-center gap-3 px-5 md:gap-20 md:px-16 lg:grid lg:grid-cols-2 lg:grid-rows-none lg:px-24 lg:py-12 '>
      <div className='order-2 lg:order-1'>
        <h1 className='text-xl md:text-2xl md:inline-block'>I'm <span className='font-bold tracking-wide'>Shivam Vashishtha a &nbsp; </span>
        </h1>
        <span className='font-bold text-xl md:text-2xl' ref={el}></span>
        <br />
        <p className='leading-7 tracking-wide mt-2 md:text-xl overflow-y-auto'>
          A Full Stack Java Developer, Skilled in both front-end and back-end development, proficient in Java, Spring, SpringBoot and related frameworks. Can design, develop, and maintain complex web applications, ensuring seamless user experiences and robust server-side functionality. Expertise includes database management, RESTful APIs, and agile methodologies for delivering scalable solutions.
        </p>
        <Link href="#" className='inline-block bg-orange-400 rounded p-2 text-white hover:shadow-[0_0px_15px_2px_rgb(251,146,60)] hover:scale-110 transition-all duration-150 ease-linear  mt-4'>Download CV</Link>
      </div>
      <div className='order-1 rounded-full w-52 h-auto md:w-72 lg:order-2'>
        <figure >
          <img className='rounded-full hover:scale-125 transition-all ease-linear duration-100' src="./assets/myimg.jpg" alt="my-pic" />
        </figure>
      </div>

    </main>
  )
}

export default Hero_Section;
