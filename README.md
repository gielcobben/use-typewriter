# Hook: Typewriter

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add use-typewriter
```

or NPM:

```sh
npm install use-typewriter --save
```

## Usage

### Basic

```tsx
import React from "react";
import useTypewriter from "use-typewriter";

const Component = () => {
  const currentWord = useTypewriter({
    words: ["Hello World"]
  });

  return <div>{currentWord}</div>;
};
```

## API

### Options

| Name       | Type     | Default | Required | Description                                    |
| ---------- | -------- | ------- | -------- | ---------------------------------------------- |
| words      | string[] | []      | Yes      | An array of words you want to be typed.        |
| min        | number   | 10      | No       | Minimum amount in ms of delay between letters. |
| max        | number   | 80      | No       | Maximum amount in ms of delay between letters. |
| wordDelay  | number   | 2000    | No       | Delay in ms between words in the array.        |
| eraseDelay | number   | 1000    | No       | Delay in ms before earsing the word            |

## License

**use-typewriter** is MIT licensed.
