import React from "react";
import { StarFill } from "react-bootstrap-icons";

const SkillBar = ({ id, name, level, maxLevel }) => {
  const skillLevel = maxLevel ?? 5;
  const colorLevel = ['#f6f7dc','#fafbb0','#fdff91','#fcff4b','#fbff00'];

  return (
    <div id={id}>
      <div className="row">
        <div className="col">{name}</div>
        <div className="col">
          {[...Array(skillLevel)].map((e, i) => {
            return level > i  ? <StarFill key={i} color={colorLevel[i]} /> : <StarFill key={i} color='#dadada' />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
