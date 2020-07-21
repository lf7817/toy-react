/*
 * @Author: 李凡
 * @Email: 535536456@qq.com
 * @Date: 2020-07-21 13:13:44
 * @LastEditors: 李凡
 * @LastEditTime: 2020-07-21 13:21:50
 * @Description:
 */

import { ToyReact, Component } from "./ToyReact.js";

class My extends Component {
  render() {
    return <div>{this.children}</div>;
  }
}

let a = (
  <My name="1">
    <span>toy</span>
    <span>react</span>
  </My>
);
ToyReact.render(a, document.body);
