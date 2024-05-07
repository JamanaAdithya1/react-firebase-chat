import Chat from "./Components/Chat/Chat"
import List from "./Components/List/List"
import Detail from "./Components/Detail/Detail"

const App = () => {
  return (
    <div className='container'>
       <List />
       <Chat />
       <Detail />
    </div>
  )
}

export default App