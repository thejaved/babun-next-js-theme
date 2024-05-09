'use client'
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
// internal
import prev_icon from "@/assets/images/icon/icon_103.svg";
import next_icon from "@/assets/images/icon/icon_102.svg";

const feedback_data = [
  {
    id:1,
    desc:'Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!',
    name:'Jonathan Harry',
    location:'Milan, Itlay',
  },
  {
    id:2,
    desc:'Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!',
    name:'Mark Smith',
    location:'United States',
  },
  {
    id:3,
    desc:'Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!',
    name:'John Smith',
    location:'South Africa',
  }
];

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
};

const FeedbackSeven = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <div className="feedback-section-seven mt-120 lg-mt-80">
    <div className="box-layout position-relative z-1">
      <div className="container">
        <div className="wrapper">
          <div className="title-two text-center mb-45 sm-mb-30">
            <div className="upper-title-two">TESTIMONIALS</div>
          </div>

          <Slider {...slider_setting} ref={sliderRef} className="feedback-slider-six">
            {feedback_data.map((item, i) => (
              <div key={item.id} className="item">
              <div className="feedback-block-seven">
                <div className="row">
                  <div className="col-lg-9 col-md-10 m-auto">
                    <blockquote>{item.desc}</blockquote>
                    <div className="mt-50 lg-mt-30">
                      <div className="name fw-500 text-dark">{item.name}</div>
                      <p className="fs-5 m0">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </Slider>

      
        </div>
      </div>
      <ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none">
        <li onClick={sliderPrev} className="prev_S tran3s slick-arrow d-flex align-items-center justify-content-center">
          <Image src={prev_icon} alt="" className="lazy-img"/>
        </li>
        <li onClick={sliderNext} className="next_S tran3s slick-arrow d-flex align-items-center justify-content-center">
          <Image src={next_icon} alt="" className="lazy-img"/>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default FeedbackSeven;