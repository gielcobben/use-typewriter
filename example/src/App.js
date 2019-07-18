import React, { useState } from "react";
import useTypewriter from "use-typewriter";
import "./App.css";

const App = () => {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(80);
  const [wordDelay, setWordDelay] = useState(2000);
  const [eraseDelay, setEraseDelay] = useState(1000);

  const currentWord = useTypewriter({
    words: ["Hello", "World", "This is", "a hook"],
    min,
    max,
    wordDelay,
    eraseDelay
  });

  return (
    <div className="wrapper">
      <div className="typewriter">
        {currentWord} <span className="cursor" />
      </div>
      <div className="controls">
        <div className="slider">
          <label>Minimum:</label>
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={min}
            style={{
              background: `linear-gradient(to right, #05F 0%, #05F ${min}%, rgba(255, 255, 255, 0.3) ${min}%, rgba(255, 255, 255, 0.3) 100%)`
            }}
            onChange={event => setMin(event.target.value)}
          />
        </div>
        <div className="slider">
          <label>Maximum:</label>
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={max}
            style={{
              background: `linear-gradient(to right, #05F 0%, #05F ${max}%, rgba(255, 255, 255, 0.3) ${max}%, rgba(255, 255, 255, 0.3) 100%)`
            }}
            onChange={event => setMax(event.target.value)}
          />
        </div>
        <div className="slider">
          <label>Word delay:</label>
          <input
            type="range"
            min={0}
            max={10000}
            step={1000}
            value={wordDelay}
            style={{
              background: `linear-gradient(to right, #05F 0%, #05F ${wordDelay /
                100}%, rgba(255, 255, 255, 0.3) ${wordDelay /
                100}%, rgba(255, 255, 255, 0.3) 100%)`
            }}
            onChange={event => setWordDelay(event.target.value)}
          />
        </div>
        <div className="slider">
          <label>Erase delay:</label>
          <input
            type="range"
            min={0}
            max={10000}
            step={1000}
            value={eraseDelay}
            style={{
              background: `linear-gradient(to right, #05F 0%, #05F ${eraseDelay /
                100}%, rgba(255, 255, 255, 0.3) ${eraseDelay /
                100}%, rgba(255, 255, 255, 0.3) 100%)`
            }}
            onChange={event => setEraseDelay(event.target.value)}
          />
        </div>
      </div>
      <ul>
        <li>
          <a
            href="https://github.com/gielcobben/use-typewriter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#FFF"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?text=Checkout%20the%20useTypwriter%20hook%20by%20%40gielcobben%20on%20%40github%20%E2%80%93%20https%3A%2F%2Fgithub.com%2Fgielcobben%2Fuse-typewriter"
            target="popup"
            rel="noopener noreferrer"
            onClick={event => {
              event.preventDefault();

              window.open(
                "https://twitter.com/intent/tweet?text=Checkout%20the%20useTypwriter%20hook%20by%20%40gielcobben%20on%20%40github%20%E2%80%93%20https%3A%2F%2Fgithub.com%2Fgielcobben%2Fuse-typewriter",
                "popup",
                "width=600,height=250"
              );
              return false;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#FFF"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
