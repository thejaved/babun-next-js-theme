'use client'
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

// internal
import bg_1 from "@/assets/images/media/img_49.jpg";
import bg_2 from "@/assets/images/media/img_02.jpg";
import bg_3 from "@/assets/images/media/img_03.jpg";
import shape from '@/assets/images/shape/shape_48.svg';

// slider bg
const slider_bg = [bg_1, bg_2, bg_3];
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 7000,
};
const HeroBannerSeven = () => {
  return (
    <div className="hero-banner-seven position-relative">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
          </div>
        ))}
      </Slider>

      <div className="container position-relative">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <h1 className="hero-heading text-white d-inline-block position-relative wow fadeInUp">Insure life’s Journey
              <Image src={shape} alt="" className="lazy-img d-inline-block" />
            </h1>
            <p className="text-xl text-white pt-35 lg-pt-20 xs-pt-10 wow fadeInUp" data-wow-delay="0.1s">
              Unlock your {"business's"} growth potential with a marketing {"agency's"} expertise.
            </p>
          </div>
          <div className="col-lg-6 ms-auto">
            <div className="lead-form ms-xl-5 md-mt-30">
              <h3>Request Quote</h3>
              <form action="#">
                <label htmlFor="" className="d-block mt-20 mb-5">Email*</label>
                <input type="email" placeholder="Email Address Here..." className="d-block w-100" />
                <button className="color-deep text-uppercase fw-500 tran3s w-100 mt-20">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSeven;