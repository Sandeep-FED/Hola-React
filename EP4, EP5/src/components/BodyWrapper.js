import React from "react"
import { RestaurantCard } from "./RestaurantCards"
import { fillShimmerCards } from "../utils/utils"

export const BodyWrapper = (props) => {
  const { filteredRestaurants, isLoading } = props

  return isLoading ? (
    <div className='shimmer-container'>{fillShimmerCards()}</div>
  ) : filteredRestaurants.length === 0 ? (
    <img
      src='https://i.ibb.co/3ShPLmg/not-found.png'
      className='no-data-found'
    />
  ) : (
    <div className='body'>
      <div className='restaurant-container'>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantName={restaurant.info.name}
            avgRating={restaurant.info.avgRating}
            restaurantImage={restaurant.info.cloudinaryImageId}
            cuisines={restaurant.info.cuisines}
            deliveryTime={restaurant.info.sla.deliveryTime}
          />
        ))}
      </div>
    </div>
  )
}
