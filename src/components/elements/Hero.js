import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";
// import Typewriter from "typewriter-effect/dist/core";

function Hero() {
  const typewriterStyle = {
    color: "orange",
  }
  // new Typewriter('#typewriter', {
  //   strings: ['Hello', 'World'],
  //   autoStart: true,
  //   loop: true,
  // });
  // const tw = require("typewriterjs");
  // tw.startTypist("typewriterId", ["an engineer", "a product manager", "a developer", "a trader", "a language lover", "a content creator", "a Lineup Larry"]);
  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="column" style={{padding: "30px"}}></div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light">My name is Victor Zhou.</p>
          <h1 className="title">I am <span style={typewriterStyle} id="typewriterId"></span></h1>
          <div></div>
          <h2 className="subtitle">
            {Resume.basics.location.region}, {Resume.basics.location.country}
          </h2>
        </div>
      </div>
      <div className="hero-body" style={{ paddingBottom: "0px" }}>
        <div className="container interests">
          {Resume.basics.profiles.map((value, index) => {
            return (
              <div key={index} className="column has-text-centered">
                <a
                  href={value.url}
                  target="blank"
                  className="is-hovered"
                  title={value.network}
                >
                  <span className="icon is-medium is-">
                    <i className={value.x_icon}></i>
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
