import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <>
        <div className="media-block theme-bg-dark py-5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" container-fluid"
          >
            <h4 className="text-white section-heading text-center mb-3">
              Glimpse of previous NBC
            </h4>
            <div style={{fontSize : '24px'}} className="text-center mx-auto text-white mb-5">
              A Glimpse of Past National Bioengineering Conferences. Join us on
              a visual journey through the captivating moments, groundbreaking
              research, and collaborative spirit that defined our previous
              conferences. Witness the convergence of minds dedicated to shaping
              the future of bioengineering and fostering advancements for a
              healthier world."
            </div>
            <div className="container text-center row gx-md-5">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                  hideOnClick: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                className="mySwiper"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <img className="img-fluid"  src="/images/carousel/1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/3.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/4.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/5.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/6.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/7.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/8.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/9.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/10.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/11.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/12.webp" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="img-fluid" src="/images/carousel/13.webp" />
                </SwiperSlide>
              </Swiper>
            </div>
            {/*//row*/}
          </div>
          {/*//container*/}
        </div>
    </>
  )
}

export default Carousel