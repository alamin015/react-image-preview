import React, { useState } from 'react';
import { LuUploadCloud } from 'react-icons/lu';

const Banner = () => {
const [selectedImg,setSelectedImg] = useState(null)
    const handleForm = (e) => {
        e.preventDefault();
        console.log(URL.createObjectURL())
    }

const handleImage = (e) => {
// console.log(e.target.files.length)
if(e.target.files[0] && e.target.files.length > 0){
    // setSelectedImg()
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setSelectedImg(imgURL)
}
}

  return (
    <div className='h-screen flex items-center justify-center w-full'>
        <form onSubmit={handleForm}>
            <input type="text" className='p-2 border border-slate-300 outline-none focus:border-green-300 mb-3 block rounded-md min-w-[400px]' placeholder='Enter Name' />
            <label htmlFor="image" className='my-3 p-4'>
                <input type="file" onChange={handleImage} name="image" id="image" className='hidden' />
                <div className={`min-w-[400px] h-[200px] bg-gray-100 border-dashed ${selectedImg ? 'border-0' : 'border-2'} cursor-pointer border-black flex items-center justify-center rounded-sm`}>
                {
                    !selectedImg ? <LuUploadCloud className='' size={60} /> : <img src={selectedImg} className='w-full object-contain h-full rounded-lg' alt="image" />
                }
                </div>
            </label>
            <input type="submit" value="Submit" className='py-2 px-7 rounded-lg bg-blue-800 text-white mt-3 text-base font-medium hover:cursor-pointer' />
        </form>
    </div>
  )
}

export default Banner