/*
 * @Author: 李凡
 * @Email: 535536456@qq.com
 * @Date: 2020-07-21 13:20:41
 * @LastEditors: 李凡
 * @LastEditTime: 2020-07-21 13:21:02
 * @Description:
 */
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(vchild) {
    console.log("ElementWrapper---appendChild", this.root);
    vchild.mountTo(this.root);
  }

  mountTo(parent) {
    console.log("ElementWrapper---mountTo", this.root);
    parent.appendChild(this.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }

  mountTo(parent) {
    console.log("TextWrapper---mountTo", this.root);
    parent.appendChild(this.root);
  }
}

export class Component {
  constructor() {
    this.children = [];
  }

  setAttribute(name, value) {
    console.log("Component---setAttribute", this);
    this[name] = value;
  }

  appendChild(vchild) {
    console.log("Component---appendChild", this);
    this.children.push(vchild);
  }

  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
    console.log("Component---mountTo", vdom);
  }
}

export let ToyReact = {
  createElement(type, attributes, ...children) {
    console.log(type, children);
    let element;
    if (typeof type === "string") {
      element = new ElementWrapper(type);
    } else {
      element = new type();
    }

    for (let name in attributes) {
      element.setAttribute(name, attributes[name]);
    }

    const insertChildren = (children) => {
      for (let child of children) {
        if (typeof child === "object" && child instanceof Array) {
          insertChildren(child);
        } else {
          if (
            !(child instanceof Component) &&
            !(child instanceof ElementWrapper) &&
            !(child instanceof TextWrapper)
          ) {
            child = String(child);
          }

          if (typeof child === "string") {
            child = new TextWrapper(child);
          }

          element.appendChild(child);
        }
      }
    };

    insertChildren(children);
    return element;
  },

  render(vdom, element) {
    vdom.mountTo(element);
  },
};
