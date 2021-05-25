export var order1 = {
  id: 1,
  title: "Ajay",
  price: 100,
};
export var printOrder = () => { return order1; }
export var getPrice = () => { return order1.price; }
console.log("Print Order : "+JSON.stringify(printOrder()));
console.log("Get price : "+getPrice());
export var orderCopy = (<any>Object).assign({},order1);
console.log("order copy : "+JSON.stringify(orderCopy));