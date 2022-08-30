//1
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];

  const totalOrders = orders.reduce((sum, order) => {
    console.log("current values:", sum, order);
    return sum + order.amount; 
  }, 0);


console.log(totalOrders)


//2

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
const modifiedArray = arrayOfNumbers.map(el => el + 1);
console.log(modifiedArray)

//3
function filterEvens(array) {
    return array.filter(el => el % 2 === 0);
}
console.log (filterEvens([1,2,3,11,12,13]))
console.log(filterEvens([22,2,31,110,6,13]))