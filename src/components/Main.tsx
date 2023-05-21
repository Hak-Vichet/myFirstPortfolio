import React from "react"
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa' 

const Main = () => {
    return (
        <div id='main'>
            <img 
                className='w-full h-screen object-cover object-left'
                src="https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
                <div className='max-w-[700px] m-auto  h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Hak Vichet</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        <TypeAnimation
                            sequence={[
                                'I am a Full-Stack Developer', // Types 'One'
                                1000,   // Waits 1s
                                // '', // Deletes 'One' and types 'Two'
                                // 2000, // Waits 2s
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                            />
                        {/* Developer */}
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaTwitter className='cursor-pointer' size={20}/>
                        <FaFacebook className='cursor-pointer' size={20}/>
                        <FaInstagram className='cursor-pointer' size={20}/>
                        <FaLinkedinIn className='cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Main