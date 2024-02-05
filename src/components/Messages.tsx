import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState<Array<any>>([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    if (data?.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data?.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
      return () => {
        unSub();
      };
    }
  }, [data?.chatId]);

  return (
    <div className="Messages">
      {messages?.map((message) => (
        <Message key={message?.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
