import React, { useState, useRef } from "react";
import Modal from "../Modal";

function Preview({ title, list }) {
  const [modalContent, setModalContent] = useState([]);
  const modalRef = useRef();
  const openModal = (props) => {
    setModalContent(props);
    modalRef.current.openModal();
  };

  return (
    <>
      <div className="row">
        <h2 className="text-center p-3">{title}</h2>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="portfolio-container">
            {list && list.map(({ id, thumbnail, name, tag, images, description, url }) => (
              <div className="thumb-container" key={id}>
                <div className="thumb-inner">
                  <div
                    className="image"
                    style={{ background: `url(${thumbnail}) center center/cover` }}
                  ></div>
                  <div className="text">
                    <div className="upper">{name}</div>
                    <div className="lower">
                      {tag.slice(0, 3).map((tagitem, index) => (
                        <span key={index}>{index === 0 ? "" : "/"} {tagitem}  </span>
                      ))}
                    </div>
                  </div>

                  <button className="button noselect" onClick={() => openModal({ id, name, description, images, url })}>
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal ref={modalRef} content={modalContent} />
    </>
  );
}

export default Preview;