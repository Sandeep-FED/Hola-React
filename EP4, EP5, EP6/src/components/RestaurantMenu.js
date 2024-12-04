import React from "react"
import { IMAGEURL } from "../constants/common"
import { IsVegOrNonVeg } from "../utils/utils"
import { IndianRupee, Star } from "lucide-react"
import { truncateText } from "../utils/utils"
import { useParams } from "react-router-dom"
import { fillShimmerCards } from "../utils/utils"
import { useRestaurantMenus } from "../hooks/useRestaurantMenus"

export const RestaurantMenu = () => {
  const { resId } = useParams()

  const { menuInfo, isLoading } = useRestaurantMenus(resId)

  return isLoading ? (
    <div className='flex gap-4'>{fillShimmerCards("horizontal")}</div>
  ) : menuInfo?.itemCards?.length === 0 ? (
    <img
      src='https://i.ibb.co/3ShPLmg/not-found.png'
      className='block ml-auto mr-auto w-1/4'
    />
  ) : (
    <div className='mx-auto w-[750px] my-8'>
      <h1 className='text-2xl font-semibold'>
        {menuInfo?.title}{" "}
        {menuInfo?.itemCards?.length !== 0 && (
          <>({menuInfo?.itemCards?.length})</>
        )}
      </h1>
      <div className='grid gap-4 mt-6'>
        {menuInfo?.itemCards?.map((item) => (
          <div
            className='w-full border border-gray-400 rounded-md  hover:shadow-lg overflow-hidden'
            key={item?.card?.info?.id}
          >
            <div className='flex gap-4 p-3 '>
              <img
                src={
                  item?.card?.info?.imageId
                    ? IMAGEURL + "/" + item?.card?.info?.imageId
                    : "https://play-lh.googleusercontent.com/JA0qswBq-iSo5HbTZyyqAEYEdQ-9JjmkNqxyCqAndO8JzHwKnRSzcGrKdhrshDxw4w"
                }
                className='rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'
                width={200}
                height={400}
              />

              <div className='flex flex-col gap-4 px-3'>
                <div className='flex gap-2 items-center h-min'>
                  {IsVegOrNonVeg(item?.card?.info.isVeg)}
                  <p>{item?.card?.info?.name}</p>
                </div>
                <div className='flex gap-2 items-center h-min text-sm'>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                    <>
                      <Star stroke='#eec901' fill='#f9d200' size={16} />
                      {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                      {item?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                      )
                    </>
                  ) : (
                    <p>No ratings</p>
                  )}
                </div>
                <div className='flex items-center gap-[2px] font-semibold text-sm'>
                  <IndianRupee size={14} strokeWidth={3} />
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
                <div>{truncateText(item?.card?.info?.description, 200)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RestaurantMenu