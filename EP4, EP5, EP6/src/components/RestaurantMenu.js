import React, { useEffect, useState } from "react"
import { IMAGEURL, MENU_API } from "../constants/common"
import { IsVegOrNonVeg } from "../utils/utils"
import { IndianRupee, Star } from "lucide-react"
import { truncateText } from "../utils/utils"
import { useParams } from "react-router-dom"
import { fillShimmerCards } from "../utils/utils"

export const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { resId } = useParams()

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

  return isLoading ? (
    <div className='shimmer-container menu-shimmer'>
      {fillShimmerCards("horizontal")}
    </div>
  ) : menuInfo?.itemCards.length === 0 ? (
    <img
      src='https://i.ibb.co/3ShPLmg/not-found.png'
      className='no-data-found'
    />
  ) : (
    <div className='restaurant-menu-body'>
      <h1>
        {menuInfo?.title}{" "}
        {menuInfo?.itemCards?.length !== 0 && (
          <>({menuInfo?.itemCards?.length})</>
        )}
      </h1>
      <div className='recommendations-wrapper'>
        {menuInfo?.itemCards?.map((item) => (
          <div className='menu-card' key={item?.card?.info?.id}>
            <div className='menu-card-content'>
              <div className='img-container'>
                <img
                  src={
                    item?.card?.info?.imageId
                      ? IMAGEURL + "/" + item?.card?.info?.imageId
                      : "https://play-lh.googleusercontent.com/JA0qswBq-iSo5HbTZyyqAEYEdQ-9JjmkNqxyCqAndO8JzHwKnRSzcGrKdhrshDxw4w"
                  }
                  className='menu-img'
                />
              </div>
              <div className='menu-info-container'>
                <div className='row'>
                  {IsVegOrNonVeg(item?.card?.info.isVeg)}
                  <p>{item?.card?.info?.name}</p>
                </div>
                <div className='row rating'>
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
                <div className='price-row price'>
                  <IndianRupee size={14} strokeWidth={3} />
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
                <div className='row menu-description'>
                  {truncateText(item?.card?.info?.description, 200)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
