// Your code here
////////////////////////////////Basic Challenge///////////////////////////////
let week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

let myDateObj = new Date(); // This should print the current date
console.assert(myDateObj instanceof Date);
console.assert(typeof myDateObj === 'object');

let timeStamp = myDateObj.getTime();
console.assert(typeof timeStamp === 'number');
console.assert(Object.prototype.toString.call(timeStamp) === '[object Number]');

let getDay = myDateObj.getDay();
console.assert(typeof getDay === 'number');
console.assert(typeof week[getDay] === 'string');

/////////////////////// Intermediate Challenge ////////////////////////////

function date(dateObj) {
	let month = dateObj.getMonth() + 1;
	let date = dateObj.getDate();
	let year = dateObj.getFullYear() + '';
	year = year.slice(-2);
	let hour = (dateObj.getHours() + 24) % 12 || 12;
	let mins = dateObj.getMinutes();
	let timeOfDay = dateObj.getHours() > 11 ? 'pm' : 'am';
	return `${month}/${date}/${year} - ${hour}:${mins}${timeOfDay}`;
}
console.log(date(myDateObj));
