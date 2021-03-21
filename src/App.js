import React, { useState } from "react";
import Tweeter from "./twitter.svg";
import Tweet from "./Tweet";

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);
  const [users] = useState([
    {
      name: "Clorence",
      tag: "@clorence",
      message: "Sweet but Psycho",
      photo: Tweeter,
    },
    {
      name: "Campbell",
      tag: "@campbell",
      message: "I Love you",
      photo: Tweeter,
    },
    {
      name: "Brandon",
      tag: "@brandon",
      message: "Remember that you not alone",
      photo: Tweeter,
    },
    { name: "Boy", tag: "@boy", message: "Beautiful day", photo: Tweeter },
  ]);

  // const Increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };
  return (
    <div className="app">
      {/* <h1 className={isRed ? "red" : ""}>Change my Color !</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1> */}
      {users.map((user) => (
        <Tweet
          name={user.name}
          tag={user.tag}
          message={user.message}
          photo={user.photo}
        />
      ))}
    </div>
  );
}

export default App;
