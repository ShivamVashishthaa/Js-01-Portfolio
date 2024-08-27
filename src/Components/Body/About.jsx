import React from 'react'

function About() {
    return (
        <section className='flex flex-col gap-5 px-5 min-h-full md:px-16 lg:px-24 lg:py-12 '>
            <div >
                <h2 className='font-semibold text-xl mb-4'>Education -</h2>
                <div className='md:flex md:justify-between'>
                    <div>
                        <h3 className='font-medium text-lg'>MCA : Master of Computer Applications</h3>
                        <em className='text-gray-500'>College : IMS Ghaziabad</em>
                    </div>
                    <em className='text-gray-500'>2019-2021</em>
                </div>
                <div className='mt-5 md:flex md:justify-between'>
                    <div>
                        <h3 className='font-medium text-lg'>BCA : Bachelor of Computer Applications</h3>
                        <em className='text-gray-500'>College : I P College, Campus 2, Bulandshahr, U.P
                        </em>
                    </div>
                    <em className='text-gray-500'>2016-2019</em>
                </div>
            </div>
            <hr className='my-5' />
            <div>
                <h2 className='font-semibold text-xl mb-4'>Working -</h2>
                <div className=''>
                    <h3 className='font-medium text-lg'>Infosys | <em className='text-gray-500 text-base font-normal'>	&#40; Hyderabad &#41;</em> | <em className='text-gray-500 text-sm font-normal'> &#40; Aug,2024 - Present &#41;</em></h3>
                    <em className='text-gray-500'>Senior System Engineer</em>

                    <ul className='list-disc pl-7'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <hr className='my-9' />
                <div className=''>
                    <h3 className='font-medium text-lg'>Genpact | <em className='text-gray-500 text-base font-normal'>	&#40; Noida &#41;</em> | <em className='text-gray-500 text-sm font-normal'> &#40; Sept,2021 - Dec,2023 &#41;</em></h3>
                    <i className='text-gray-500'>Junior Java Developer</i>
                    <ul className='list-disc pl-7'>
                        <li>
                            Collaborated closely with the back-end team to implement new features and ensure seamless integration.
                        </li>
                        <li>
                            Successfully resolved UI bugs and issues, contributing to an improved user experience and overall project quality.</li>
                        <li>
                            Conducted unit testing using JUnit to verify the functionality and responsiveness of front-end components
                        </li>
                        <li>
                            Participated in End-to-End (E2E) testing to ensure smooth integration and consistent performance across the system.
                        </li>
                        <li>
                            Actively engaged with clients to gather requirements and translate them into actionable front-end solutions.

                        </li>
                        <li>
                            Mentored and guided over 2 interns supporting their learning and growth throughout their internship
                            experience.
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='my-9' />
            <div>
                <h2 className='font-semibold text-xl mb-4'>Certifications -</h2>
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
