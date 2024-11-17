import React from "react"
import { X } from "lucide-react"

export const TopRatedRestaurantFilter = (props) => {
  const { handleTopRatedRestaurants, isRestaurantSame } = props

  return (
    <div onClick={handleTopRatedRestaurants} className='top-rated-chip'>
      Top rated restaurants {isRestaurantSame && <X size={12} />}
    </div>
  )
}
