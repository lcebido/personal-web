import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Youtube } from "react-bootstrap-icons";
import "../sass/components/Blog.scss";
import Modal from "./Modal";


function BLog() {
  const [blog, setBlog] = useState([]);
  const [modalContent, setModalContent] = useState([]);
  const modalRef = useRef();
  const openModal = (props) => {
    setModalContent(props);
    modalRef.current.openModal();
  };

  useEffect(() => {
    async function getData() {
      await axios
        .get("/data/blog.json")
        .then((response) => {
          setBlog(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);


  return (
    <div id="blog">
      <div className="theme-light" style={{borderBottom: 0}}>
        <div className="container inner-content">
          <div className="experience row pt-lg-4">
            <h1 className="font-pattaya mb-5">blog.</h1>
            <h3 className="text-center charcoal px-5">
              “Believe in yourself, and find ways to express yourself, and find
              the discipline to keep growing.”
              <br />- Michael Feinstein
            </h3>
            <hr className="my-4" />
            <div className="row">
            <div className="blog-container">
                  {[...blog].map(({ id, thumbnail ,name, tag, images, description, url, imageURL = './images/blog/mltopglobal'}) => (
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
                        {url !== "" && 
                        <button className="button noselect" onClick={()=> openModal({id, name, description, images, url, imageURL})}>
                          Preview
                        </button>
                        }
                      </div>
                    </div>
                  ))}
                </div>
            </div>
            <hr className="mt-4 mb-5" />
          </div>
        </div>
      </div>
      <Modal ref={modalRef} content={modalContent} />
    </div>
  );
}

export default BLog;
