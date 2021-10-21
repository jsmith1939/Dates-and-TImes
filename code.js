////////////////////////////////Basic Challenge///////////////////////////////
//////////////////////////////// Your code here //////////////////////////////
let week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

function myDateObj() {
	return new Date();
} // This should print the current date
console.assert(myDateObj() instanceof Date);
console.assert(typeof myDateObj() === 'object');

function timeStamp() {
	return myDateObj().getTime();
}
console.assert(typeof timeStamp() === 'number');
console.assert(
	Object.prototype.toString.call(timeStamp()) === '[object Number]'
);

function getDay() {
	return myDateObj().getDay();
}
console.assert(typeof getDay() === 'number');
console.assert(typeof week[getDay()] === 'string');

/////////////////////// Intermediate Challenge ////////////////////////////

function date(dateObj) {
	let month = dateObj.getMonth() + 1;
	let date = dateObj.getDate();
	let year = dateObj.getFullYear() + '';
	year = year.slice(-2);
	let hour = (dateObj.getHours() + 24) % 12 || 12;
	let mins = ('0' + dateObj.getMinutes()).slice(-2);
	let timeOfDay = dateObj.getHours() > 11 ? 'pm' : 'am';
	return `${month}/${date}/${year} - ${hour}:${mins}${timeOfDay}`;
}
console.log(date(new Date()));

function daysApart(date1, date2) {
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays + ' days';
}
console.log(
	daysApart(
		new Date('February 3, 2003 03:00:00'),
		new Date('March 1, 2003 14:50:00')
	)
);

///////////////////////// Advance Challenge: /////////////////////////////////
