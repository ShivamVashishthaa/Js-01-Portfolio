import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between items-center bg-gradient-to-b from-orange-400 to-white  px-4 lg:px-11 py-4'>
      <div className='lg:hidden'>
        <svg className='w-4 h-auto md:w-6' xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
      </div>
      <div className=''><Link className='font-bold text-xl md:text-2xl' to="/">&lt;/&gt; Shivam's Portfolio</Link></div>
      <nav className='hidden lg:block text-base font-bold'>
        <ul className='flex gap-5'>
          <li className='' ><Link className='inline-block hover:scale-105 hover:text-orange-950' to="/">Home</Link></li>
          <li className='' ><Link className='inline-block hover:scale-105 hover:text-orange-950' to="about">About</Link></li>
          <li className='' ><Link className='inline-block hover:scale-105 hover:text-orange-950' to="skills">Skill</Link></li>
          <li className='' ><Link className='inline-block hover:scale-105 hover:text-orange-950' to="project">Project</Link></li>
          <li className='' ><Link className='inline-block hover:scale-105 hover:text-orange-950' to="contact">Contact</Link></li>
        </ul>
      </nav>
      <div className=''>
        <input type="checkbox" id='mode' hidden />
        <label htmlFor="mode"><svg stroke="" fill="" stroke-width="0" viewBox="0 0 16 16" className="h-auto w-5 transition-all linear duration-200 ease-linear hover:scale-150 hover:rotate-[360deg] inline-block  md:w-8 " height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg></label>
      </div>
    </header>
  )
}

export default Header
