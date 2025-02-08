import React from "react"

import { useParams } from "react-router-dom"
import { fillShimmerCards } from "../utils/utils"
import { useRestaurantMenus } from "../hooks/useRestaurantMenus"
import { RestaurantMenuCategory } from "./RestaurantMenuCategory"

export const RestaurantMenu = () => {
  const { resId } = useParams()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const { menuInfo, isLoading } = useRestaurantMenus(resId)
  console.log(menuInfo)

  return isLoading ? (
    <div className='block m-auto w-[750px]'>{fillShimmerCards("vertical")}</div>
  ) : menuInfo?.itemCards?.length === 0 ? (
    <img
      src='https://i.ibb.co/3ShPLmg/not-found.png'
      className='block m-auto w-1/4'
    />
  ) : (
    <div className='mx-auto w-[750px] my-8'>
      <div className='grid gap-4 mt-6'>
        {menuInfo?.map((category, index) => (
          <RestaurantMenuCategory
            item={category?.card?.card}
            key={category?.card?.card?.title}
            showRestaurantMenuItems={index === selectedIndex ? true : false}
            handleSelectedIndex={() => {
              setSelectedIndex(index === selectedIndex ? null : index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default RestaurantMenu