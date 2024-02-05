import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const imgIcon = require("../assets/img/img.png");
const attach = require("../assets/img/attach.png");

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState<any>("");

  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuidv4());
      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuidv4(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          } catch (error) {
            console.log(error);
          }
        });
      });
    } else {
      await updateDoc(doc(db, "chats", data?.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId: currentUser?.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser?.uid), {
      [data?.chatId + ".lastMessage"]: {
        text,
      },
      [data?.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data?.user?.uid), {
      [data?.chatId + ".lastMessage"]: {
        text,
      },
      [data?.chatId + ".date"]: serverTimestamp(),
    });
    setImg(null);
    setText("");
  };
  return (
    <div className="Input">
      <input
        className="Input__message"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Type something..."
      />
      <div className="Input__send">
        <img src={attach} alt="attach" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e: any) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={imgIcon} alt="img" />
        </label>
        <button onClick={handleSend} className="Input__send__button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
