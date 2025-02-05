import React from "react"
import { AccordionItemList } from "./AccordionItemList"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import { ShoppingCart, X } from "lucide-react"

export const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

  console.log("cardItems", cartItems)

  return (
    <>
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center gap-4'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/11329/11329060.png'
            width={300}
          />
          <p className='text-gray-800 text-lg font-semibold'>
            Your cart is empty!
          </p>
          <p className='text-sm text-gray-600'>
            Looks like you have not added anything to you cart. Go ahead &
            explore.
          </p>
        </div>
      ) : (
        <div className='mx-auto w-[750px] my-8'>
          <h1 className='text-2xl font-semibold text-gray-800 flex items-center gap-2'>
            <ShoppingCart />
            Cart Items
          </h1>
          <p
            className='text-gray-400 ml-auto font-semibold hover:underline hover:text-gray-500 cursor-pointer w-fit flex gap-2 items-center'
            onClick={() => dispatch(clearCart())}
          >
            <X className='bg-gray-300 text-gray-800 rounded-lg ' size={20} />
            Clear all
          </p>
          {cartItems.map((item) => (
            <AccordionItemList itemList={item} />
          ))}
        </div>
      )}
    </>
  )
}