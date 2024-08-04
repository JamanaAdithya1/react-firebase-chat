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

const App = () => {

  const user = false;
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user)
    })

    return ()=> {
      unSub();
    }
  }, [])

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
