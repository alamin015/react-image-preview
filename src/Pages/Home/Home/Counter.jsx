import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <h2 className=''>
            <CountUp 
            className='text-blue-500 font-bold text-3xl my-4' 
            end={1000}
            start={300}
            delay={4}
            suffix='+'
             />
        </h2>
    </div>
  )
}

export default Counter