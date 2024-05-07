import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="UserInfo">
        <div className="user">
            <img src="./avatar.png" alt="" srcset="" />
            <h2>Adithya</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt="" srcset="" />
            <img src="./video.png" alt="" srcset="" />
            <img src="./edit.png" alt="" srcset="" />
        </div>
    </div>
  )
}

export default UserInfo