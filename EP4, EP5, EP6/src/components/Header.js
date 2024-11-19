import React from "react"
import { CartComponent } from "./Cart"
import { UserProfile } from "./UserProfile"
import { LOGOURL } from "../constants/common"

// Includes component composition
export const HeaderComponent = () => {
  return (
    <div className='header'>
      <img className='logo' src={LOGOURL} width={100} height={95} />
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
