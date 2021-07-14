function Age () {
var BirthYear = prompt("Please enter your date of birth: ");
var cDate = new Date();
//var day = cDate.getDate()
//var month = cDate.getMonth() + 1
var year = String(cDate.getFullYear());
var ageInMonths = (year - BirthYear) * 12;
var ageInDays = (year - BirthYear) * 365;
var h1 = document.createElement('h1');
var answer = document.createTextNode(' You are ' + ageInMonths + ' months old ' + 'and you are ' + ageInDays + ' days old ');
h1.setAttribute('id', 'Age');
h1.appendChild(answer);
document.getElementById('flex-box-result').appendChild(h1);
}