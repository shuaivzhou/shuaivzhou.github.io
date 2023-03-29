import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <a className="timeline-marker is-image is-32x32" href={props.website} target="_blank" rel="noopener noreferrer">
        <img src={props.picture} alt={props.pictureFallback}/>
      </a>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4">
          <a className="title is-4" href={props.website} target="_blank" rel="noopener noreferrer">{props.company}</a>
          <p className="heading">{props.position}</p>
        </h1>
        <p className="timeline-summary" style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
