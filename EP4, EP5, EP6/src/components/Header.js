import React from "react"
import { CartComponent } from "./Cart"
import { UserProfile } from "./UserProfile"
import { LOGOURL } from "../constants/common"
import { Link } from "react-router-dom"

// Includes component composition
export const HeaderComponent = () => {
  return (
    <div className='w-full flex justify-center items-center relative'>
      <img className='logo' src={LOGOURL} width={100} height={95} />
      <div className='flex gap-5 ml-auto'>
        <ul>
          <Link to='/'>Home</Link>
        </ul>
        <ul>Foods</ul>
        <ul>Restaurants</ul>
        <ul>
          <Link to='/help'>Help</Link>
        </ul>
        <ul>
          <Link to='/about'>About</Link>
        </ul>
      </div>
      <CartComponent />
      <UserProfile />
      <div className='absolute w-11/12 h-[1px] bg-gray-200 bottom-3 left-8'></div>
    </div>
  )
}
