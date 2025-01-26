import React from "react"
import { ChevronDown } from "lucide-react"
import { AccordionItemList } from "./AccordionItemList"

export const CategoryAccordion = ({ item }) => {
  const [showRestaurantMenuItems, setShowRestaurantMenuItems] =
    React.useState(true)

  const handleAccordionToggle = () => {
    setShowRestaurantMenuItems(!showRestaurantMenuItems)
  }

  return (
    <div className='flex flex-col gap-4'>
      {/* Header with accordion */}
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={handleAccordionToggle}
      >
        <h1 className='text-xl font-semibold text-slate-600'>
          {item?.title}{" "}
          {item?.itemCards?.length !== 0 && <>({item?.itemCards?.length})</>}
        </h1>
        <ChevronDown size={28} className='text-slate-600' />
      </div>

      {/* Accordion Body */}
      {showRestaurantMenuItems &&
        item?.itemCards?.map((item) => <AccordionItemList itemList={item} />)}
    </div>
  )
}
