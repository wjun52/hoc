const compose = (...funcs) => (component) => {
  if (funcs.lenght === 0) {
    return component;
  }
  const last = funcs[funcs.length - 1];
  return funcs.reduceRight((res, cur) => cur(res), last(component));
};

export {
  compose,
};

/*
//compose
其实compose是函数式编程中比较重要的一个方法。上面调用compose的时候可见是一个二阶函数。

const compose = (...funcs) => {

    //没有参数，那就返回一个function
    if (!funcs.length) {
        return arg => arg
    }
    //一个中间件，返回它
    if (funcs.length === 1) {
        return funcs[0];
    }
    // 最后一个
    var last = funcs[funcs.length -1];

    // 复制一份，除去last
    var rest = funcs.slice(0, -1);

    // 返回函数，可以接收store.dispatch。
    // reduceRight 反向迭代。

    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
}*/
