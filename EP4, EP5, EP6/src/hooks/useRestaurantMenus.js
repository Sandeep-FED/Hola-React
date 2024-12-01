import { useState, useEffect } from "react"

export const useRestaurantMenus = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchMenuInfo()
  }, [])

  const fetchMenuInfo = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.77390&lng=76.64870&restaurantId=${resId}`
      )
      const jsonData = await response.json()
      setMenuInfo(
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card
      )
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return { menuInfo, isLoading }
}
