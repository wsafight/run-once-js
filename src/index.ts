interface RunOnceOptions {
  /** 延迟时间 */
  delay?: number;
  /** 等待函数完成 */
  waitFunDone?: boolean;
}

interface RunOnceParams {
  /** 执行函数 */
  func: (...params: any[]) => any;
  /** 函数设置 */
  options?: RunOnceOptions;
}

const DEFAULT_DELAY = 333;
const NOOP = () => undefined;

const DEFAULT_OPTIONS: RunOnceOptions = {
  delay: DEFAULT_DELAY,
  waitFunDone: false,
};

const runOnce = (
  { func = NOOP, options }: RunOnceParams = {
    func: NOOP,
    options: {
      delay: DEFAULT_DELAY,
      waitFunDone: false,
    },
  },
) => {
  const { delay = DEFAULT_DELAY, waitFunDone } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  let isLocked = false;

  const fixedDelay = typeof delay === 'number' ? delay : DEFAULT_DELAY;

  // 返回一个新的函数，该函数将作为包装后的Func
  return async (...params: any) => {
    if (isLocked) {
      return;
    }

    isLocked = true;

    try {
      if (waitFunDone) {
        await func(...params);
      } else {
        func(...params);
      }
    } catch {
      isLocked = false;
    }

    // 没有锁定就直接返回
    if (!isLocked) {
      return;
    }

    setTimeout(() => {
      isLocked = false;
    }, fixedDelay);
  };
};

export { runOnce };

export default runOnce;
