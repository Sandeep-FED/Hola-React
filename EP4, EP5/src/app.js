import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./components/Header"
import { BodyWrapper } from "./components/BodyWrapper"
import { Filters } from "./components/Filters"

const AppLayout = () => {
  const [data, setData] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [title, setTitle] = useState("")
  const [searchText, setSearchText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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

  const handleRestaurantSearch = (e) => {
    let searchTerm = e.target.value
    setSearchText(searchTerm)

    const newFilteredRestaurants = data.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredRestaurants(newFilteredRestaurants)
  }

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

  return (
    <div className='app'>
      <HeaderComponent />
      <Filters
        title={title}
        handleRestaurantSearch={handleRestaurantSearch}
        handleTopRatedRestaurants={handleTopRatedRestaurants}
        isRestaurantSame={filteredRestaurants.length !== data.length}
      />
      <BodyWrapper
        filteredRestaurants={filteredRestaurants}
        isLoading={isLoading}
      />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
