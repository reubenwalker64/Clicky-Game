import React from "react";
import "./SpeakerCard.module.css";

//integrate handleClick by pulling in handleClick function as a prop

function SpeakerCard(props) {
  return (
    <div className="card" onClick={props.handleClick}><center>
      <div className="img-container">
				<br />
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
					<br />
					<p>
            <strong>Name:</strong> {props.name}
          </p>
          <p>
            <strong>Title:</strong> {props.title}
          </p>
          <p>
            <strong>Company:</strong> {props.company}
          </p>

      </div></center>
    </div>
  );
}

export default SpeakerCard;
