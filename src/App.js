import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(selector) {
    if (selector !== null) {
      const audio = document.getElementById(selector);
      if (audio !== null) {
        audio.play();
        setActiveKey(selector);
      }
    }
  }

  return (
    <>
      <div id="drum-machine">
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div
              className="drum-pad"
              id={drumPad.keyCode}
              onClick={() => {
                playSound(drumPad.text);
              }}
              key={drumPad.keyCode}
            >
              {drumPad.text}
              <audio
                src={drumPad.src}
                className="clip"
                id={drumPad.text}
              ></audio>
            </div>
          ))}
        </div>
        <div id="display">{activeKey}</div>
      </div>
    </>
  );
}

export default App;
