import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react"; // A frameWork in react to get the emojis.
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
const Chat = () => {
  const [chat, setChat] = useState();
  const [openEmoji, setOpenEmoji] = useState(false); // To control the opening and closing of the Emoji Tab.
  const [text, setText] = useState(""); //To fetch the input typed by the user in the sendMessage input box.
  const { chatId } = useChatStore();
  const { currentUser, user } = useUserStore();

  const endRef = useRef(null); // useRef(null) initializes the endref to null which means currently endRef isn't pointing to any DOM element.

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" }); // this function access the current element the endRef is pointing to which is the <div> tag and the scrollIntoView function scrolls the div from first to last in a smooth transition.
  });

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  console.log(chat);

  const handleEmoji = (e) => {
    // To append the emoji selected by the user with the current text entered in the input box.
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  const handleSend = async () => {  // adding the messages to the sender and receiver chats when we click the send button
    if (text === "") return; // "text" is the message we want to send to the receiver

    try {
      await updateDoc(doc(db, "chats", chatId), {
        // adding new chats to the document
        messages: arrayUnion({ //  use arrayUnion to append the messages to the chat array
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });
      const userIDs = [currentUser.id, user.id]; // update the information for both sender and receiver
      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userChats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData[chatIndex].lastMessage = text; // update the last message
          userChatsData[chatIndex].isSeen =
            id === currentUser.id ? true : false; // if currentUser opens the msg then isSeen will be true else false
          userChatsData[chatIndex].updatedAt = Date.now(); // time of the lastMessage sent

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats, // updating the chats document by appending the last Message sent
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Manoj</span>
            <p>I am a Developer.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="centre">
        {chat?.messages?.map((message) => (
          <div className="message" key={message?.createdAt}>
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              {/* <span>1 min ago</span>  */}
            </div>
          </div>
        ))}
        <div ref={endRef}></div>{" "}
        {/*"ref" is used to create a reference to a DOM element in react. */}
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        {/* The onChange Function is used to return the text entered by the user in the input box, e.target.value returns the value(text) entered. */}
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => {
              setOpenEmoji(!openEmoji);
            }}
          />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
            {/*The "open" function is used to display/Not display the html elements, onEmojiClick Event gets the selected emoji by the user */}
          </div>
        </div>
        <button className="sendButton" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
