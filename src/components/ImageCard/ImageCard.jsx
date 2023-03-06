import { Component } from "react";

export const ImageCard = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
