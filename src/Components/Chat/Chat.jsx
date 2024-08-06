import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react"; // A frameWork in react to get the emojis.
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
const Chat = () => {
  const [chat, setChat] = useState();
  const [openEmoji, setOpenEmoji] = useState(false); // To control the opening and closing of the Emoji Tab.
  const [text, setText] = useState(""); //To fetch the input typed by the user in the sendMessage input box.

  const endRef = useRef(null); // useRef(null) initializes the endref to null which means currently endRef isn't pointing to any DOM element.

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" }); // this function access the current element the endRef is pointing to which is the <div> tag and the scrollIntoView function scrolls the div from first to last in a smooth transition.
  });

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", "HSQYzWYYVXl2l1zGAqLe"),
      (res) => {
        setChat(res.data());
      }
    );

    return () => {
      unSub();
    };
  }, []);

  console.log(chat)

  const handleEmoji = (e) => {
    // To append the emoji selected by the user with the current text entered in the input box.
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
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
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Hello..! How are you.</p>
            <span>1 min ago</span> {/*The time of the Msg*/}
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Hello..! How are you.</p>
            <span>1 min ago</span> {/*The time of the Msg*/}
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/virat-kohli-061308633-16x9_0.jpg?VersionId=wwIZTrh1vnpjFczjwAJCROXi7evBNuNo&size=690:388"
              alt=""
            />
            <p>Hello..! How are you.</p>
            <span>1 min ago</span> {/*The time of the Msg*/}
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Hello..! How are you.</p>
            <span>1 min ago</span> {/*The time of the Msg*/}
          </div>
        </div>
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
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
