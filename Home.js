// console.log('hello');
alert('Welcome! Enter your date of birth');

function Age () {

let currentDate = new Date();
//let cDay = currentDate.getDate();
//let cMonth = currentMonth.getDate();
let cYear = currentYear.getDate();
let BirthYear = prompt("Please enter your date of birth: ");
let AgeInDays = (cYear - BirthYear) * 365;
let AgeInMonths = (cMonth - BirthYear) * 12;
let h1 = document.createElement('h1');
let answer = document.createTextNode(' You are ' + AgeInDays + ' days old' + '\n' + ', and you are ' + AgeInMonths + ' months old ');
h1.setAttribute('id', 'Age');
h1.appendChild(answer);
document.getElementById('flex-box-result').appendChild(h1);
}