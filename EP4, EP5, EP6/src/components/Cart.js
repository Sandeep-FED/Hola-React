import React from "react"
import { ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"

export const CartComponent = () => {
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className='relative'>
      <ShoppingCart size={16} className='w-5 h-5 ml-16 mr-8' />
      <span className='px-2 bg-orange-100 rounded-full absolute text-sm right-4 -top-4'>
        {cartItems.length}
      </span>
    </div>
  )
}
