import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";

const UserInfo = () => {
  const {currentUser}= useUserStore();
  return (
    <div className="UserInfo">
        <div className="user">
            <img src={currentUser.avatar || "./avatar.png"} alt="" srcset="" />
            <h2>{currentUser.username} </h2>
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