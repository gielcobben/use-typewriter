import React from "react";
import useTypewriter from "use-typewriter";
import "./App.css";

const App = () => {
  const currentWord = useTypewriter({
    words: ["Hello World.", "This is a hook."]
  });

  return (
    <div className="wrapper">
      {currentWord} <span className="cursor" />
    </div>
  );
};

export default App;
