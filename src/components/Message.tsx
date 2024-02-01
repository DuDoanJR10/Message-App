import React from "react";

interface MessageProps {
  owner?: boolean;
}

const Message = ({ owner }: MessageProps) => {
  return (
    <div className={`Message ${owner ? "owner" : ""}`}>
      <div className="Message__info">
        <img
          className="Message__info__avatar"
          src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
        />
        <span className="Message__info__time">Just now</span>
      </div>
      <div className="Message__content">
        <img
          src="https://plus.unsplash.com/premium_photo-1664442990119-9fc26ba264e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="message"
        />
        <p className="Message__content__detail">Hello</p>
      </div>
    </div>
  );
};

export default Message;
