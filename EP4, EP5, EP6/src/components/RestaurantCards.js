import React from "react"
import { IMAGEURL } from "../constants/common"
import { Star, ClockArrowUp } from "lucide-react"

export const RestaurantCard = (props) => {
  const { restaurantName, avgRating, restaurantImage, cuisines, deliveryTime } =
    props

  const imgUrl = `${IMAGEURL}/${restaurantImage}`
  return (
    <div className='card'>
      <img src={imgUrl} className='restaurant-image' />
      <div className='card-content'>
        <p className='restaurant-name'>
          {restaurantName.length > 30
            ? restaurantName.slice(0, 30) + "..."
            : restaurantName}
        </p>
        <div className='misc-container'>
          <p className='avg-rating'>
            <Star size={14} />
            {avgRating}
          </p>
          <p className='delivery-time'>
            <ClockArrowUp size={14} />
            {deliveryTime}mins
          </p>
        </div>
        <div className='cuisine-container'>
          {cuisines?.map((cuisine) => (
            <p className='cuisines' key={cuisine}>
              {cuisine}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
