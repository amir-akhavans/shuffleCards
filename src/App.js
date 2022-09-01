import React, { useState } from "react";

function App() {
  const [play, setPlay] = useState([]);

  const shuffle = () => {
    // Arrays of all elements
    const val1 = ["S", "D", "C", "H"];
    const val2 = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    // Cards will be placed in this array
    let all = [];

    // create a deck of cards
    for (let i = 0; i < val1.length; i++) {
      for (let j = 0; j < val2.length; j++) {
        let card = [`${val2[j]}${val1[i]}`];
        all.push(card);
      }
    }

    let play = [];
    for (let k = 0; k < 4; k++) {
      play[k] = ` Player ${k + 1}: ${
        all[Math.floor(Math.random() * all.length)]
      } - ${all[Math.floor(Math.random() * all.length)]}`;
    }
    setPlay(play);
  };

  return (
    <div>
      <br />
      <label style={{ marginBottom: 20, marginTop: 20 }}>
        Press the button to generate new cards
      </label>

      <button type="submit" onClick={shuffle}>
        Generate Card
      </button>
      <ul>
        {play.map((player) => (
          <li>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
