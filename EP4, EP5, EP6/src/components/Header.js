import React from "react"
import { UserProfile } from "./UserProfile"
import { LOGOURL } from "../constants/common"
import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"

// Includes component composition
export const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cart.items)

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
        <ul>
          <Link to='/cart'>
            <div className='relative'>
              <ShoppingCart size={16} className='w-5 h-5 ml-16 mr-8' />
              <span className='px-2 bg-orange-100 rounded-full absolute text-sm right-4 -top-4'>
                {cartItems.length}
              </span>
            </div>
          </Link>
        </ul>
      </div>
      <UserProfile />
      <div className='absolute w-11/12 h-[1px] bg-gray-200 bottom-3 left-8'></div>
    </div>
  )
}
