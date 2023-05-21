import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2021,
        title: 'Software Engineer',
        duration: 'May 2021 - Present',
        company: 'Cognizant',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        year: 2021,
        title: 'Software Engineer',
        duration: 'May 2021 - Present',
        company: 'Cognizant',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        year: 2021,
        title: 'Software Engineer',
        duration: 'May 2021 - Present',
        company: 'Cognizant',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        year: 2021,
        title: 'Software Engineer',
        duration: 'May 2021 - Present',
        company: 'Cognizant',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    }
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default Work