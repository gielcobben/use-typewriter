import * as React from "react";

export type typewriterProps = {
  words: string[];
  min?: number;
  max?: number;
  wordDelay?: number;
  eraseDelay?: number;
};

const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const nextFrame = () => {
  return new Promise(resolve => {
    requestAnimationFrame(resolve);
  });
};

const randomDelay = async ({ min, max }: { min: number; max: number }) => {
  const delay = Math.random() * (max - min) + min;
  const startTime = performance.now();

  while (performance.now() - startTime < delay) {
    await nextFrame();
  }
};

export default ({
  words = [],
  min = 10,
  max = 80,
  wordDelay = 2000,
  eraseDelay = 1000
}: typewriterProps) => {
  const [currentWord, setCurrentWord] = React.useState(0);
  const [word, setWord] = React.useState("");
  const string = words[currentWord];

  React.useEffect(() => {
    const erase = async () => {
      for (let i = 0; i < string.length; i++) {
        await randomDelay({ min, max });
        setWord((word: string) => word.slice(0, word.length - 1));

        if (i === string.length - 1) {
          await delay(eraseDelay);
          setCurrentWord(currentWord =>
            currentWord === words.length - 1 ? 0 : currentWord + 1
          );
        }
      }
    };

    (async () => {
      for (let i = 0; i < string.length; i++) {
        await randomDelay({ min, max });
        setWord((word: string) => word + string.charAt(i));

        if (i === string.length - 1) {
          await delay(wordDelay);
          erase();
        }
      }
    })();
  }, [currentWord]);

  return word;
};
