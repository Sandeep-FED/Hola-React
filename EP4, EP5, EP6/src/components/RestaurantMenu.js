import React, { useEffect, useState } from "react"
import { IMAGEURL, MENU_API } from "../constants/common"
import { IsVegOrNonVeg } from "../utils/utils"
import { IndianRupee, Star } from "lucide-react"

export const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null)

  useEffect(() => {
    fetchMenuInfo()
  }, [])

  const fetchMenuInfo = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.77390&lng=76.64870&restaurantId=336912"
    )
    const jsonData = await response.json()
    setMenuInfo(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card
    )
  }

  console.log("menus", menuInfo)

  return (
    <div className='restaurant-menu-body'>
      <h1>
        {menuInfo?.title} ({menuInfo?.itemCards?.length})
      </h1>
      <div className='recommendations-wrapper'>
        {menuInfo?.itemCards.map((item) => (
          <div className='menu-card' key={item?.card?.info?.id}>
            <div className='menu-card-content'>
              <div className='img-container'>
                <img
                  src={IMAGEURL + "/" + item?.card?.info.imageId}
                  className='menu-img'
                />
              </div>
              <div className='menu-info-container'>
                <div className='row'>
                  {IsVegOrNonVeg(item?.card?.info.isVeg)}
                  <p>{item?.card?.info?.name}</p>
                </div>
                <div className='row'>
                  <Star stroke='#eec901' fill='#f9d200' />
                  {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                </div>
                <div className='row'>
                  <IndianRupee size={14} />
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
                <div className='row'>{item?.card?.info?.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
