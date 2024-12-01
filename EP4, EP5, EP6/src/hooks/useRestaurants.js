import React, { useEffect, useState } from "react"

export const useRestaurants = () => {
  const [data, setData] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  // logic for calling swiggy API
  const fetchData = async () => {
    try {
      setIsLoading(true)
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
      setIsLoading(false)
    } catch (error) {
      console.error("error message", error)
    }
  }

  return { data, title, filteredRestaurants, isLoading }
}
