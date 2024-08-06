import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { onSnapshot, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);
  const { currentUser } = useUserStore();
  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId); // fetching user data using snapShot() in google firebase.
          const userDocSnap = await getDoc(userDocRef); // fetching user data using snapShot() in google firebase.

          const user = userDocSnap.data();

          return { ...item, user }; // return all the chatInformation and the user
        });

        const chatData = await Promise.all(promises); // resolving the above function

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt)); // sorting to get the latest chats.
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  console.log(chats);

  return (
    <div className="ChatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      {chats.map((chat) => {
        <div className="item" key={chat.chatId}>
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Manoj</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>;
      })}
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
