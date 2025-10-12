let products = [
  { name: "Laptop", price: 900, stock: 20 },
  { name: "Mouse", price: 25, stock: 100 },
  { name: "Monitor", price: 150, stock: 50 },
  { name: "Keyboard", price: 250, stock: 40 },
  { name: "Headphones", price: 200, stock: 45 },
];

console.table(products);

let Afforatble = products.filter((P) => P.price < 100);
console.log(Afforatble);

let average = products.reduce((total, products) => total + products.price, 0);
console.log(average / products.length);

let productName = products.map((p) => p.name);
console.log(productName);

let totalStocks = products.reduce((total, stock) => total + stock.stock, 0);
console.log(totalStocks);


