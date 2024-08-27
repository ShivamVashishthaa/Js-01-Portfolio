import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <section className='w-full h-auto px-5 md:gap-20 md:px-16 lg:px-24 lg:py-12'>
            <h2 className='text-xl font-bold md:text-2xl mb-3'>Projects -</h2>
            <div className='flex flex-col justify-between gap-2'>
                <h3 className='text-lg font-semibold md:text-xl'><Link to="https://p-01-tailwind.vercel.app/" target="_blank">Website Front page</Link></h3>
                <p className='text-base font-medium md:text-lg'>Technology used -</p>
                <ul className='px-4 text-base'>
                    <li><em>HTML</em></li>
                    <li><em>TailwindCSS</em></li>
                    <li><em>Javascript</em></li>
                </ul>
                <div>
                    <p className='text-base font-medium md:text-lg'>Description -</p>
                    <p className='px-4 md:text-lg'><em className='leading-6 tracking-wide'>
                        This is a Front page of Hosting website, Just to practice tailwind CSS
                    </em></p>
                </div>
            </div>
            <hr className='my-9' />
            <div className='flex flex-col justify-between gap-2'>
                <h3 className='text-lg font-semibold md:text-xl'>project name</h3>
                <p className='text-base font-medium md:text-lg'>Technology used -</p>
                <ul className='px-4 text-base'>
                    <li><em>HTML</em></li>
                    <li><em>CSS</em></li>
                    <li><em>Javascript</em></li>
                </ul>
                <div>
                    <p className='text-base font-medium md:text-lg'>Description -</p>
                    <p className='px-4 md:text-lg'><em className='leading-6 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium nisi quasi doloremque iure ex perferendis. Amet ab, vero earum officiis rem sed debitis. Voluptatibus, harum. Sint amet fuga, molestiae aspernatur unde eligendi sit molestias, commodi delectus sed ducimus a fugit deleniti magnam nulla? Cum veritatis quis fugit illo nam.</em></p>
                </div>
            </div>
            <hr className='my-9' />
            <div className='flex flex-col justify-between gap-2'>
                <h3 className='text-lg font-semibold md:text-xl'>project name</h3>
                <p className='text-base font-medium md:text-lg'>Technology used -</p>
                <ul className='px-4 text-base'>
                    <li><em>HTML</em></li>
                    <li><em>CSS</em></li>
                    <li><em>Javascript</em></li>
                </ul>
                <div>
                    <p className='text-base font-medium md:text-lg'>Description -</p>
                    <p className='px-4 md:text-lg'><em className='leading-6 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium nisi quasi doloremque iure ex perferendis. Amet ab, vero earum officiis rem sed debitis. Voluptatibus, harum. Sint amet fuga, molestiae aspernatur unde eligendi sit molestias, commodi delectus sed ducimus a fugit deleniti magnam nulla? Cum veritatis quis fugit illo nam.</em></p>
                </div>
            </div>
            <hr className='my-9' />
            <div className='flex flex-col justify-between gap-2'>
                <h3 className='text-lg font-semibold md:text-xl'>project name</h3>
                <p className='text-base font-medium md:text-lg'>Technology used -</p>
                <ul className='px-4 text-base'>
                    <li><em>HTML</em></li>
                    <li><em>CSS</em></li>
                    <li><em>Javascript</em></li>
                </ul>
                <div>
                    <p className='text-base font-medium md:text-lg'>Description -</p>
                    <p className='px-4 md:text-lg'><em className='leading-6 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium nisi quasi doloremque iure ex perferendis. Amet ab, vero earum officiis rem sed debitis. Voluptatibus, harum. Sint amet fuga, molestiae aspernatur unde eligendi sit molestias, commodi delectus sed ducimus a fugit deleniti magnam nulla? Cum veritatis quis fugit illo nam.</em></p>
                </div>
            </div>
            <hr className='my-9' />
            <div className='flex flex-col justify-between gap-2'>
                <h3 className='text-lg font-semibold md:text-xl'>project name</h3>
                <p className='text-base font-medium md:text-lg'>Technology used -</p>
                <ul className='px-4 text-base'>
                    <li><em>HTML</em></li>
                    <li><em>CSS</em></li>
                    <li><em>Javascript</em></li>
                </ul>
                <div>
                    <p className='text-base font-medium md:text-lg'>Description -</p>
                    <p className='px-4 md:text-lg'><em className='leading-6 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium nisi quasi doloremque iure ex perferendis. Amet ab, vero earum officiis rem sed debitis. Voluptatibus, harum. Sint amet fuga, molestiae aspernatur unde eligendi sit molestias, commodi delectus sed ducimus a fugit deleniti magnam nulla? Cum veritatis quis fugit illo nam.</em></p>
                </div>
            </div>
            <hr className='my-9' />


        </section>
    )
}

export default Projects
