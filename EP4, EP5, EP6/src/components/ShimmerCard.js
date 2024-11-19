import React from "react"

export const ShimmerCard = () => {
  return (
    <div className='shimmer-card'>
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
