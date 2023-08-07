import React from 'react';
import { FaBootstrap,FaHtml5 } from 'react-icons/fa';
import { BiLogoFirebase,BiLogoReact,BiLogoCss3,BiLogoTailwindCss,BiLogoMongodb,BiLogoNodejs } from 'react-icons/bi';

const Framer = () => {




  return (
    <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6'>
            <div className='p-4 flex items-center justify-center rounded-lg border border-[#0B1120] bg-[#0B1120]'>
                <div className="text-center text-white">
                    <FaBootstrap size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">Bootstrap</h3>
                </div>
            </div>
            <div className='flex items-center justify-center p-4 rounded-lg border border-[#0B1120] bg-[#0B1120]'>
                <div className="text-center text-white">
                    <BiLogoFirebase size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">Firebase</h3>
                </div>
            </div>
            <div className='flex items-center justify-center p-4 rounded-lg border border-[#0B1120] bg-[#0B1120]'>
                <div className="text-center text-white">
                    <BiLogoMongodb size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">MongoDB</h3>
                </div>
            </div>
            <div className='flex items-center justify-center p-4 rounded-lg border border-[#0B1120] bg-[#0B1120]'>
                <div className="text-center text-white">
                    <BiLogoNodejs size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">Node Js</h3>
                </div>
            </div>
            <div className='flex items-center justify-center p-4 rounded-lg border border-[#0B1120] bg-[#0B1120]'>

                <div className="text-center text-white">
                    <FaHtml5 size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">HTML5</h3>
                </div>
            </div>
            <div className='flex items-center justify-center p-4 rounded-lg border border-[#0B1120] bg-[#0B1120]'>

                <div className="text-center text-white">
                    <BiLogoTailwindCss size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">TailwindCss</h3>
                </div>
            </div>
            <div className='flex items-center justify-center p-4 rounded-lg border border-[#0B1120] bg-[#0B1120]'>

                <div className="text-center text-white">
                    <BiLogoCss3 size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">CSS3</h3>
                </div>
            </div>
            <div className='flex items-center justify-center p-4 rounded-lg border border-[#0B1120] bg-[#0B1120]'>
                <div className="text-center text-white">
                    <BiLogoReact size={30} className='mx-auto'/>
                    <h3 className="mt-2 text-sm font-medium">React</h3>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Framer