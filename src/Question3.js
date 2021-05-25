"use strict";
exports.__esModule = true;
exports.orderCopy = exports.getPrice = exports.printOrder = exports.order1 = void 0;
exports.order1 = {
    id: 1,
    title: "Ajay",
    price: 100
};
var printOrder = function () { return exports.order1; };
exports.printOrder = printOrder;
var getPrice = function () { return exports.order1.price; };
exports.getPrice = getPrice;
console.log("Print Order : " + JSON.stringify(exports.printOrder()));
console.log("Get price : " + exports.getPrice());
exports.orderCopy = Object.assign({}, exports.order1);
console.log("order copy : " + JSON.stringify(exports.orderCopy));
