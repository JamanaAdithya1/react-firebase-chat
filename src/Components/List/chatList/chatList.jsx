import { useState } from "react"
import "./chatList.css"

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="ChatList">
      <div className="search">
        <div className="searchBar">
           <img src="/search.png" alt="" srcset="" />
           <input type="text" placeholder="Search" />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" srcset="" className="add" onClick={() => setAddMode(!addMode)}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" srcset="" />
        <div className="texts">
          <span>Manoj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" srcset="" />
        <div className="texts">
          <span>Manoj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" srcset="" />
        <div className="texts">
          <span>Manoj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" srcset="" />
        <div className="texts">
          <span>Manoj</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" srcset="" />
        <div className="texts">
          <span>Manoj</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList