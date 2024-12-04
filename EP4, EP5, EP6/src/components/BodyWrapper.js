import React from "react"
import { RestaurantCard } from "./RestaurantCards"
import { fillShimmerCards } from "../utils/utils"
import { Link } from "react-router-dom"

export const BodyWrapper = (props) => {
  const { filteredRestaurants, isLoading } = props

  return isLoading ? (
    <div className='flex gap-4'>{fillShimmerCards()}</div>
  ) : filteredRestaurants.length === 0 ? (
    <img
      src='https://i.ibb.co/3ShPLmg/not-found.png'
      className='no-data-found'
    />
  ) : (
    <div className='my-8'>
      <div className='w-full my-8 flex gap-4 flex-wrap'>
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard
              restaurantName={restaurant.info.name}
              avgRating={restaurant.info.avgRating}
              restaurantImage={restaurant.info.cloudinaryImageId}
              cuisines={restaurant.info.cuisines}
              deliveryTime={restaurant.info.sla.deliveryTime}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
