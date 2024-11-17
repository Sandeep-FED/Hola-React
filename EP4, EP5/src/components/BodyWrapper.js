import React, { useState } from "react"
import { data } from "../api/mockData"
import { RestaurantCard } from "./RestaurantCards"
import { TopRatedRestaurantFilter } from "./TopRatedRestaurantFilter"

export const BodyWrapper = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(data)

  const handleTopRatedRestaurants = () => {
    if (filteredRestaurants.length === data.length) {
      const topRatedRestaurant = filteredRestaurants.filter(
        (restaurant) => restaurant.avgRating > 4.4
      )
      setFilteredRestaurants(topRatedRestaurant)
    } else {
      setFilteredRestaurants(data)
    }
  }

  return (
    <div className='body'>
      <div className='filters'>
        <div className='search-box'>
          <input type='search' placeholder='Search...' />
        </div>
        <div className='filter-chips'>
          <TopRatedRestaurantFilter
            handleTopRatedRestaurants={handleTopRatedRestaurants}
            isRestaurantSame={filteredRestaurants.length !== data.length}
          />
        </div>
      </div>
      <div className='restaurant-container'>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurantName={restaurant.name}
            avgRating={restaurant.avgRating}
            restaurantImage={restaurant.cloudinaryImageId}
            cuisines={restaurant.cuisines}
            deliveryTime={restaurant.sla.deliveryTime}
          />
        ))}
      </div>
    </div>
  )
}
