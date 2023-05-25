import { useState } from "react";
import { getDatabase } from "firebase/database";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");

  const db = getDatabase();
  const postListRef = ref(db, 'posts');
  const newPostRef = push(postListRef);
  set(newPostRef, {
      // ...
  });

  const sendChat = () => {
    const c = [...chats];
    c.push({ name, message: msg });
    setChats(c);
    setMsg("");
  };

  return (
    <div>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="Enter name to start"
            onBlur={(e) => setName(e.target.value)}
          ></input>
        </div>
      )}
      {name ? (
        <div>
          <h3>User: {name}</h3>
          <div className="chat-container">
            {chats.map((c) => (
              <div className={`container ${c.name === name ? "me" : ""}`}>
                <p className="chatbox">
                  <strong>{c.name} </strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="enter your chat"
            ></input>
            <button onClick={(e) => sendChat()}>Send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
