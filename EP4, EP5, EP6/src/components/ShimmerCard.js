import React from "react"

export const ShimmerCard = (props) => {
  console.log(props.type)
  const { type } = props
  return type === "horizontal" ? (
    <div className='w-[312px] h-full min-h-[280px] bg-gray-200 rounded-lg'>
      <div className='flex'>
        <div className='rounded-lg m-4 w-44 bg-slate-200 h-[150px]'></div>
        <div className='rounded-lg m-4 w-full bg-gray-200 h-[150px]'></div>
      </div>
    </div>
  ) : (
    <div className='w-full h-[280px] bg-slate-200 rounded-lg mb-4'>
      <div className='card-content'>
        <div className='shimmer-restaurant-image' />
        <div className='shimmer-card-content'>
          <p className='shimmer-restaurant-name'></p>
          <div className='shimmer-misc-container'>
            <p className='shimmer-avg-rating'></p>
            <p className='shimmer-delivery-time'></p>
          </div>
          <div className='shimmer-cuisine-container'>
            <p className='shimmer-cuisines'></p>
            <p className='shimmer-cuisines'></p>
            <p className='shimmer-cuisines'></p>
          </div>
        </div>
      </div>
    </div>
  )
}
