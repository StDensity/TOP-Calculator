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

const operate = (a, b, operator) => {
   console.log(a, b, operator);
   if (operator === "+") {
      console.log("hi");
      num1 = add(a, b);
   } else if (operator === "-") {
      console.log("subtraction", num1);
      num1 = subtract(a, b);
   } else if (operator === "*") {
      num1 = multiply(a, b);
   } else if (operator === "/") {
      if (b === 0) {
         num1 = "Division by 0 is not possible";
      } else {
         num1 = divide(a, b);
      }
   }
   setDisplayValue(num1);
   //    operator === null;
   num2 = 0;
};

const handleSpecialButtons = (op) => {
   if (op === "clear") {
      num1 = 0;
      num2 = 0;
      operator = null;
      setDisplayValue("Hello");
   } else if (op === "=") {
      operate(num1, num2, operator);
      operator = null;
   }
};

const setDisplayValue = (str) => {
   if (!isNaN(parseInt(str))) {
      str = Math.round(str * 100000) / 100000;
   }
   const displayArea = document.querySelector("#display");
   displayArea.textContent = str;
};

const handleNumberButtonPress = (num) => {
   if (operator === null) {
      num1 = num1 * 10 + num;
      setDisplayValue(num1);
   } else {
      num2 = num2 * 10 + num;
      setDisplayValue(num2);
   }
};

const handleOperatorButtonPress = (op) => {
   if (operator === null) {
      operator = op;
      setDisplayValue(operator);
   } else {
      operate(num1, num2, operator);
      operator = op;
      //   setDisplayValue(operator)
   }
};

const OPERATORS = "+-*/";
let num1 = 0;
let num2 = 0;
let operator = null;
let displayValue = "Welcome";

// GUI

const displayArea = document.querySelector("#display");
displayArea.textContent = displayValue;

// Buttons

const one = document.querySelector("#number1");
one.addEventListener("click", () => {
   handleNumberButtonPress(1);
});

const two = document.querySelector("#number2");
two.addEventListener("click", () => {
   handleNumberButtonPress(2);
});

const three = document.querySelector("#number3");
three.addEventListener("click", () => {
   handleNumberButtonPress(3);
});

const four = document.querySelector("#number4");
four.addEventListener("click", () => {
   handleNumberButtonPress(4);
});

const five = document.querySelector("#number5");
five.addEventListener("click", () => {
   handleNumberButtonPress(5);
});

const six = document.querySelector("#number6");
six.addEventListener("click", () => {
   handleNumberButtonPress(6);
});

const seven = document.querySelector("#number7");
seven.addEventListener("click", () => {
   handleNumberButtonPress(7);
});

const eight = document.querySelector("#number8");
eight.addEventListener("click", () => {
   handleNumberButtonPress(8);
});

const nine = document.querySelector("#number9");
nine.addEventListener("click", () => {
   handleNumberButtonPress(9);
});

const zero = document.querySelector("#number0");
zero.addEventListener("click", () => {
   handleNumberButtonPress(0);
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
   handleSpecialButtons("clear");
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
   handleSpecialButtons("=");
});

const addButton = document.querySelector("#sum");
addButton.addEventListener("click", () => {
   handleOperatorButtonPress("+");
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => {
   handleOperatorButtonPress("-");
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => {
   handleOperatorButtonPress("*");
});

const DivideButton = document.querySelector("#divide");
DivideButton.addEventListener("click", () => {
   handleOperatorButtonPress("/");
});
