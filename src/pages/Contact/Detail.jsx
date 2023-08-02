import React from "react";

export default function Detail(props) {
  const { detail } = props;
  return (
    <li className="d-flex gap-2">
      <img src={detail.icon} alt="icon" />
      <p className="d-flex flex-column m-0 text-white">
        {detail.title}
        <span>{detail.subtitle}</span>
      </p>
    </li>
  );
}
