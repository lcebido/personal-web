import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillBar from "./SkillBar";

function Skills() {
  const [knowledges, setKnowledges] = useState([]);
  const [tools, setTools] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("/data/knowledge.json")
        .then((response) => {
          console.log("response", response);
          setKnowledges(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get("/data/tools.json")
        .then((response) => {
          console.log("response", response);
          setTools(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get("/data/language.json")
        .then((response) => {
          console.log("response", response);
          setLanguages(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);

  return (
    <div className="container-subsection dark-bg">
      <div className="container content">
        <h1 className="font-pattaya">abilities.</h1>
        <div className="row">
          <h2>Knowledge</h2>
          {knowledges.map(({ id, name, level }) => (
            <div className="col-lg-6">
              <SkillBar id={id} name={name} level={level} maxlevel={5} />
            </div>
          ))}
        </div>

        <div className="row">
          <h2>Tools</h2>
          {tools.map(({ id, name, level }) => (
            <div className="col-lg-6">
              <SkillBar id={id} name={name} level={level} maxlevel={5} />
            </div>
          ))}
        </div>

        <div className="row">
          <h2>language</h2>
          {languages.map(({ id, name, level }) => (
            <div className="col-lg-6">
              <SkillBar id={id} name={name} level={level} maxlevel={5} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
