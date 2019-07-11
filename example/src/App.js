import React from "react";
import useTypewriter from "use-typewriter";

const App = () => {
  const currentWord = useTypewriter({ words: ["this", "is a", "test"] });
  return <div>{currentWord}</div>;
};

export default App;
