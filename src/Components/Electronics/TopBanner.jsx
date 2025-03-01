import { topBannerImages } from '../../Utils/Electronics/constants'
import Carousel from '../../Ui/Electronics/Carousel'


function TopBanner() {
  return (
    <div>
      <Carousel images={topBannerImages}/>
    </div>
  )
}

export default TopBanner
