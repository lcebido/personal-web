import React, { useEffect, useState } from "react";
import axios from "axios";
import "../sass/components/Blog.scss";
import Preview from "./common/Preview";


function BLog() {
  const [blog, setBlog] = useState([]);
  // const [modalContent, setModalContent] = useState([]);
  // const modalRef = useRef();
  // const openModal = (props) => {
  //   setModalContent(props);
  //   modalRef.current.openModal();
  // };

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
      <div className="theme-light" style={{ borderBottom: 0 }}>
        <div className="container inner-content">
          <div className="experience row pt-lg-4">
            <h1 className="font-header mb-5">blog.</h1>
            <h3 className="text-center charcoal px-5">
              “Believe in yourself, and find ways to express yourself, and find
              the discipline to keep growing.”
              <br />- Michael Feinstein
            </h3>
            <hr className="my-4" />
            <div className="row">
              <div className="blog-container">
                {console.log("blog.list}: ", blog.list)}
                <Preview title={blog.title} list={blog.list} />
              </div>
            </div>
            <hr className="mt-4 mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BLog;
