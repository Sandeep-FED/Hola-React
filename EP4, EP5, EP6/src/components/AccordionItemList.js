import React from "react"
import { IsVegOrNonVeg } from "../utils/utils"
import { IMAGEURL } from "../constants/common"
import { IndianRupee, Star } from "lucide-react"
import { truncateText } from "../utils/utils"

export const AccordionItemList = ({ itemList }) => {
  return (
    <>
      <div
        className='w-full border border-gray-400 rounded-md  hover:shadow-lg overflow-hidden'
        key={itemList?.card?.info?.id}
      >
        <div className='flex gap-4 p-3 '>
          <img
            loading='lazy'
            src={
              itemList?.card?.info?.imageId
                ? IMAGEURL + "/" + itemList?.card?.info?.imageId
                : "https://play-lh.googleusercontent.com/JA0qswBq-iSo5HbTZyyqAEYEdQ-9JjmkNqxyCqAndO8JzHwKnRSzcGrKdhrshDxw4w"
            }
            className='rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'
            width={200}
            height={400}
          />

          <div className='flex flex-col gap-4 px-3'>
            <div className='flex gap-2 items-center h-min'>
              {IsVegOrNonVeg(itemList?.card?.info?.isVeg)}
              <p>{itemList?.card?.info?.name}</p>
            </div>
            <div className='flex gap-2 items-center h-min text-sm'>
              {itemList?.card?.info?.ratings?.aggregatedRating?.rating ? (
                <>
                  <Star stroke='#eec901' fill='#f9d200' size={16} />
                  {itemList?.card?.info?.ratings?.aggregatedRating?.rating} (
                  {itemList?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                  )
                </>
              ) : (
                <p>No ratings</p>
              )}
            </div>
            <div className='flex items-center gap-[2px] font-semibold text-sm'>
              <IndianRupee size={14} strokeWidth={3} />
              {itemList?.card?.info?.price / 100 ||
                itemList?.card?.info?.defaultPrice / 100}
            </div>
            <div>{truncateText(itemList?.card?.info?.description, 200)}</div>
          </div>
        </div>
      </div>
    </>
  )
}
