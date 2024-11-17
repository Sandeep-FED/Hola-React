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
    <div className='filter-container'>
      <h1>{title}</h1>
      <div className='filters'>
        <div className='search-box'>
          <input
            type='search'
            placeholder='Search...'
            onChange={handleRestaurantSearch}
            value={searchText}
          />
        </div>
        <div className='filter-chips'>
          <div onClick={handleTopRatedRestaurants} className='top-rated-chip'>
            Top rated restaurants {isRestaurantSame && <X size={12} />}
          </div>
        </div>
      </div>
    </div>
  )
}
