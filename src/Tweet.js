import React from "react";
import love from "./icons8-love-48.png";
import retweet from "./icons8-retweet-32.png";
import reply from "./icons8-twitter-reply-32.png";
import "./App.css";

function Tweet({ name,tag, message ,photo}) {
  return (
    <div className="tweet">
      <div className="profile">
        <img src={photo} className="pic" alt="//add-next"></img>
        <div>
          <h3 className="name">{name}</h3>
          <h3 className="tag">{tag}</h3>
        </div>
      </div>
      <p className="message">{message}</p>
      <div className="line">
        <img src={reply} className="like" alt="//add-next"></img>
        <img src={love} className="like" alt="//add-next"></img>
        <img src={retweet} className="like" alt="//add-next"></img>
      </div>
    </div>
  );
}

export default Tweet;
