import React from "react";
import "../../sass/components/SlideBar.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SlideBar = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={8000}
        keyBoardControl={false}
        //customTransition="all 1000"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        additionalTransfrom={5}
      >
        <img src="/images/image-2.png" alt="" />
        <img src="/images/image-3.png" alt="" />
        <img src="/images/image-4.png" alt="" />
        <img src="/images/image-5.png" alt="" />
        <img src="/images/image-6.png" alt="" />
        <img src="/images/image-7.png" alt="" />
        <img src="/images/image-8.png" alt="" />
        <img src="/images/image-9.png" alt="" />
      </Carousel>
  );
};

export default SlideBar;
