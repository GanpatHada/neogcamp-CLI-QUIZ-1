var readlineSync = require('readline-sync');
var chalk =require('chalk');
console.log("\n\n\n");
console.log("LET'S PLAY A GAME , HOW MUCH YOU KNOW ME ?");
console.log("----------------------------------------");
console.log("write correct option");
console.log('\n');
var userName = readlineSync.question('May I have your name? ');
var q = [];
var a = ['b', 'a', 'd', 'c', 'b'];
console.log('\n\n');
q[0] = readlineSync.question('(1) Where is my Hometown ?  \n (a) Indore \n (b) Gwalior \n (c) Bhopal \n (d) Jabalpur \n\n Your Answer :  ');
q[1] = readlineSync.question('\n(1) Which color I like most ?  \n (a) Blue \n (b) Green \n (c) Black \n (d) Red \n\n Your Answer :  ');
q[2] = readlineSync.question('\n(1) What is my hobbey ?  \n (a) Cricket \n (b) Swimming \n (c) Singing \n (d) Painting \n\n Your Answer :  ');
q[3] = readlineSync.question('\n(1) My favourite tourist place ?  \n (a) Shimla \n (b) Mumbai \n (c) Jaipur \n (d) Udaipur \n\n Your Answer :  ');
q[4] = readlineSync.question('\n(1) My favourite festival ?  \n (a) Holi \n (b) Diwali \n (c) Rakshabandhan \n (d) Eid \n\n Your Answer :  ');
let count = 0;
for (let i = 0; i < 5; i++) {
  if (q[i] == a[i])
    count++;
}
if (count < 3)
  console.log(chalk.red("\n\nfailed"));
else
  console.log(chalk.green("\n\nPass"));

console.log(`\n\nDear ${userName} You have scored ${count} out of 5`);
