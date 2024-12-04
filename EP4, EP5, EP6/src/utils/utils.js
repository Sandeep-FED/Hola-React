import { Vegan } from "lucide-react"
import { ShimmerCard } from "../components/ShimmerCard"
import { SHIMMER_COUNT } from "../constants/common"
import { Vegan, Egg } from "lucide-react"

export const fillShimmerCards = (type) => {
  return Array(SHIMMER_COUNT)
    .fill("")
    .map((e, index) => <ShimmerCard key={index} type={type} />)
}

export const IsVegOrNonVeg = (isVeg) => {
  return isVeg === 1 ? (
    <div className='veg-container'>
      <Vegan size={20} className='vegornon-icon' />
    </div>
  ) : (
    <div className='non-veg-container'>
      <Egg size={20} className='vegornon-icon' />
    </div>
  )
}

export const truncateText = (text, limit) => {
  return text?.length > limit ? text.slice(0, limit) + "..." : text
}
