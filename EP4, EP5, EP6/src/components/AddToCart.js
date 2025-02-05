import React from "react"

export const AddToCart = () => {
  return (
    <div className='flex gap-2 bg-orange-100 rounded-lg absolute justify-center items-center -bottom-3 h-8 left-7'>
      <button className=' text-black px-4 py-1 rounded-md border-none'>
        -
      </button>
      <p className='text-base font-semibold'>0</p>
      <button className=' text-black px-4 py-1 rounded-md border-none'>
        +
      </button>
    </div>
  )
}
