import React from "react";
import { StarFill } from "react-bootstrap-icons";

const SkillBar = ({ id, name, level, maxLevel }) => {
  const skillLevel = maxLevel ?? 5;
  const colorLevel = ['#4376b0','#3e6ca2','#396394','#335986','#2e5077'];

  return (
      <div key={id} className="skillbar">
        <div className="name text-truncate">{name}</div>
        <div className="star">
          {[...Array(skillLevel)].map((e, i) => {
            return level > i  ? <StarFill key={i} color={colorLevel[i]} /> : <StarFill key={i} color='#dadada' />;
          })}
        </div>
      </div>
  );
};

export default SkillBar;
