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

const RestaurantCard = ({ data }) => {
  console.log(data)

  return data.map((restaurant) => (
    <div className='card'>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
        className='restaurant-image'
      />
      <div className='card-content'>
        <p className='restaurant-name'>
          {restaurant.name.length > 30
            ? restaurant.name.slice(0, 30) + "..."
            : restaurant.name}
        </p>
        <div className='misc-container'>
          <p className='avg-rating'>
            <Star size={14} />
            {restaurant.avgRating}
          </p>
          <p className='delivery-time'>
            <ClockArrowUp size={14} />
            {restaurant?.sla?.slaString}
          </p>
        </div>
        <div className='cuisine-container'>
          {restaurant.cuisines?.map((cuisine) => (
            <p className='cuisines'>{cuisine}</p>
          ))}
        </div>
      </div>
    </div>
  ))
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
        <RestaurantCard data={data} />
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
