import React, { useEffect, useState } from "react";
import axios from "axios";
import "../sass/components/Portfolio.scss";

function Portfolio() {
  const [webdev, setWebdev] = useState([]);
  const [gamedev, setGamedev] = useState([]);

  useEffect(() => {
    const webdev = axios.get("/data/portfolioweb.json");
    const gamedev = axios.get("/data/portfolioweb.json");

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
      <div className="theme-dark">
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
                  {[...webdev].map(({ id, imgurl , name, tag}) => (
                    <div className="thumb-container" key={id}>
                      <div className="thumb-inner">
                        <div className="image" style={{ background: `url(${imgurl}) center center/cover`,}}></div>
                        <div className="text">
                          <div className="upper">{name}</div>
                          <div className="lower">{tag[0]} / {tag[1]} / {tag[2]}</div>
                        </div>
                        <div className="button">Visit</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
