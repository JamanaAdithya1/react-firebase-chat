import { useState } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react"; // A frameWork in react to get the emojis.

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false); // To control the opening and closing of the Emoji Tab.
  const [text, setText] = useState(""); //To fetch the input typed by the user in the sendMessage input box.
  console.log(text);  
  const handleEmoji = (e) => { // To append the emoji selected by the user with the current text entered in the input box.
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false); 
  }
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
      <div className="centre"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message" value={text} onChange={(e) => {setText(e.target.value)}}/> 
        {/* The onChange Function is used to return the text entered by the user in the input box, e.target.value returns the value(text) entered. */}
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => {setOpenEmoji(!openEmoji)}} />
          <div className="picker">
            <EmojiPicker open = {openEmoji} onEmojiClick={handleEmoji}/> 
            {/*The "open" function is used to display/Not display the html elements, onEmojiClick Event gets the selected emoji by the user */}
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
