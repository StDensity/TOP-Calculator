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
   if (operator === "+") {
      num1 = add(a, b);
   } else if (operator === "-") {
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
   num1 = Math.round(num1 * 100000) / 100000;

   setDisplayValue(num1);
   num2 = 0;
};

const disableFloatButton = (state) => {
   floatButton.disabled = state;
};

const handleSpecialButtons = (button) => {
   if (button === "clear") {
      num1 = 0;
      num2 = 0;
      operator = null;
      disableFloatButton(false);
      setDisplayValue(num1);
   } else if (button === "=") {
      operate(num1, num2, operator);
      operator = null;
      disableFloatButton(false);
   } else if (button === ".") {
      if (operator === null) {
         num1 = num1.toString() + ".";
         setDisplayValue(num1);
         disableFloatButton(true);
      } else {
         num2 = num2.toString() + ".";
         setDisplayValue(num2);
         disableFloatButton(true);
      }
   } else if (button === "backSpace") {
      if (operator === null) {
         num1 = num1.toString();
         if (
            num1.slice(-1) === "." ||
            num1.substring(num1.length - 2, num1.length - 1) === "."
         ) {
            disableFloatButton(false);
         }
         num1 = parseFloat(num1.slice(0, -1));
         //  if num1 is empty
         if (!num1) {
            num1 = 0;
         }
         setDisplayValue(num1);
      } else {
         num2 = num2.toString();
         if (
            num2.slice(-1) === "." ||
            num2.substring(num2.length - 2, num2.length - 1) === "."
         ) {
            disableFloatButton(false);
         }
         num2 = parseFloat(num2.slice(0, -1));
         //  if num2 is empty
         if (!num2) {
            num1 = 0;
         }
         setDisplayValue(num2);
      }
   }
};

const setDisplayValue = (str) => {
   const displayArea = document.querySelector("#display");
   displayArea.textContent = str;
};

const handleNumberButtonPress = (num) => {
   if (operator === null) {
      num1 = parseFloat(num1.toString() + num);
      setDisplayValue(num1);
   } else {
      num2 = parseFloat(num2.toString() + num);
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
   disableFloatButton(false);
};

let num1 = 0;
let num2 = 0;
let operator = null;
let displayValue = 0;

// GUI

const displayArea = document.querySelector("#display");
displayArea.textContent = displayValue;

const body = document.querySelector("body");
body.addEventListener("keydown", (e) => {
   if (e.key == 1) {
      handleNumberButtonPress(1);
   } else if (e.key == 2) {
      handleNumberButtonPress(2);
   } else if (e.key == 3) {
      handleNumberButtonPress(3);
   } else if (e.key == 4) {
      handleNumberButtonPress(4);
   } else if (e.key == 5) {
      handleNumberButtonPress(5);
   } else if (e.key == 6) {
      handleNumberButtonPress(6);
   } else if (e.key == 7) {
      handleNumberButtonPress(7);
   } else if (e.key == 8) {
      handleNumberButtonPress(8);
   } else if (e.key == 9) {
      handleNumberButtonPress(9);
   } else if (e.key == 0) {
      handleNumberButtonPress(0);
   } else if (e.key == "+") {
      handleOperatorButtonPress("+");
   } else if (e.key == "-") {
      handleOperatorButtonPress("-");
   } else if (e.key == "*") {
      handleOperatorButtonPress("*");
   } else if (e.key == "/") {
      handleOperatorButtonPress("/");
   } else if (e.key == "c") {
      handleSpecialButtons("clear");
   } else if (e.key == "Backspace") {
      handleSpecialButtons("backSpace");
   } else if (e.key == "=") {
      handleSpecialButtons("=");
   } else if (e.key == "Enter") {
      handleSpecialButtons("=");
   } else if (e.key == ".") {
      handleSpecialButtons(".");
   }
});

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

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => {
   handleOperatorButtonPress("/");
});

const floatButton = document.querySelector("#float");
floatButton.addEventListener("click", () => {
   handleSpecialButtons(".");
});

const backSpace = document.querySelector("#backSpace");
backSpace.addEventListener("click", () => {
   handleSpecialButtons("backSpace");
});
