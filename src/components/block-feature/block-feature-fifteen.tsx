import React from "react";
import Image from "next/image";
import Link from "next/link";
import shape from "@/assets/images/shape/shape_05.svg";
import f_img_1 from "@/assets/images/assets/ils_08.svg";
import f_img_2 from "@/assets/images/assets/ils_09.svg";
import f_img_3 from "@/assets/images/assets/ils_10.svg";

const feature_data = [
  {
    id: 1,
    img: f_img_1,
    desc: "It’s very easy to open an account and start your journey in a second.",
  },
  {
    id: 2,
    img: f_img_2,
    desc: "Complete your profile with all the info to get attention of client.",
  },
  {
    id: 3,
    img: f_img_3,
    desc: "Apply & get your preferable jobs with all the requirements and get it.",
  },
];

const BlockFeatureFifteen = () => {
  return (
    <div className="block-feature-fifteen mt-90">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-two text-center mb-30 sm-mb-10">
                <div className="upper-title-two mb-10">PROCESS</div>
                <h2 className="text-dark">
                  It’s very easy to open an Account, See how
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {feature_data.map((f, i) => (
              <div
                key={f.id}
                className="col-md-4 d-flex wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <div className="card-style-twentyOne mt-40">
                  <div className="icon rounded-circle m-auto position-relative d-flex align-items-center justify-content-center">
                    <Image src={f.img} alt="" className="lazy-img" />
                    <span className="numb position-absolute d-flex align-items-center justify-content-center rounded-circle">
                      {f.id}
                    </span>
                  </div>
                  <p className="text-center text-lg mt-50 pe-xxl-5 ps-xxl-5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-40 position-relative line-btn">
            <Link href="/contact" className="btn-twenty">
              Apply Now
            </Link>
          </div>

          <Image src={shape} alt="" className="lazy-img shapes shape_01" />
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureFifteen;
