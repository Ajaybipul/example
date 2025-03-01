import Card from '../../Ui/Electronics/Card'
import { ExploreImages } from '../../Utils/Electronics/constants'

function Explore() {
  return (
    <div className="p-4 mt-6">
      <h1 className="text-3xl font-bold py-4 text-center">Explore Trending Product</h1>
      <div className="grid grid-cols-3 gap-4">
        {
          ExploreImages.map(item =>
            <Card key={item.id} src={item.src} alt={item.alt} />
          )
        }
      </div>
    </div>
  )
}

export default Explore
