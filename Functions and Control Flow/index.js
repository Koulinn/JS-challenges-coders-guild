const randomNumber1 = Math.floor(Math.random() * 101);
const randomNumber2 = Math.floor(Math.random() * 101);

const checkBigger = (num1, num2) => {
  if (typeof num1 !== "number") {
    return "Invalid input num1 it needs to be a number.";
  } else if (typeof num2 !== "number") {
    return "Invalid input num2 it needs to be a number.";
  } else if (num1 === num2) {
    return "They are equals";
  } else if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else {
    return `${num2} is greater than ${num1}`;
  }
};

// console.log(checkBigger('2', 5))
// console.log(checkBigger(2, '5'))
// console.log(checkBigger(2, 5))
// console.log(checkBigger(5, 2))
// console.log(checkBigger(2, 2))

// Calculator

const squareNumber = (num) => {
  return `The result of squaring the number ${num} is ${Math.pow(num, 2)}.`;
};

// console.log(squareNumber(2)) // 4
// console.log(squareNumber(3)) // 9
// console.log(squareNumber(4)) // 16

const halfNumber = (num) => {
  return `Half of ${num} is ${num / 2}.`;
};

console.log(halfNumber(2)); //1
console.log(halfNumber(4)); // 2
console.log(halfNumber(100)); //50

const percentOf = (num1, num2) => {
  return `${num2} is ${((num2 / num1) * 100).toFixed(2)}% of ${num1}.`;
};

console.log(percentOf(10, 11));

const areaOfCircle = (radius) => {
  return `${num2} is ${((num2 / num1) * 100).toFixed(2)}% of ${num1}.`;
};
