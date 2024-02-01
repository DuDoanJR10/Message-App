import React from "react";
import Messages from "./Messages";
import Input from "./Input";

const More = require("../assets/img/more.png");
const Add = require("../assets/img/add.png");
const Cam = require("../assets/img/cam.png");

const Chat = () => {
  return (
    <div className="Chat">
      <div className="Chat__info">
        <span className="Chat__name">Neymar JR</span>
        <div className="Chat__icons">
          <img src={More} alt="More" />
          <img src={Add} alt="Add" />
          <img src={Cam} alt="Cam" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
