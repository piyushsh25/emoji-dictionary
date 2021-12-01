import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🎄": "Christmas Tree",
  "🔥": "fire",
  "🐶": "dog",
  "🤩": "Excited",
  "😍": "Heart Face",
  "😇": "Halo"
};
var emojis = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");
  function emojiHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not in our DB";
    }
    setMeaning(meaning);
  }
  function emojiHandler(emojis) {
    var meaning = emojiDictionary[emojis];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <input onChange={emojiHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojis.map((emojis) => {
        return (
          <span
            onClick={() => emojiHandler(emojis)}
            style={{ fontSize: "2rem", margin: "1rem", cursor: "pointer" }}
            key={emojis}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}
export default App;
