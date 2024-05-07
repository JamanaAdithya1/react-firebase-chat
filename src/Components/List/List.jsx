import "./List.css"
import UserInfo from "./userInfo/userInfo"
import ChatList from "./chatList/chatList"

const List = () => {
  return (
    <div className="List">
        <UserInfo/>
        <ChatList/>
    </div>
  )
}

export default List