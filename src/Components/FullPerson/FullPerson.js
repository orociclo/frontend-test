import React from "react";

import "./FullPerson.css";

const fullPerson = (props) => {
  console.log(props.info)
  return (
    <div className="divFullPersonContainer">
      <div className="FullPersonThumbnail">
        <img src={props.info.thumbnail} alt="Thumbnail"></img>
      </div>
      <div className="divFullPersonData">
        <div className="FullPersonData">
          <label><strong>Name: </strong> {props.info.name}</label>
          <label><strong>Age: </strong> {props.info.age}</label>
          <label><strong>Height: </strong>{props.info.height}</label>
          <label><strong>Hair Color: </strong>{props.info.hair_color}</label>
          <label><strong>Professions:</strong></label>        
          <label>{props.info.professions}</label>
          <label><strong>Friends:</strong></label>
          <label>{props.info.friends}</label>
        </div>
      </div>
    </div>
  )
}

export default fullPerson;