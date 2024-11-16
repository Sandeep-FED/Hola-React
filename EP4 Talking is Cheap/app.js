import React from "react"
import ReactDOM from "react-dom/client"
import {
  SlidersHorizontal,
  ShoppingCart,
  User,
  Star,
  ClockArrowUp,
} from "lucide-react"
import { data } from "./mockData"
import { IMAGEURL } from "./constants"

const UserProfile = () => {
  return (
    <div className='user-profile-container'>
      <User size={16} className='avatar-icon' />
    </div>
  )
}

const CartComponent = () => {
  return (
    <>
      <ShoppingCart size={16} className='cart-icon' />
    </>
  )
}

// Includes component composition
const HeaderComponent = () => {
  return (
    <div className='header'>
      <img
        className='logo'
        src='https://play-lh.googleusercontent.com/NgS9RyVy-xRXFso-fK7ouqkpBwusIJ6VKuBsT6dMc9g8dsp4AJPlJKDk1SlKOZkQmO0'
        width={100}
        height={95}
      />
      <div className='menus'>
        <ul>Home</ul>
        <ul>Foods</ul>
        <ul>Restaurants</ul>
        <ul>Help</ul>
      </div>
      <CartComponent />
      <UserProfile />
      <div className='roadLine'></div>
    </div>
  )
}

const RestaurantCard = (props) => {
  console.log(props)

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
            {deliveryTime}
          </p>
        </div>
        <div className='cuisine-container'>
          {cuisines?.map((cuisine) => (
            <p className='cuisines'>{cuisine}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

const BodyWrapper = () => {
  return (
    <div className='body'>
      <div className='filters'>
        <div className='search-box'>
          <input type='search' placeholder='Search...' />
        </div>
        <button>
          filters <SlidersHorizontal size={14} className='btn-icon' />
        </button>
      </div>
      <div className='restaurant-container'>
        {data.map((restaurant) => (
          <RestaurantCard
            restaurantName={restaurant.name}
            avgRating={restaurant.avgRating}
            restaurantImage={restaurant.cloudinaryImageId}
            cuisines={restaurant.cuisines}
            deliveryTime={restaurant.sla.deliveryTime}
          />
        ))}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <BodyWrapper />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
