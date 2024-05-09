import React from 'react';
import Image from 'next/image';
import trustpilot from '@/assets/images/assets/trustpilot.png';
import shape from '@/assets/images/shape/shape_49.svg';
import CounterOne from '../counter/counter-one';

const BlockFeatureThirteen = () => {
  return (
    <div className="block-feature-thirteen position-relative md-pt-100">
			<div className="upper-wrapper box-layout position-relative mt-0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 order-lg-last">
							<div className="ps-xl-5">
								<div className="d-flex align-items-center">
									<Image src={trustpilot} alt="trustpilot" className="lazy-img icon"/>
									<span className="ps-4">(<span className="fw-500 text-dark">4.7</span> Rating)</span>
								</div>
								<div className="title-two pe-xxl-4 mt-20 mb-75 md-mb-50">
									<h2 className="text-dark">Leading insurer on a global scale.</h2>
								</div>
								<a href="about-us-v1.html" className="btn-twenty">Learn More</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="graph-panel pt-150 xl-pt-120 md-pt-60 pb-130 xl-pb-100 md-pb-50">
								<div className="row align-items-end">
									<div className="col-md-6 order-md-last">
										<div className="pe-xxl-5 pe-xl-4 line-loop position-relative z-1">
											<div className="main-count fw-500 color-deep mb-20"><span className="counter">83</span>%</div>
											<p className="m0">We’ve hit the billion by initiate the insurance in time to our customer in 2024</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="row">
											<div className="d-inline-flex align-items-end p0 position-relative z-1 sm-mt-40">
												<div className="chart-box text-center color-deep wow fadeInUp">
													<span className="d-block mb-10">$1.8b</span>
													<div className="chart-inner" style={{height: 360 + 'px'}}></div>
												</div>
												<div className="chart-box text-center color-deep wow fadeInUp" data-wow-delay="0.1s">
													<span className="d-block mb-10">$9.3m</span>
													<div className="chart-inner" style={{height: 250 + 'px'}}></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Image src={shape} alt="" className="lazy-img shapes shape_01"/>
			</div>

			<div className="container">
				<CounterOne/>
			</div>
		</div>
  );
};

export default BlockFeatureThirteen;