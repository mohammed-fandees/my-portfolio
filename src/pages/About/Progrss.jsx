import React from "react";

export default function Progrss(props) {
  const { skill } = props;
  return (
    <div className="skill col-lg-6 col-md-12">
      <span className="skill-name mb-2 d-block">{skill.name}</span>
      <div className="prog p-1 rounded-2 mb-4">
        <div className="bar rounded-2" style={{ width: `${skill.level}%` }}>
          {skill.level}%
        </div>
      </div>
    </div>
  );
}
