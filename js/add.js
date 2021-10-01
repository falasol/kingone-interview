const add1 = (num1, num2) => {
  return num1 + num2;
};

const add2 = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

console.log(add1(2, 5));
console.log(add2(2)(5));
