import React from "react";
import { Youtube } from "react-bootstrap-icons";
//import axios from "axios";

function BLog() {
  // const [blog, setBlog] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     await axios
  //       .get("/data/blog.json")
  //       .then((response) => {
  //         setBlog(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   getData();
  // }, []);


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
              <Youtube color="#8c8c8c" size={200} />
            </div>
            <h5 className="text-center charcoal">soon</h5>
            <hr className="mt-4 mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BLog;
