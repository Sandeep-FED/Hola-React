import React from "react"
import { X } from "lucide-react"

export const Filters = (props) => {
  const {
    title,
    searchText,
    handleRestaurantSearch,
    handleTopRatedRestaurants,
    isRestaurantSame,
  } = props

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-semibold'>{title}</h1>
      <div className='w-full flex justify-between items-center mt-12'>
        <div className='flex gap-4'>
          <input
            type='search'
            placeholder='Search...'
            onChange={handleRestaurantSearch}
            value={searchText}
          />
        </div>
        <div className='ml-auto mr-3'>
          <div
            onClick={handleTopRatedRestaurants}
            className='bg-orange-300 border border-orange-500 rounded-3xl flex cursor-pointer items-center justify-center p-1 w-40 text-xs hover:shadow-[0px 10px 15px -3px rgba(0, 0, 0, 0.1)]'
          >
            Top rated restaurants {isRestaurantSame && <X size={12} />}
          </div>
        </div>
      </div>
    </div>
  )
}
