////////////////////////////////Basic Challenge///////////////////////////////
//////////////////////////////// Your code here //////////////////////////////

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

function getDay(dateObj) {
	let week = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	return week[dateObj.getDay()];
}
let summonDateObj = new Date('May 9, 1999');
console.assert(getDay(summonDateObj) === 'Sunday');
console.assert(typeof getDay(summonDateObj) !== 'undefined');
console.assert(typeof getDay(summonDateObj) === 'string');

////////////////////////// Intermediate Challenge ////////////////////////////

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
console.assert(typeof date(new Date()) === 'string');
console.assert(typeof date(new Date()) !== 'undefined');

function daysApart(date1, date2) {
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	if (diffDays === 0) {
		return 'Same day';
	} else if (diffDays === 1) {
		return 'Previous day';
	} else {
		return diffDays + ' days ago';
	}
}

console.assert(
	daysApart(
		new Date('February 3, 2003 03:00:00'),
		new Date('March 1, 2003 14:50:00')
	) === '27 days ago'
);
console.assert(
	daysApart(
		new Date('February 3, 2003 03:00:00'),
		new Date('February 3, 2003 03:00:00')
	) === 'Same day'
);
