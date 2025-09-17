let count;
console.log(count);
let newCount = 30;
console.log(newCount);
let tomato$Count;

const price = 30;
let appleCount = price * 7;
console.log(appleCount);

const userName = 'yoshipi';
let string = `Hello ${userName} !`;
console.log(string);

const a = '  \\ is\n singleQuate !';
console.log(a);

const b = `aaaaa
bbbbb`;
console.log(b);
const userInput = '10.9';
let calcResult;
calcResult = Number(userInput) + 10;
calcResult = parseInt(userInput) + 10;
calcResult = parseFloat(userInput) + 10;
calcResult = +userInput + 10;

const tenNumber = 10;
calcResult = String(tenNumber);
calcResult = tenNumber.toString();

let array = ['apple', 'banana', 'grape', true, 2, 6];

const coffee = {
  name: 'Chocolate Mocha',
  size: 350,
  isHot: true,
  TOPPINGS: ['Cinammon', 'Caramel'],
  nuturition: {
    calories: 430,
    sugars: 53,
    caffeine: 100,
  },
};
// console.log(coffee);
coffee.isHot = false;
coffee.barista = 'takao';

function add(num1, num2) {
  console.log(num1, num2);
  const value = num1 + num2;
  return value;
}

const returnedValue = add(2, 3);
