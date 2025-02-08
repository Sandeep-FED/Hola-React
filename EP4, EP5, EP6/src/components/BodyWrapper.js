import React from "react"
import { RestaurantCard } from "./RestaurantCards"
import { fillShimmerCards } from "../utils/utils"
import { Link } from "react-router-dom"

export const BodyWrapper = (props) => {
  const { filteredRestaurants, isLoading } = props


  return isLoading ? (
    <div className='flex gap-4 flex-wrap'>{fillShimmerCards("horizontal")}</div>
  ) : filteredRestaurants.length === 0 ? (
    <div className='flex flex-col items-center'>
      <img
        src='https://i.ibb.co/3ShPLmg/not-found.png'
        className='ml-auto mr-auto'
        width={400}
      />
      <p className='text-2xl mt-4 text-zinc-500'>
        Oops! No restaurants found :(
      </p>
    </div>
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
