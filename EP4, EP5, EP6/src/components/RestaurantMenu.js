import React from "react"

import { useParams } from "react-router-dom"
import { fillShimmerCards } from "../utils/utils"
import { useRestaurantMenus } from "../hooks/useRestaurantMenus"
import { CategoryAccordion } from "./CategoryAccordion"

export const RestaurantMenu = () => {
  const { resId } = useParams()

  const { menuInfo, isLoading } = useRestaurantMenus(resId)
  console.log(menuInfo)

  return isLoading ? (
    <div className='flex gap-4'>{fillShimmerCards("horizontal")}</div>
  ) : menuInfo?.itemCards?.length === 0 ? (
    <img
      src='https://i.ibb.co/3ShPLmg/not-found.png'
      className='block m-auto w-1/4'
    />
  ) : (
    <div className='mx-auto w-[750px] my-8'>
      <div className='grid gap-4 mt-6'>
        {menuInfo?.map((category) => (
          <CategoryAccordion item={category?.card?.card} />
        ))}
      </div>
    </div>
  )
}
export default RestaurantMenu