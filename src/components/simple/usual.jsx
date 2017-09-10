import React, { Component } from 'react';
import simpleHoc from './simple-hoc';
import propsProxyHoc from './props-proxy-hoc';
import refHoc from './ref-hoc';
import { compose } from '../../utils';

// 注意我这里写的顺序。

@refHoc
export default class Usual extends Component {

  constructor() {
    super();
    this.state = {
      usual: 'usual',
    }
  }

  render() {
    console.log(this.props, this.state, 'props');
    var fn1 = val => 'fn1-' + val
      var fn2 = val => 'fn2-' + val
      var fn3 = val => 'fn3-' + val

      console.log(compose(fn1,fn2,fn3)('测试'))
    return (
      <div>
        Usual
      </div>
    )
  }
}

// export default compose(simpleHoc, propsProxyHoc, refHoc)(Usual);
