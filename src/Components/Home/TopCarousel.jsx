import Carousel from '../../Ui/Electronics/Carousel'
import { topCarouselImg } from '../../Utils/Homepage/constant'


function TopCarousel() {
  return (
    <div>
      {
        topCarouselImg.map(
          img => <Carousel images={topCarouselImg} />
        )
      }
    </div>
  )
}

export default TopCarousel
