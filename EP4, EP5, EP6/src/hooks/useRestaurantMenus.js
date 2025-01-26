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

      // filter our item category
      const filteredItemCategories =
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
          (item) => {
            return (
              item?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
          }
        )

      setMenuInfo(filteredItemCategories)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return { menuInfo, isLoading }
}
