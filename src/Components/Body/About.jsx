import React from 'react'

function About() {
    return (
        <section className='flex flex-col gap-5 px-5 min-h-full md:px-16 lg:px-24 lg:py-12 '>
            <div >
                <h2 className='font-semibold text-xl'>Education :</h2>
                <div className='md:flex md:justify-between'>
                    <div>
                        <h3 className='font-medium text-lg'>MCA : Master of Computer Applications</h3>
                        <i className='text-gray-500'>College : IMS Ghaziabad</i>
                    </div>
                    <i className='text-gray-500'>2019-2021</i>
                </div>
                <div className='mt-5 md:flex md:justify-between'>
                    <div>
                        <h3 className='font-medium text-lg'>BCA : Bachelor of Computer Applications</h3>
                        <i className='text-gray-500'>College : I P College, Campus 2, Bulandshahr, U.P
                        </i>
                    </div>
                    <i className='text-gray-500'>2016-2019</i>
                </div>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>Working :</h2>
                <div className='md:flex md:justify-between'>
                    <div>
                        <h3 className='font-medium text-lg'>Infosys</h3>
                        <i className='text-gray-500'>Senior System Engineer</i>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                    <i className='text-gray-500'>Aug,2024 - Present</i>
                </div>
                <div className='mt-5 md:flex md:justify-between'>
                    <div>
                        <h3 className='font-medium text-lg'>Genpact</h3>
                        <i className='text-gray-500'>Junior Java Developer</i>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                    <i className='text-gray-500'>Sept,2021 - Dec,2023</i>
                </div>
            </div>
            <div>
                <h2 className='font-semibold text-xl'>Certifications :</h2>
                <div>
                    <h3 className='font-medium text-lg'><a href="">Master of SpringBoot 3.0</a></h3>
                    <i className='text-gray-500'>Source : Udemy</i>
                </div>
                <div className='mt-5'>
                    <h3 className='font-medium text-lg'><a href="">Java Programming</a></h3>
                    <i className='text-gray-500'>Source : GreatLearning
                    </i>
                </div>
            </div>
        </section>
    )
}

export default About
