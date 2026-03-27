import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%]  overflow-x-auto flex justify-start items-center flex-nowrap gap-5 w-full mt-10 py-5 text-white'>
        <div className=' shrink-0 bg-blue-400 h-full w-75 rounded-xl p-5'>
          <div className='flex justify-between items-center '>
          <h3 className='bg-red-400 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2026</h4></div>
          <h1 className='text-2xl font-semibold mt-2'>Make a youtube video</h1> 
          <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime deleniti dolorem expedita rerum accusantium!</p>         
        </div>
    </div>
  )
}

export default TaskList