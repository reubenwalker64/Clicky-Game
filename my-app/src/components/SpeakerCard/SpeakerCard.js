import React from "react";
import "./SpeakerCard.css";

function SpeakerCard(props) {
  return (
    <center><div className="card">
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

      </div>
    </div></center>
  );
}

export default SpeakerCard;
