import Chat from "./Components/Chat/Chat";
import List from "./Components/List/List";
import Detail from "./Components/Detail/Detail";
import Login from "./Components/login/login";
import Notification from "./Components/notification/Notification";
import { useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { UnsupportedFeeMarketError } from "web3";
import { useChatStore } from "./lib/chatStore";

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
