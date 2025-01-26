import React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AccordionItemList } from "./AccordionItemList"

export const RestaurantMenuCategory = ({
  item,
  showRestaurantMenuItems,
  handleSelectedIndex,
}) => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Header with accordion */}
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={handleSelectedIndex}
      >
        <h1 className='text-xl font-semibold text-slate-600'>
          {item?.title}{" "}
          {item?.itemCards?.length !== 0 && <>({item?.itemCards?.length})</>}
        </h1>
        {!showRestaurantMenuItems ? (
          <ChevronDown size={28} className='text-slate-600' />
        ) : (
          <ChevronUp size={28} className='text-slate-600' />
        )}
      </div>

      {/* Accordion Body */}
      {showRestaurantMenuItems &&
        item?.itemCards?.map((item, index) => (
          <AccordionItemList itemList={item} key={index} />
        ))}
    </div>
  )
}
