import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-black-bis">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/shuaivzhou" className="has-text-white">
            <strong>Shuai Victor Zhou</strong>
          </a>
        </p>
        {/* <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p> */}
        <p>
          Contact me: <a href = "mailto: svzh@berkeley.edu">svzh@berkeley.edu</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
