import React from "react"
import { CartComponent } from "./Cart"
import { UserProfile } from "./UserProfile"
import { LOGOURL } from "../constants/common"
import { Link } from "react-router-dom"

// Includes component composition
export const HeaderComponent = () => {
  return (
    <div className='header'>
      <img className='logo' src={LOGOURL} width={100} height={95} />
      <div className='menus'>
        <ul><Link to="/">Home</Link></ul>
        <ul>Foods</ul>
        <ul>Restaurants</ul>
        <ul>
          <Link to="/help">Help</Link>
        </ul>
      </div>
      <CartComponent />
      <UserProfile />
      <div className='roadLine'></div>
    </div>
  )
}
