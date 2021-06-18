import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactDom from "react-dom";
import Carousel from "react-multi-carousel";
import { Link45deg, XLg } from "react-bootstrap-icons";
import "../sass/components/Modal.scss";

const Modal = forwardRef(({ content }, ref) => {
  const {id, name, images, description, url , imageURL} = content;
  const [display, setDisplay] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });
  const open = () => setDisplay(true);
  const close = () => setDisplay(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  if (!display) return null;
  return ReactDom.createPortal(
    <div id="modal">
      <div className="dimmer" onClick={close}></div>
      <div className="row">
        <div className="content col-lg-6">
          <button className="btn-back float-right" onClick={close}>
            <XLg size="18" color="#fff" />
          </button>
          
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={8000}
            keyBoardControl={false}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            additionalTransfrom={0}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={`${imageURL}/${id}/${image}`}
                alt={image}
              />
            ))}
          </Carousel>
          <div className="row bottom-container">
            <div className={url === '' ? "col-lg-12 mb-sm-1" : "col-lg-9 mb-sm-1"}>
              <div className="title">{name}</div>
              <hr />
              <div className="description charcoal">{description}</div>
            </div>
            {url !== '' &&
            <div className="col-lg-3 d-flex align-items-center">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="btn-visitsite noselect" >
                  <div className="icon"><Link45deg size="20" color="#fff" /></div>
                  <div className="text">Visit</div>
                </button>
              </a>
            </div>
          }
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root-modal")
  );
});

export default Modal;
