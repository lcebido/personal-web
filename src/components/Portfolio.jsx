import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../sass/components/Portfolio.scss";
import Modal from "./Modal";

function Portfolio() {
  const [webdev, setWebdev] = useState([]);
  const [gamedev, setGamedev] = useState([]);
  const [modalContent, setModalContent] = useState([]);
  const modalRef = useRef();
  const openModal = (props) => {
    setModalContent(props);
    modalRef.current.openModal();
  };

  useEffect(() => {
    const webdev = axios.get("/data/portfolioweb.json");
    const gamedev = axios.get("/data/portfoliogame.json");

    axios
      .all([webdev, gamedev])
      .then(
        axios.spread((...responses) => {
          setWebdev(responses[0].data);
          setGamedev(responses[1].data);
        })
      )
      .catch((errors) => {
        console.log("portfolio errors:", errors);
      });
  }, []);

  return (
    <div id="portfolio">
      <div className="theme-dark pb-5">
        <div className="container inner-content">
          <div className="experience row pt-lg-4">
            <h1 className="font-pattaya">portfolio.</h1>
            <h3 className="text-center charcoal px-5">
              “Practice patience to get the results but don't be much patient to
              take actions.”
              <br />- Amit Kalantri
            </h3>
            <div className="row">
              <h2 className="text-center p-3">Web Development</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="portfolio-container">
                  {[...webdev].map(({ id, thumbnail ,name, tag, images, description, url, imageURL = './images/portfolio/webdev'}) => (
                    <div className="thumb-container" key={id}>
                      <div className="thumb-inner">
                        <div
                          className="image"
                          style={{ background: `url(${imageURL}/${id}/${thumbnail}) center center/cover`}}
                        ></div>
                        <div className="text">
                          <div className="upper">{name}</div>
                          <div className="lower">
                            {tag.slice(0, 3).map((tagitem, index) => (
                              <span key={index}>{index===0 ? "": "/"} {tagitem}  </span>
                            ))}
                          </div>
                        </div>
                        <button className="button noselect" onClick={()=> openModal({id, name, description, images, url, imageURL})}>
                          Preview
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <h2 className="text-center p-3">Game Development</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="portfolio-container">
                  {[...gamedev].map(({ id, thumbnail ,name, tag, images, description, url, imageURL = './images/portfolio/gamedev'}) => (
                    <div className="thumb-container" key={id}>
                      <div className="thumb-inner">
                        <div
                          className="image"
                          style={{
                            background: `url(${imageURL}/${id}/${thumbnail}) center center/cover`,
                          }}
                        ></div>
                        <div className="text">
                          <div className="upper">{name}</div>
                          <div className="lower">
                            {tag.slice(0, 3).map((tagitem, index) => (
                              <span key={index}>{index===0 ? "": "/"} {tagitem}  </span>
                            ))}
                          </div>
                        </div>
                        <button className="button noselect" onClick={()=> openModal({id, name, description, images, url, imageURL})}>
                          Preview
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix my-5"></div>
      <Modal ref={modalRef} content={modalContent}>
        MODAL
      </Modal>
    </div>
  );
}

export default Portfolio;
