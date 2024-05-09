import React from 'react';

const CounterOne = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-lg-3">
        <div className="counter-block-three text-center mt-40">
          <div className="main-count fw-500"><span className="counter">76</span></div>
          <p className="text-lg">Trusted Partners</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="counter-block-three text-center mt-40">
          <div className="main-count fw-500">$<span className="counter">9.1</span>bil+</div>
          <p className="text-lg">Coverage</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="counter-block-three text-center mt-40">
          <div className="main-count fw-500"><span className="counter">1.2</span>%</div>
          <p className="text-lg">Low interest rate</p>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;