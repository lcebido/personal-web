import React, { useEffect, useState } from "react";
import axios from "axios";
import "../sass/components/Portfolio.scss";
import Preview from "./common/Preview";

function Portfolio() {
  const [porfolio, setPorfolio] = useState([]);

  useEffect(() => onLoad(), []);

  const onLoad = () => {
    const webdev = axios.get("/data/portfolioweb.json");
    const gamedev = axios.get("/data/portfoliogame.json");
    const dashboard = axios.get("/data/portfoliodashboard.json");

    axios.all([webdev, gamedev, dashboard])
      .then(
        axios.spread((...responses) => {
          setPorfolio(responses)
        })
      )
      .catch((errors) => {
        console.log("portfolio errors:", errors);
      });
  }

  return (
    <div id="portfolio">
      <div className="theme-dark pb-5">
        <div className="container inner-content">
          <div className="experience row pt-lg-4">
            <h1 className="font-header">portfolio.</h1>
            <h3 className="text-center charcoal px-5">
              “Practice patience to get the results but don't be much patient to
              take actions.”
              <br />- Amit Kalantri
            </h3>
            {porfolio && porfolio.map(({ data: { title, list } }, index) => {
              return (
                <React.Fragment key={index}>
                  <Preview title={title} list={list} />

                  {(porfolio.length - 1) !== index &&
                    <hr className="my-4" />
                  }
                </React.Fragment>)
            })}
          </div>
        </div>
      </div>
      <div className="clearfix my-5"></div>
    </div>
  );
}

export default Portfolio;
