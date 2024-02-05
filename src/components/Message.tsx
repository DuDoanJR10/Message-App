import React, {
  LegacyRef,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
} from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

interface MessageProps {
  owner?: boolean;
  message: any;
}

const Message = ({ message }: MessageProps) => {
  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef<any>();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      ref={ref}
      className={`Message ${
        currentUser?.uid === message?.senderId ? "owner" : ""
      }`}
    >
      <div className="Message__info">
        <img
          className="Message__info__avatar"
          src={
            currentUser?.uid === message?.senderId
              ? currentUser?.photoURL
              : data?.user?.photoURL
          }
          alt="avatar"
        />
        <span className="Message__info__time">Now</span>
      </div>
      <div className="Message__content">
        {message?.img && <img src={message?.img} alt="message" />}
        {message?.text && (
          <p className="Message__content__detail">{message?.text}</p>
        )}
      </div>
    </div>
  );
};

export default Message;
