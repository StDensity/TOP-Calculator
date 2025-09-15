const add = (num1, num2) => {
   return num1 + num2;
};

const subtract = (num1, num2) => {
   return num1 - num2;
};

const multiply = (num1, num2) => {
   return num1 * num2;
};

const divide = (num1, num2) => {
   return num1 / num2;
};

const operate = (num1, num2, operator) => {
   if (operator === "+") {
      return add(num1, num2);
   } else if (operate === "-") {
      return subtract(num1, num2);
   } else if (operator === "*") {
      return multiply(num1, num2);
   } else if (operator === "/") {
      return divide(num1, num2);
   }
};


let num1;
let num2;
let operator;

// GUI