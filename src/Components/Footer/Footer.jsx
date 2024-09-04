import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='grid grid-cols-1 w-full px-5 py-5 bg-gradient-to-b from-white to-orange-400  md:grid-cols-2 align-text-bottom bottom-0'>
      <div className='order-2 flex flex-col justify-center items-center md:order-1'>
        <div className=''>
          <a className='font-bold text-xl md:text-2xl' href="#">&lt;/&gt; Shivam's Portfolio</a>
        </div>
        <div className=''>
          <ul className='flex gap-5 justify-center items-center '>
            <li><Link to="https://github.com/ShivamVashishthaa" target="_blank"><i className="fa-brands fa-github-alt transition-all linear duration-200 ease-linear hover:scale-150 hover:rotate-[360deg] "></i></Link></li>
            <li><Link to="https://linkedin.com/in/shivamvashishtha1" target="_blank"><i className="fa-brands fa-linkedin transition-all linear duration-200 ease-linear hover:scale-150 hover:rotate-[360deg] "></i></Link></li>
            <li><Link to="https://github.com/ShivamVashishthaa" target="_blank"><i className="fa-solid fa-g transition-all linear duration-200 ease-linear hover:scale-150 hover:rotate-[360deg]"></i></Link></li>
          </ul>
        </div>
      </div>
      <div className=' order-1 md:order-2' >
        <ul className='flex flex-col items-center font-semibold md:grid md:grid-cols-2'>
          <li ><Link className='transition-all linear duration-100 ease-linear hover:scale-110 inline-block' to="https://github.com/ShivamVashishthaa">Git</Link></li>
          <li ><Link className='transition-all linear duration-100 ease-linear hover:scale-110 inline-block' to="https://linkedin.com/in/shivamvashishtha1">LinkedIn</Link></li>
          <li ><Link className='transition-all linear duration-100 ease-linear hover:scale-110 inline-block' to="about">About</Link></li>
          <li ><Link className='transition-all linear duration-100 ease-linear hover:scale-110 inline-block' to="contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
