import React from 'react'

function Skills() {
  return (
    <section className='grid grid-cols-2 min-h-full gap-5 px-5 md:gap-4 md:px-16 md:grid-cols-3 lg:grid-cols-1 lg:px-24 lg:py-12 lg:justify-items-center '>
      <div className=' hover-change border rounded-xl hover:scale-105 transition-all duration-200 ease-linear lg:w-[58rem] lg:grid lg:grid-cols-2 lg:justify-items-center lg:gap-4'>
        {/* <div className='hidden md:block w-full h-auto lg:order-2 lg:flex lg:flex-col lg:justify-center lg:items-center'> */}
            <img className='rounded-full w-48 h-32 lg:w-80 lg:h-auto lg:order-2' src="./assets/Front-end.jpg" alt="Font-End" />
        {/* </div> */}
        <div className='lg:order-1 '>
          <div className='p-5 flex flex-col justify-center items-center'>
            <h3 className='font-bold text-lg hover:scale-125 transition-all ease-linear duration-100'>Front-End -</h3>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>HTML</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>CSS</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>JavaScript</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Tailwind</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>React</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>TypeScript</p>
          </div>
        </div>
      </div>
      <div className=' hover-change border rounded-xl hover:scale-105 transition-all duration-200 ease-linear lg:w-[58rem] lg:grid lg:grid-cols-2 lg:justify-items-center lg:gap-4'>
      <div className='hidden md:block w-full h-auto lg:order-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
          <figure>
           <img className='rounded-full w-48 h-32 lg:w-80 lg:h-auto' src="./assets/Front-end.jpg" alt="Back-End" />
          </figure>
        </div>
        <div className='lg:order-2'>
          <div className='p-5 flex flex-col justify-center items-center'>
            <h3 className='font-bold text-lg hover:scale-125 transition-all ease-linear duration-100'>Back-End -</h3>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>SpringBoot</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Nodejs</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>SQL</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>PL/SQL</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Java</p>
          </div>
        </div>
      </div>
      <div className=' hover-change border rounded-xl hover:scale-105 transition-all duration-200 ease-linear lg:w-[58rem] lg:grid lg:grid-cols-2 lg:justify-items-center lg:gap-4'>
        <div className='hidden md:block w-full h-auto lg: order-2 lg:flex lg:flex-col lg:justify-center lg:items-center'>
          <figure>
          <img className='rounded-full w-48 h-32 lg:w-80 lg:h-auto' src="./assets/Front-end.jpg" alt="Methodologies" />
          </figure>
        </div>
        <div className='lg:order-1'>
          <div className='p-5 flex flex-col justify-center items-center'>
            <h3 className='font-bold text-lg hover:scale-125 transition-all ease-linear duration-100'>Methodologies / Approach -</h3>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Agile Scrum</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Microservices</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>TDD</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>MVC</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>SOLID Principles</p>
          </div>
        </div>
      </div>
      <div className=' hover-change border rounded-xl hover:scale-105 transition-all duration-200 ease-linear lg:w-[58rem] lg:grid lg:grid-cols-2 lg:justify-items-center lg:gap-4'>
        <div className='hidden md:block w-full h-auto lg: order-1 lg:flex lg:flex-col lg:justify-center lg:items-center'>
          <figure>
          <img className='rounded-full w-48 h-32 lg:w-80 lg:h-auto' src="./assets/Front-end.jpg" alt="Tools" />
          </figure>
        </div>
        <div className='lg:order-2'>
          <div className='p-5 flex flex-col justify-center items-center'>
            <h3 className='font-bold text-lg hover:scale-125 transition-all ease-linear duration-100'>Tools -</h3>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Git</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>IntelliJ</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>VsCode</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Postman</p>
            <p className='font-medium hover:scale-125 transition-all ease-linear duration-100'>Java</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
