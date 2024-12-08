import React from "react";

const Stats = () => {
  return (
    <section id="stats" className="stats section dark-background">
      <img
        src="/assets/img/stats-bg.jpg"
        alt="Stats Background"
        className="img-fluid"
      />

      <div className="container position-relative">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
              >
                232
              </span>
              <p>Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
              >
                521
              </span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
              >
                1453
              </span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
              >
                32
              </span>
              <p>Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
