let age = 18;
let name = 'Sufian';
let regTime = '11:00AM';
let racerNumber = Math.floor(Math.random() * 1000);
switch (true) {
 // case 01 Early adults (age>18) receive a race number at or above 1000 and run at 9:30 am.
 // case 02 Late adults (age>18) receive a race number at or above 1000 and run at 11:00AM.
 // case 03 youth (age<18) receive a race number at or above 1000 and run at 11:00AM.
 // case 04 youth (age=18) needs to visit the registration desk. 
case age > 18 && regTime === '9:30AM':
  racerNumber = racerNumber+1000
  console.log(`Hi ${name} as you are ${age} years old and your registration time was ${regTime} you will be running in the early adults run at 9:30 am.`);
  console.log(`Your Recer Number is ${racerNumber}`);
  break;
 case age > 18 && regTime === '11:00AM':
  racerNumber = racerNumber+1000
  console.log(`Hi ${name} as you are ${age} years old and your registration time was ${regTime} you will be running in the early adults run at 11:00 am.`);
  console.log(`Your Recer Number is ${racerNumber}`);
  break;
case age < 18:
 console.log(`Hi ${name} as you are ${age} years old and your registration time was ${regTime} you will be running in the youth run at 12:30 pm.`);
 console.log(`Your Recer Number is ${racerNumber}`);
 break;
case age === 18:
 console.log(`Hi ${name} as you are ${age} years old and your registration time was ${regTime} you need visit registration desk to get yourself regestered for the race!`);
 break;
default:
 console.log("Please enter a valid age and registration time.");
 break;
}