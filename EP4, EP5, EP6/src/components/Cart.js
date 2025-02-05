import React from "react"
import { AccordionItemList } from "./AccordionItemList"
import { useSelector } from "react-redux"

export const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items)

  console.log("cardItems", cartItems)

  return cartItems.length === 0 ? (
    <div className='flex flex-col items-center justify-center gap-4'>
      <img
        src='https://cdn-icons-png.flaticon.com/512/11329/11329060.png'
        width={300}
      />
      <p className='text-gray-800 text-lg font-semibold'>Your cart is empty!</p>
      <p className='text-sm text-gray-600'>
        Looks like you have not added anything to you cart. Go ahead & explore.
      </p>
    </div>
  ) : (
    cartItems.map((item) => {
      return <AccordionItemList itemList={item} />
    })
  )
}
