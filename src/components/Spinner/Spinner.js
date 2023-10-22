import React from 'react'

const Spinner = () => {
  return (
    <div className='relative'>
        <div className="w-16 h-16 border-t-4 border-secondary border-solid rounded-full animate-spin"></div>
        <p className='text-secondary text-md'>Loading..</p>
    </div>
  )
}

export default Spinner