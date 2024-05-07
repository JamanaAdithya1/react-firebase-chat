import "./Chat.css"

const Chat = () => {
  return (
    <div className="Chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" srcset="" />
          <div className="texts">
            <span>Manoj</span>
            <p>I am a Developer.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" srcset="" />
          <img src="./video.png" alt="" srcset="" />
          <img src="./info.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Chat