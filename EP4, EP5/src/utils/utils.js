import { ShimmerCard } from "../components/ShimmerCard"
import { SHIMMER_COUNT } from "../constants/common"

export const fillShimmerCards = () => {
  return Array(SHIMMER_COUNT)
    .fill("")
    .map((e, index) => <ShimmerCard key={index} />)
}
