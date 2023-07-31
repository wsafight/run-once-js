import { runOnce } from '../src';

describe('Default cases', () => {
  test('hello world test', () => {
    let i = 0;
    const exec = (params: any, params1: any) => {
      i++;
      window.console.log(params, params1);
    };
    const run = runOnce({
      func: exec,
    });

    run(2233, 3343);
    run(2233);
    run(2233);
    expect(i).toBe(1);
  });
});
