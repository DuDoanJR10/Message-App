import React, { useContext, useState } from "react";
import { db } from "../firebase";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<DocumentData>();
  const [error, setError] = useState(false);

  const currentUser = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      console.log("querySnapshot: ", querySnapshot);
      if (querySnapshot.docs.length) {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      } else {
        setUser(undefined);
      }
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleEnter = (e: any) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId = currentUser?.uid > user?.uid ? currentUser?.uid + user?.uid : user?.uid + currentUser?.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] })
        await updateDoc(doc(db, "userChats", currentUser?.uid), {
          [combinedId + '.userInfo']: {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
        await updateDoc(doc(db, "userChats", user?.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
      }
    } catch (error) {
  
    }
    setUser(undefined);
    setUsername('');
  };
  return (
    <div className="Search">
      <div className="Search__form">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleEnter}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {error && <span>User not found!</span>}
      {user && (
        <div className="User" onClick={handleSelect}>
          <img src={user?.photoURL} alt="avatar" />
          <div className="User__info">
            <span className="User__info__name">{user?.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
