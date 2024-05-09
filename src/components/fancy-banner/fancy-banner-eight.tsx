import React from 'react';
import Image from 'next/image';
import shape_1 from '@/assets/images/shape/shape_51.svg';
import business_man from '@/assets/images/assets/businessman_03.png';
import shape_2 from '@/assets/images/shape/shape_52.png';

const FancyBannerEight = () => {
  return (
    <div className="fancy-banner-eight wow fadeInUp mb-60 lg-mb-40">
    <div className="container">
      <div className="bg-wrapper border-40 overflow-hidden position-relative z-1">
        <div className="row align-items-end">
          <div className="col-lg-7 col-md-7">
            <div className="pb-80 lg-pb-40">
              <div className="title-one mb-30 lg-mb-10">
                <h2 className="text-dark">Start your Journey with Babun</h2>
              </div>
              <div className="position-relative d-inline-block mt-15">
                <a href="contact.html" className="btn-twenty">Contact us</a>
                <Image src={shape_1} alt="" className="lazy-img shapes shape_02 wow fadeInRight"/>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center text-md-end">
            <div className="media-wrapper position-relative z-1 d-inline-block">
              <Image src={business_man} alt="" className="lazy-img" style={{height: 'auto'}}/>
              <Image src={shape_2} alt="" className="lazy-img shapes shape_01"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default FancyBannerEight;