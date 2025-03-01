import React from "react";
import TopBanner from "../../Components/Electronics/TopBanner";
import BrandExclusive from "../../Components/Electronics/BrandExclusive";
import SecBanner from "../../Components/Electronics/SecBanner";
import Explore from "../../Components/Electronics/Explore";

function Electronics() {
  return (
    <>
      <div>
        <TopBanner />
        <BrandExclusive />
        <SecBanner />
        <Explore />
      </div>
    </>
  );
}

export default Electronics;
