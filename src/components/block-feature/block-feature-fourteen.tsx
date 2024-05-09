import React from "react";
import Image from "next/image";
import f_img_1 from "@/assets//images/icon/icon_98.svg";
import f_img_2 from "@/assets//images/icon/icon_99.svg";
import f_img_3 from "@/assets//images/icon/icon_100.svg";
import f_img_4 from "@/assets//images/icon/icon_101.svg";
import icon from "@/assets/images/icon/icon_09.svg";
import shape from "@/assets/images/shape/shape_05.svg";

const feature_data = [
  {
    id: 1,
    icon: f_img_1,
    title: "Health Insurance",
    desc: "Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.",
  },
  {
    id: 2,
    icon: f_img_2,
    title: "Family Insurance",
    desc: "Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.",
  },
  {
    id: 3,
    icon: f_img_3,
    title: "Travel Insurance",
    desc: "Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.",
  },
  {
    id: 4,
    icon: f_img_4,
    title: "Education Insurance",
    desc: "Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.",
  },
];

const BlockFeatureFourteen = () => {
  return (
    <div className="block-feature-fourteen box-layout pt-40">
      <div className="bg-wrapper light-bg-deep border-40 position-relative z-1 pt-120 lg-pt-80 pb-150 lg-pb-80">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="title-two text-center text-lg-start mb-30">
                  <div className="upper-title-two mb-10">Services</div>
                  <h2 className="text-dark">Our Featured Scheme</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gx-xl-5 mt-10">
              {feature_data.map((f, i) => (
                <div
                  key={f.id}
                  className="col-lg-6 d-flex wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-style-twenty d-flex position-relative z-1 tran3s w-100 mt-50 md-mt-30">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                      <Image src={f.icon} alt="icon" className="lazy-img" />
                    </div>
                    <div className="text">
                      <h4 className="fw-bold mb-25">{f.title}</h4>
                      <p className="mb-20 pe-xxl-5 me-xxl-5">
                        {f.desc}
                      </p>
                      <a
                        href="service-details.html"
                        className="arrow-btn tran3s mt-auto stretched-link"
                      >
                        <Image src={icon} alt="" className="lazy-img" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-subheading md-mt-40">
              <p className="text-lg mb-20 mt-30">
                Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis
                nostru{" "}
              </p>
              <a
                href="service-v1.html"
                className="btn-three border-style icon-link"
              >
                <span>See All Services</span>
                <Image src={icon} alt="" className="lazy-img icon ms-1"/>
              </a>
            </div>
          </div>
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
      </div>
    </div>
  );
};

export default BlockFeatureFourteen;
