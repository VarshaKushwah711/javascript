//9.You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the 
// average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.
// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];
//output:-// [ 
//     { category: 'Clothes', average: 55 },
//     { category: 'Electronics', average: 55 }
// ]

const products = [
      { name: "Product 1", price: 20, category: "Electronics" },
      { name: "Product 2", price: 30, category: "Clothes" },
      { name: "Product 3", price: 40, category: "Electronics" },
      { name: "Product 4", price: 50, category: "Clothes" },
      { name: "Product 5", price: 60, category: "Clothes" },
      { name: "Product 6", price: 70, category: "Electronics" },
      { name: "Product 7", price: 80, category: "Clothes" },
      { name: "Product 8", price: 90, category: "Electronics" },
    ];

let newArr = [...new Set(products.map(i=>i.category))];

let result = newArr.map(c =>{

    const categoryProducts = products.filter(p => p.category === c);//for grouping 
    //console.log(categoryProducts)
    const totalPrice = categoryProducts.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = totalPrice / categoryProducts.length;
    return { c, average: averagePrice };

  }).filter(item => item.average > 50);


console.log(result);
console.log(newArr);


