import Card from "../../Ui/homepage/Card";
import Carousel from "../../Ui/Electronics/Carousel";
import {
  topBannerImg,
  topCarouselImg,
  seasonStyleImg,
  newTodayImg,
  discountBannerImg,
  fallWinterBannerImg,
  differentProductImg,
  luxeBanner,
  ajioCareBanner,
  electronicsBannerImages,
  jewelleryImg,
} from "../../Utils/Homepage/constant";

function Home() {
  return (
    <div>
      {/* top banner */}
      <div className="bg-[#1c1d1f]">
        <Card src={topBannerImg.src} alt={topBannerImg.alt} />
      </div>
      {/* top carousel */}
      <div>
        <Carousel images={topCarouselImg} />
      </div>

      {/* mens:season style section */}
      <div className="my-6">
        <h2 className="py-2 text-center text-3xl text-[#767968] font-bold">
          Season's It Styles
        </h2>
        <Carousel images={seasonStyleImg} />
      </div>

      {/* womens:new today, gone tommorrow section */}
      <div className="my-10">
        <h2 className="py-2 text-center text-3xl text-[#4a82bd] font-bold">
          New Today, Gone Tomorrow
        </h2>
        <Carousel images={newTodayImg} />
      </div>

      {/* jewlllery carousel */}
      <div className="my-10">
        <h2 className="py-2 text-center text-3xl text-[#bd804a] font-bold">
          New For You
        </h2>
        <Carousel images={jewelleryImg} />
      </div>

      {/* electronics */}
      <div className="my-10">
        <h2 className="py-2 text-center text-3xl text-[#7897df] font-bold">
          Trending Product
        </h2>
        <Carousel images={electronicsBannerImages} />
      </div>

      {/* discount banner carousel */}
      <div className="mt-8 py-6">
        <Carousel images={discountBannerImg} />
      </div>

      {/* fall winter banner */}
      <Card src={fallWinterBannerImg.src} alt={fallWinterBannerImg.alt} />

      {/* different product section */}
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {differentProductImg.map((img) => (
          <Card key={img.id} src={img.src} alt={img.alt} url={img.url} />
        ))}
      </div>

      {/* ajio luxe banner */}

      <Card src={luxeBanner.src} alt={luxeBanner.alt} />

      {/* ajio care banner */}
      <div className="pt-1">
        <Card src={ajioCareBanner.src} alt={ajioCareBanner.alt} />
      </div>
    </div>
  );
}

export default Home;
