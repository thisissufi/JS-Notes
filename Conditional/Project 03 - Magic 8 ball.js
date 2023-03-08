//all variables
var userName = 'Sufian';
var userQuestion = 'Will Black Clover ever get a secound season?';
userName ? console.log(`Hello, ${userName}!`) : consloe.log('Hello! User');
//getting a random number for 8 ball
const rn = Math.floor(Math.random() * 8);
console.log(`Your Question was "${userQuestion}"`);

var eightBall='';

switch (rn) {
case 0:
eightBall = 'It is certain';
break;
case 1:
eightBall = 'It is decidedly so';
break;
case 2:
eightBall = 'Reply hazy try again';
break;
case 3:
eightBall = 'Cannot predict now';
break;
case 4:
eightBall = 'Do not count on it';
break;
case 5:
eightBall = 'My sources say no';
break;
case 6:
eightBall = 'Outlook not so good';
break;
case 7:
eightBall = 'Signs point to yes';
break;
}
console.log(`${userName} according to my calculation and analysis i think ${eightBall}!`);
