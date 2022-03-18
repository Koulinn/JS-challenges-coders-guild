let arr = [3, 7, "df", "3", 7, 8, "df", 23, 6, 2, 67, "g", "34", 12, 34, 5];

const calcAvg = (arr) => {
  let validNumbers = 0;
  const total = arr.reduce((prev, curr) => {
    if (!isNaN(curr)) {
      validNumbers++;
      return parseFloat(prev) + parseFloat(curr);
    } else {
      return prev;
    }
  }, 0);

  console.log(total / validNumbers);
  return total / validNumbers;
};

calcAvg(arr);
