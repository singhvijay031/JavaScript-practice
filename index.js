// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i < num.length; i++) {
//   console.log(i * 2);
// }
const arr = ["Vijay", "Roshan", "Roshani", "Raju", "Shyam"];

arr.map((value, index, array) => {
  console.log(`The value of ${index} is ${value}.`);
  //   console.log(array);
});
