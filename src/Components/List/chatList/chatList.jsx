import "./chatList.css"

const ChatList = () => {
  return (
    <div className="ChatList">
      <div className="search">
        <div className="searchBar">
           <img src="/search.png" alt="" srcset="" />
           <input type="text" placeholder="Search" />
        </div>
        <img src="./plus.png" alt="" srcset="" />
      </div>
    </div>
  )
}

export default ChatList