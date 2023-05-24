import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Dammy User");
  const [chat setChat] = useState([{name: user1, message:"hi"}]);
  return (
    <div>
      <h3>User: {name}</h3>
      <div className='chat-container'>

        {<div className='container me'>
        <p className='chatbox'>
          <strong>name: </strong>
          <span>chat message</span>
        </p>
        </div>}
        
      </div>
      <div className='btm'>
        <input type="text" placeholder='enter your chat'></input>
        <button>Send</button>
      </div>
    </div>
  );
}

export default App;
