# Class 类

:::tip
在面向对象的编程中，类（Class）是一个用于创建对象，为状态（成员变量）和行为实现（成员函数或方法）提供初始值的可扩展程序代码模板。ES6 引入了类这个概念，通过 class 关键字可以定义类，该关键字的出现使得其在对象写法上更加清晰，更像是一种面向对象的语言。
:::

## 什么是类

类可以看做是构造函数的另一种写法，类实质上就是一个函数，类自身指向的就是构造函数，例如

```js
class Point {
  // ...
}

typeof Point; // "function"
Point === Point.prototype.constructor; // true
```

构造函数的 prototype 属性，在 Class 上面继续存在，类的所有方法都定义在类的 prototype 属性上面。因此，可以通过 Object.assign 方法向类添加多个方法:

```js
class Point {
  constructor() {
    // ...
  }
}

Object.assign(Point.prototype, {
  toString() {},
  toValue() {}
});
```

## 属性方法

### constructor 方法

constructor 方法是类的默认方法，通过 new 命令生成对象实例时，**自动调用该方法**，默认返回实例对象（即 this），完全可以指定返回另外一个对象。

```js
class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo; // false，constructor返回了null
```

如果子类没有定义 constructor 方法，这个方法会被默认添加，也就是说，不管有没有显式定义，任何一个子类都有 constructor 方法。

```js
constructor(...args) {
  super(...args);
}
```

## 类的继承

Class 之间可以通过关键字 extends 实现继承，可以继承父类的所有属性和方法，例如，

```javascript
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```

ColorPoint 类的 constructor 方法和 toString 方法，都出现了 super 关键字，它在这里**表示父类的构造函数**，用来新建父类的 this 对象。如果不调用 super 方法，子类就得不到 this 对象。

## 类的 prototype 属性和\_proto\_属性

在 ES5 中，每一个对象都有\_proto\_属性，指向对应的构造函数的 prototype 属性，即

1. 每个函数都有一个显式原型 **prototype**
2. 每个实例对象都有一个隐式原型 **\_proto\_**
3. 实例对象的隐式原型的值指向其对应的构造函数的显式原型的值

Class 作为构造函数的语法糖，同时有 prototype 属性和\_proto\_属性，因此同时存在两条继承链。

1. 子类的\_proto\_属性，表示构造函数的继承，总是指向父类。
2. 子类 prototype 属性的\_proto\_属性，表示方法的继承，总是指向父类的 prototype 属性。

```js
class A {}
class B extends A {}

B._proto_ === A; // true
B.prototype._proto_ === A.prototype; // true
```

## This 指向

类的方法内部如果含有 this，它默认指向类的实例，例如，

```js
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName();
// TypeError: Cannot read property 'print' of undefined
```

上面代码中，printName 方法中的 this，默认指向 Logger 类的实例。但是，如果将这个方法提取出来单独使用，this 会指向该方法运行时所在的环境，因为找不到 print 方法而导致报错。

解决办法：

**1. 在构造方法中绑定 this**

```js
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
  // ...
}
```

**2. 使用箭头函数**

```js
class Logger {
  constructor() {
    this.printName = (name = 'there') => {
      this.print(`Hello ${name}`);
    };
  }
  // ...
}
```

## 私有变量与方法

在 ES2019 中发布了使用 # 号来定义私有成员的规范。

```js
class Foo {
  #a; // 私有属性
  #privateMethod() {
    return 'hello world';
  }
  constructor(a, b) {
    this.#a = a;
    this.b = b;
  }
}
const foo = new Foo(1, 2);
console.log(foo.#a);
// Uncaught SyntaxError: Private field '#a' must be declared in an enclosing class
console.log(foo.#privateMethod);
// Uncaught SyntaxError: Private field '#privateMethod' must be declared in an enclosing class
```
