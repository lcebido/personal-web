import React, { useEffect, useState } from "react";
import { GeoAltFill, Calendar2RangeFill } from "react-bootstrap-icons";
import axios from "axios";
import moment from "moment";

function Experience() {
  const [career, setCareer] = useState([]);
  const [education, setEducation] = useState([]);



  useEffect(() => {
    async function getData() {
      await axios
        .get("/data/career.json")
        .then((response) => {
          setCareer(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get("/data/education.json")
        .then((response) => {
          setEducation(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);

  return (
    <div className="container inner-content">
      <div className="experience row pt-lg-4">
        <h1 className="font-pattaya">experience.</h1>
        <h3 className="text-center charcoal px-5">
        “It is only in adventure that some people succeed in knowing
          themselves - in finding themselves.”
          <br />- Andre Gide
        </h3>
        <div className="carrer row">
          <h2 className="text-center p-3">Careers</h2>
          {[...career].reverse().map(({ id, company, year: { from, to }, position, location }) => (
              <div key={id} className="row mb-4">
                <div className="col-lg-4 pb-4">
                  <h4>{company}</h4>
                  <div className="location">
                     <GeoAltFill /> {location}
                  </div>
                  <div className="charcoal">
                    <Calendar2RangeFill />
                    &nbsp;
                    {moment(from).format("MMMM YYYY")} -&nbsp;
                    {to !== "" ? moment(to).format("MMMM YYYY") : "Present"}
                  </div>
                </div>
                <div className="col-lg-8">
                  {[...position].reverse().map(({ id, title, description, from, to }) => (
                      <div key={id} className="position-containter row mb-3">
                        <h5>{title}</h5>
                        <span className="date charcoal">
                          {moment(from).format("MMMM YYYY")} -&nbsp;
                          {to !== "" ? moment(to).format("MMMM YYYY") : "Present"}
                        </span>
                        <div>{description}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
        <hr className="my-4" />
        <div className="education row">
          <h2 className="text-center p-3">Education</h2>
          {[...education].reverse().map( ({ id, school, year: { from, to }, level, location, degree}) => (
                <div key={id} className="row mb-4">
                  <div className="col-lg-4 pb-4">
                    <h4>{school}</h4>
                    <div className="location">
                      <GeoAltFill /> {location}
                    </div>
                    <div className="charcoal">
                      <Calendar2RangeFill />
                      &nbsp;
                      {moment(from).format("MMMM YYYY")} -&nbsp;
                      {moment(to).format("MMMM YYYY")}
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <h5>{level}</h5>
                    <div className="school">{degree}</div>
                    <span className="date charcoal">
                    {level}&nbsp;
                      {moment(from).format("MMMM YYYY")} -&nbsp;
                      {moment(to).format("MMMM YYYY")}
                    </span>
                  </div>
                </div>
              )
            )}
        </div> 
      </div>
      <div className="clearfix my-4"></div>
    </div>
  );
}

export default Experience;
