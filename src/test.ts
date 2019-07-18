import useTypewriter, { typewriterProps } from "./";

describe("useTypewriter", () => {
  it("Should return currentWord", () => {
    const currentWord = useTypewriter({ words: ["Giel"] });
    console.log("TEST", currentWord);
  });
});
