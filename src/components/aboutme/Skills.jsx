import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillBar from "./SkillBar";

function Skills() {
  const [knowledges, setKnowledges] = useState([]);
  const [tools, setTools] = useState([]);
  const [languages, setLanguages] = useState([]);

  const firstColKnowledges = knowledges.filter((knowledge, index) => {
    return index < knowledges.length / 2;
  });
  const secondColKnowledges = knowledges.filter((knowledge, index) => {
    return index >= firstColKnowledges.length;
  });

  const firstColtools = tools.filter((tool, index) => {
    return index < tools.length / 2;
  });
  const secondColtools = tools.filter((tool, index) => {
    return index >= firstColtools.length;
  });

  const firstCollanguages = languages.filter((language, index) => {
    return index < languages.length / 2;
  });
  const secondCollanguages = languages.filter((language, index) => {
    return index >= firstCollanguages.length;
  });



  useEffect(() => {
    async function getData() {
      await axios
        .get("/data/knowledge.json")
        .then((response) => {
          console.log("knowledge", response);
          setKnowledges(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get("/data/tools.json")
        .then((response) => {
          console.log("tools", response);
          setTools(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get("/data/language.json")
        .then((response) => {
          console.log("language", response);
          setLanguages(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);

  return (
    <div className="container inner-content">
      <div className="skills row pt-lg-4">
        <h1 className="font-pattaya">abilities.</h1>
        <h3 className="text-center charcoal px-5">
        “It is not always possible to be the best, but it is always possible
          to improve your own performance.”
          <br />- Jackie Stewart
        </h3>
        <div className="row">
          <h2 className="text-center p-3">Knowledges</h2>
          <div className='text-center col-lg-6 col-md-6'>
            <ul>
              {firstColKnowledges.map(({ id, name, level }) => (
                <li key={id}>
                  <SkillBar id={id} name={name} level={level} maxlevel={5} />
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center col-lg-6 col-md-6'>
            <ul>
              {secondColKnowledges.map(({ id, name, level }) => (
                <li key={id}>
                  <SkillBar id={id} name={name} level={level} maxlevel={5} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <h2 className="text-center p-3">Tools</h2>
          <div className='text-center col-lg-6 col-md-6'>
            <ul>
              {firstColtools.map(({ id, name, level }) => (
                <li key={id}>
                  <SkillBar id={id} name={name} level={level} maxlevel={5} />
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center col-lg-6 col-md-6'>
            <ul>
              {secondColtools.map(({ id, name, level }) => (
                <li key={id}>
                  <SkillBar id={id} name={name} level={level} maxlevel={5} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <h2 className="text-center p-3">Languages</h2>
          <div className='text-center col-lg-6 col-md-6'>
            <ul>
              {firstCollanguages.map(({ id, name, level }) => (
                <li key={id}>
                  <SkillBar id={id} name={name} level={level} maxlevel={5} />
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center col-lg-6 col-md-6'>
            <ul>
              {secondCollanguages.map(({ id, name, level }) => (
                <li key={id}>
                  <SkillBar id={id} name={name} level={level} maxlevel={5} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='clearfix my-4'></div>
      </div>
      
    </div>
  );
}

export default Skills;
