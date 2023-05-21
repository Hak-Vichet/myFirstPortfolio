import React from 'react'
import ProjectItem from './ProjectItem'
import CodingImg from '../assets/coding.jpg'

const Projets = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] my-10 '>Projects</h1>
            <p className='justify-center items-center '>Lorem ipsum olo site amset consetru adiptiscing elif. Icdine ske inld fcers cons sdjfdf of the suftne manin ndnd ite sutendhe aksdjh sjjskdhsdf. </p>
            <div className='grid sm:grid-cols-2 gap-12 py-10'>
                <ProjectItem img={CodingImg} title='Codeing project' />
                <ProjectItem img={CodingImg} title='Codeing project' />
                <ProjectItem img={CodingImg} title='Codeing project' />
                <ProjectItem img={CodingImg} title='Codeing project' />
            </div>
        </div>
    )
}

export default Projets