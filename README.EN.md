# run-once-js

Wraps a function that runs once. The call can continue after a delay of several milliseconds.


## Install

```bash
npm install run-once-js
```

Or

```bash
yarn add run-once-js
```

## Usage

### parameter

| parameter | desc | type | default |
| :-- | :--| :-- | :-- |
|     func     |   execute function       |                Function             |     () => void 0   |
|      options.delay       |        How many milliseconds to delay before continuing execution           |                number             |      333   |
|      options.waitFunDone       |     Wait for function execution to complete (asynchronous function)      |                boolean             |      false   |



### example

```ts
import { runOnce } from 'run-once-js';

let i = 0;
const exec = (param1: any, param2: any) => {
  i++;
  window.console.log(param1, params2);
};

const run = runOnce({
  // The execution function must be passed
  func: exec,
  options: {
    // Execution can continue after 333 ms
    delay: 333,
    // Whether to wait for the async function
    waitFunDone: false
  }
});

// execute
run(2233, 3343);
// will not execute
run(2233);
// will not execute
run(2233);
```

## Changelog

- 0.0.1 basically available
