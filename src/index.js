// import { createRoot } from 'react-dom/client';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />)

const tw = require("typewriterjs");
tw.startTypist("typewriterId", ["an engineer", "a product manager", "a developer", "a trader", "a language lover", "a content creator", "a Lineup Larry"]);

const particlesJS = require("particles.js");
particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});