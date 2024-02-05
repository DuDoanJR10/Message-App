import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext, AuthContextProps } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState<Array<any>>();
  const currentUser = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (currentUser?.uid) {
      const unSub = onSnapshot(
        doc(db, "userChats", currentUser?.uid),
        (doc) => {
          setChats(Object.entries(doc.data() as any));
        }
      );
      return () => {
        unSub();
      };
    }
  }, [currentUser?.uid]);
  console.log(chats);

  const handleSelect = (userInfo: AuthContextProps) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };
  return (
    <div className="Chats">
      {chats?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div
          key={chat[0]}
          className="User"
          onClick={() => handleSelect(chat[1]?.userInfo)}
        >
          <img src={chat[1]?.userInfo?.photoURL} alt="user" />
          <div className="User__info">
            <span className="User__info__name">
              {chat[1]?.userInfo?.displayName}
            </span>
            <p className="User__info__message">{chat[1]?.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
