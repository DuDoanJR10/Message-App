import React from "react";

const img = require("../assets/img/img.png");
const attach = require("../assets/img/attach.png");

const Input = () => {
  return (
    <div className="Input">
      <input className="Input__message" type="text" placeholder="Type something..." />
      <div className="Input__send">
        <img src={attach} alt="attach" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="img" />
        </label>
        <button className="Input__send__button">Send</button>
      </div>
    </div>
  );
};

export default Input;
