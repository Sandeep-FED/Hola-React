import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../utils/cartSlice"

export const AddToCart = ({ item }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.items)
  const [itemCount, setItemCount] = useState(0)

  const handleAddToCart = () => {
    dispatch(addToCart(item))
  }

  const handleRemoveFromCart = () => {
    console.log("Remove from cart")
    dispatch(removeFromCart())
  }

  useEffect(() => {
    const cartItemCount =
      cartItems &&
      cartItems.filter(
        (cartItem) => cartItem.card.info.id === item?.card?.info.id
      ).length

    setItemCount(cartItemCount)
  }, [cartItems, item])

  return (
    <div className='flex gap-2 bg-gray-100 rounded-lg absolute justify-center items-center -bottom-3 h-8 left-7'>
      <button
        className=' text-black px-4 py-1 rounded-md border-none hover:shadow-sm hover:bg-gray-200'
        onClick={handleRemoveFromCart}
      >
        -
      </button>
      <p className='text-base font-semibold'>{itemCount}</p>
      <button
        className=' text-black px-4 py-1 rounded-md border-none hover:shadow-sm hover:bg-gray-200'
        onClick={() => handleAddToCart(item)}
      >
        +
      </button>
    </div>
  )
}
