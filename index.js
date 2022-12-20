const readlineSync = require('readline-sync');

let userName = readlineSync.question('May I have your name? ');
console.log("Welcome ", `${userName}`)

console.log("Lets begin the game...\nChoose the answer by pressing the number infront of the answer");
const pressKey = readlineSync.question('Hit Enter key To start.', { hideEchoBack: true, mask: '' });
console.log(pressKey);

let score = 0

let ansDatabase = [
  {
    question: "When is my birthday?",
    options: ["14 June", "05 Apr", "19 Dec", "21 Oct"],
    correctAns: "05 Apr"
  }, {
    question: "Which is my favourite sport?",
    options: ["Cricket", "Football", "Badminton", "Tennis"],
    correctAns: "Badminton"
  }
  , {
    question: "What is my favorite food?",
    options: ["Burgers", "Apple Pie", "Pizza", "Fried Chicken"],
    correctAns: "Burgers"
  }
  , {
    question: "Who is my favourite Marvel Hero?",
    options: ["Batman", "Superman", "Spider-Man", "Iron Man"],
    correctAns: "Iron Man"
  }, {
    question: "My favourite city in India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Bangalore"],
    correctAns: "Bangalore"
  }

]


for (let i = 0; i < ansDatabase.length; i++) {
  index = readlineSync.keyInSelect(ansDatabase[i].options, ansDatabase[i].question); 3

  if (ansDatabase[i].correctAns === ansDatabase[i].options[index]) {
    console.log("Yes, you are right")
    score++
  }
  else {
    console.log("Oops, you are wrong")
  }

  console.log("And your score is: " + score)
  console.log("-------------------------------")

  if (i == ansDatabase.length - 1) {
    console.log(`THANKS FOR PLAYING THE GAME ! ${userName} , \nYour Final Score is "${score}" `)
  }

}
