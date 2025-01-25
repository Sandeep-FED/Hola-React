import React from "react"
import { IMAGEURL } from "../constants/common"
import { Star, ClockArrowUp } from "lucide-react"

export const RestaurantCard = (props) => {
  const { restaurantName, avgRating, restaurantImage, cuisines, deliveryTime } =
    props

  const imgUrl = `${IMAGEURL}/${restaurantImage}`
  return (
    <div className='w-[312px] h-full min-h-[280px] bg-stone-100 border border-slate-300 rounded-lg hover:border-slate-400 hover:shadow-slate-400 hover:shadow-[0px 10px 15px -3px rgba(0, 0, 0, 0.1)]'>
      <img
        src={imgUrl}
        loading='lazy'
        className='w-full h-[140px] p-3 rounded-2xl object-cover font-semibold'
      />
      <div className='p-3 flex flex-col gap-3'>
        <p className='font-semibold'>
          {restaurantName.length > 30
            ? restaurantName.slice(0, 30) + "..."
            : restaurantName}
        </p>
        <div className='flex gap-4'>
          <p className='flex gap-2 items-center text-sm'>
            <Star size={14} />
            {avgRating}
          </p>
          <p className='flex gap-2 items-center text-sm'>
            <ClockArrowUp size={14} />
            {deliveryTime}mins
          </p>
        </div>
        <div className='flex gap-2 flex-wrap'>
          {cuisines?.map((cuisine) => (
            <p className='text-xs bg-white rounded-full px-2' key={cuisine}>
              {cuisine}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
