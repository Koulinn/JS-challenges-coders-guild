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
  //   console.log(
  //     `The result of squaring the number ${num} is ${Math.pow(num, 2)}.`
  //   );
  return Math.pow(num, 2);
};

// console.log(squareNumber(2)) // 4
// console.log(squareNumber(3)) // 9
// console.log(squareNumber(4)) // 16

const halfNumber = (num) => {
  const half = num / 2;
  //   console.log(`Half of ${num} is ${num / 2}.`);
  return half;
};

// console.log(halfNumber(2)); //1
// console.log(halfNumber(4)); // 2
// console.log(halfNumber(100)); //50

const percentOf = (num1, num2) => {
  return `${num1} is ${((num1 / num2) * 100).toFixed(2)}% of ${num2}.`;
};

// console.log(percentOf(2, 8));

const areaOfCircle = (radius) => {
  const area = 3.14 * (radius * radius);
  //   console.log(
  //     `The area for a circle with radius ${radius} is ${area.toFixed(2)}.`
  //   );
  return area;
};

// console.log(areaOfCircle(2));

const lastFunction = (num) => {
  const half = halfNumber(num);
  const squareOfHalf = squareNumber(half);
  const area = areaOfCircle(squareOfHalf);
  const percent = percentOf(parseFloat(area), parseFloat(squareOfHalf));
  return percent;
};

// lastFunction(4);
// lastFunction(6);
// lastFunction(10);

const fixStart = (string) => {
  const splittedString = string.split("");
  const modifiedString = splittedString.flatMap((currentValue, index) => {
    return currentValue === splittedString[0] && index > 0 ? "*" : currentValue;
  });

  return modifiedString.join("");
};

// console.log(fixStart("amhsddddaaaahd"));

const tellFortune = (jobTitle, geo, partnerName, children) => {
  `You will be a ${jobTitle} in ${geo}, and married to ${partnerName} with ${children} kids.`;
};

const pluralise = (num, noun) => {
  return `${num}, ${noun}s`;
};

// console.log(pluralise(3, "cat"));
// console.log(pluralise(6, "dog"));

const mixUp = (str1, str2) => {
  const mixedStr1 = str2[0] + str2[1] + str1.slice(2, str1.length);
  const mixedStr2 = str1[0] + str1[1] + str2.slice(2, str1.length);

  return mixedStr1 + ", " + mixedStr2;
};

console.log(mixUp("cake", "dog"));
