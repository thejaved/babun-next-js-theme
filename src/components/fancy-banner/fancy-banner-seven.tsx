import React from "react";
import Image from "next/image";
import shape from "@/assets/images/shape/shape_50.svg";

const FancyBannerSeven = () => {
  return (
    <div className="fancy-banner-seven box-layout pt-100 lg-pt-80">
      <div className="bg-wrapper border-40 position-relative z-1 overflow-hidden pt-130 lg-pt-80 pb-130 lg-pb-80">
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title-two mb-60">
                <div className="upper-title-two text-white mb-15">
                  Why choose us
                </div>
                <h2 className="text-white">Get Hassle Free Life & Enjoy</h2>
              </div>
              <a href="#" className="btn-twenty">
                Get insurance
              </a>
            </div>
            <div className="col-xl-5 col-md-6 ms-auto">
              <ul className="style-none sm-mt-60">
                <li>Get full coverage without paying full payment.</li>
                <li>Quick hasslefree processing</li>
                <li>Lowest interest rate with no extra hidden charge</li>
                <li>Cancel anytime zero fees!</li>
              </ul>
            </div>
          </div>
        </div>
        <Image src={shape} alt="" className="lazy-img shapes shape_01" />
      </div>
    </div>
  );
};

export default FancyBannerSeven;
