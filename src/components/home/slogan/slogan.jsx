import React from "react";
import "./slogan.css";

function Slogan() {
    return (
        <div className="slogan-container">
          <span className="slogan-text">Let there be change</span>
          <button className="slogan-btn">
            <i className="chevron">&gt;</i>
          </button>
        </div>
      );
}

export default Slogan;