import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Dammy User");
  return (
    <div>
      <h1>User: {name}</h1>
      <div className='chat-container'>
        <div className='container'>
        <p className='chatbox'>
          <strong>name: </strong>
          <span>chat message</span>
        </p>
        </div>
        <div className='container me'>
        <p className='chatbox'>
          <strong>name: </strong>
          <span>chat message</span>
        </p>
        </div>
      </div>
    </div>
  );
}

export default App;
