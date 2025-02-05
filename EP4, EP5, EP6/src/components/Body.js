import React, { useContext, useState } from "react"
import { BodyWrapper } from "./BodyWrapper"
import { Filters } from "./Filters"
import { useRestaurants } from "../hooks/useRestaurants"
import { UserContext } from "../utils/UserContext"

export const Body = () => {
  const [searchText, setSearchText] = useState("")
  const {
    data,
    title,
    filteredRestaurants,
    isLoading,
    setFilteredRestaurants,
  } = useRestaurants()

  const handleRestaurantSearch = (e) => {
    let searchTerm = e.target.value
    setSearchText(searchTerm)

    const newFilteredRestaurants = data.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredRestaurants(newFilteredRestaurants)
  }

  const handleTopRatedRestaurants = () => {
    if (filteredRestaurants?.length === data?.length) {
      const topRatedRestaurant = filteredRestaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4.4
      )
      setFilteredRestaurants(topRatedRestaurant)
    } else {
      setFilteredRestaurants(data)
    }
  }

  const { userName, setUserName } = useContext(UserContext)

  return (
    <>
      <p>{userName}</p>
      <button onClick={() => setUserName("Jane Doe")}>Change User</button>
      <Filters
        title={title}
        searchText={searchText}
        handleRestaurantSearch={handleRestaurantSearch}
        handleTopRatedRestaurants={handleTopRatedRestaurants}
        isRestaurantSame={filteredRestaurants.length !== data.length}
      />
      <BodyWrapper
        filteredRestaurants={filteredRestaurants}
        isLoading={isLoading}
      />
    </>
  )
}
