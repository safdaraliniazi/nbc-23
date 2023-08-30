import React from "react";

const AboutNBC = () => {
  return (
    <>
      <section
        id="about-section"
        className="about-section section theme-bg-light active"
      >
        <div className="container">
          <h3 className="section-heading text-center mb-3">About NBC 2023</h3>
          <div
            style={{
              justifyContent: "center",
              alignItems: "baseline",
              flexWrap: "wrap",
            }}
          >
            <div className="about-intro  section-intro single-col-max mx-auto mb-4">
              National Bioengineering Conference 2023 theme is .{" "}
              <strong>
                “Bioengineering in Healthcare, Environment & Agriculture”
              </strong>{" "}
              . The goal of the NBC-2023 conference is to create a wonderful
              ambience of scientific knowledge for the exchange of ideas and
              develop more technologies to solve global challenges.{" "}
            </div>
            <div className="benefits-list text-center mb-3">
              <h1 className="text-center mb-4">Global Challenges</h1>
              <ul className="list-unstyled global-challenges text-start d-inline-block">
                <li>
                  <svg
                    className="svg-inline--fa fa-circle-check me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-check"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {/* <i class="fas fa-check-circle me-2"></i> Font Awesome fontawesome.com */}
                  Treatment of diseases
                </li>
                <li>
                  <svg
                    className="svg-inline--fa fa-circle-check me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-check"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {/* <i class="fas fa-check-circle me-2"></i> Font Awesome fontawesome.com */}
                  Efficient agricultural activities
                </li>
                <li>
                  <svg
                    className="svg-inline--fa fa-circle-check me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-check"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {/* <i class="fas fa-check-circle me-2"></i> Font Awesome fontawesome.com */}
                  Environment management
                </li>
                <li>
                  <svg
                    className="svg-inline--fa fa-circle-check me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-check"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {/* <i class="fas fa-check-circle me-2"></i> Font Awesome fontawesome.com */}
                  Solution to food crisis, wastage of food resources
                </li>
                <li>
                  <svg
                    className="svg-inline--fa fa-circle-check me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="circle-check"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                  {/* <i class="fas fa-check-circle me-2"></i> Font Awesome fontawesome.com */}
                  Easy access to phytopharmaceuticals, among others
                </li>
              </ul>
            </div>
          </div>
          {/*//benefits-list*/}
        </div>
      </section>
    </>
  );
};

export default AboutNBC;
