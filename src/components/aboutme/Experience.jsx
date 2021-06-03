import React, { useEffect, useState } from "react";
import axios from "axios";

function Experience() {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get("/data/experience.json")
        .then((response) => {
          console.log("response", response);
          setExperience(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);
  
  return (
    <div className="container-subsection">
      <div className="container content">
        <div className="row">
          <div className="col">
            <h1 className="font-pattaya">Experience.</h1>
            <div className="row">
              {experience.map(({ id, company, year, location }) => (
                <div key={id} className="col-lg-6">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
