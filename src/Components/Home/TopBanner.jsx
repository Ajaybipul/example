import Card from '../../Ui/Electronics/Card'
import { topBannerImg } from '../../Utils/Homepage/constant'

function TopBanner() {
  return (
    <div>
      <Card src={topBannerImg.src} alt={topBannerImg.alt} />
    </div>
  )
}

export default TopBanner
