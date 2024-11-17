import React, { useEffect, useState } from "react"
import { RestaurantCard } from "./RestaurantCards"
import { TopRatedRestaurantFilter } from "./TopRatedRestaurantFilter"
import { fillShimmerCards } from "../utils/utils"

export const BodyWrapper = () => {
  const [data, setData] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [title, setTitle] = useState("")

  const handleTopRatedRestaurants = () => {
    if (filteredRestaurants.length === data.length) {
      const topRatedRestaurant = filteredRestaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4.4
      )
      setFilteredRestaurants(topRatedRestaurant)
    } else {
      setFilteredRestaurants(data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // logic for calling swiggy API
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.77390&lng=76.64870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const restaurantsJson = await data.json()
    setData(
      restaurantsJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    )
    setFilteredRestaurants(
      restaurantsJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    )
    setTitle(restaurantsJson?.data?.cards[1]?.card?.card?.header?.title)
  }

  return filteredRestaurants.length === 0 ? (
    <div className='shimmer-container'>{fillShimmerCards()}</div>
  ) : (
    <div className='body'>
      <h1>{title}</h1>
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
