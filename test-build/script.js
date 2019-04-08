"use strict";
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.greet = function (message) {
        console.log("Hello World");
    };
    return A;
}());
var a = new A();
a.greet('hello');
console.log("Hello World!");
