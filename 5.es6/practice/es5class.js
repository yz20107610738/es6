// prototype __proto__ constructor
// es5中没有类,只有构造函数,可以把一个函数当成类

// 用es5 来模拟一个es6 的类 1）判断当前这个调用方式是不是通过new 来调用

function define(target, protoProperties) {
    for (let i = 0; i < protoProperties.length; i++) {
      let property = protoProperties[i];
      Object.defineProperty(target, property.key, {
        configurable: true,
        enumerable: false,
        value: property.value
      });
    }
}

function _createClass(Constructor, protoProperties, staticProperties) {
  if (Array.isArray(protoProperties)) {
    define(Constructor.prototype, protoProperties);
  }
  if (Array.isArray(protoProperties)) {
    define(Constructor, staticProperties);
  }
}

var Animal = (function() {
  function Animal() {
    if (!(this instanceof Animal)) {
        throw new Error("not new")
    }
    this.name = "熊猫"
  }

  _createClass(Animal, [
      {
          key: "say",
          value: function(){
              console.log("say~~")
              return "saysay"
          }
      },
      {
          key: "eat",
          value: function(){
              console.log("eat")
          }
      }
  ],
  [
      {
          key: "a",
          value: function(){
            return 123
          }
      },
      {
          key: "b",
          value: 123
      }
  ]);

  return Animal;
})();



// console.log(Animal.a(), Animal.b)

let animal = new Animal();
console.log(animal.__proto__);