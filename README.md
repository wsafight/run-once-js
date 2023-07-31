# run-once-js

Read this in other languages:
[English](https://github.com/wsafight/run-once-js/blob/main/README.EN.md)

包装运行一次函数。延迟若干毫秒后可以继续调用。

开发历程可以参考博客
[手写一个包装执行一次的高阶函数](https://github.com/wsafight/personBlog/issues/62)


## 安装

```bash
npm install run-once-js
```

或者

```bash
yarn add run-once-js
```

## 用法

### 参数

| 参数                | 说明                       | 类型                                             | 默认值       |
| :---------------- | :----------------------- | :--------------------------------------------- | :-------- |
|     func     |   执行函数       |                Function             |     () => void 0   |
|      options.delay       |         延迟多少毫秒后可继续执行             |                number             |      333   |
|      options.waitFunDone       |     等待函数执行完成(异步函数)             |                boolean             |      false   |


### 例子

```ts
import { runOnce } from 'run-once-js';

let i = 0;
const exec = (param1: any, param2: any) => {
  i++;
  window.console.log(param1, params2);
};

const run = runOnce({
  // 执行函数，必须要传递
  func: exec,
  options: {
    // 333 毫秒后可以继续执行
    delay: 333,
    // 是否等待异步函数
    waitFunDone: false
  }
});

// 执行
run(2233, 3343);
// 不会执行
run(2233);
// 不会执行
run(2233);
```

## Changelog

- 0.0.1 基本可用
