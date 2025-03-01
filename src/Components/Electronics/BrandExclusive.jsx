import { hotDealsImages } from "../../Utils/Electronics/constants"
import Card from "../../Ui/Electronics/Card"

function BrandExclusive() {
  return (
    <div className="p-2 mt-8">
      <h1 className="text-3xl font-bold p-2 text-center">Hot Deals</h1>
      <div className="py-3 grid grid-cols-4 gap-4">
        {
          hotDealsImages.map(item =>
            <Card key={item.id} src={item.src} alt={item.alt} />
          )
        }
      </div>
    </div>
  )
}

export default BrandExclusive
