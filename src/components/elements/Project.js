import React from "react";

function Project(props) {
    return (
        <a className="media-content" href={props.website} target="_blank" rel="noopener noreferrer">
            <div className="card project-card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <span className={`project-icon has-text-link is-size-3 fa-solid ${props.icon}`}></span>
                        </div>
                        <div className="media-content">
                            <p className="project-title is-size-6">{props.text}</p>
                            <p className="is-size-7">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Project;