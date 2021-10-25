///////////////////////// Advance Challenge: /////////////////////////////////
// Russel livermore helped with this code
let mins = 0;
let secs = 0;
let milliSecs = 0;
let divMins = document.querySelector('#minutes');
let divSecs = document.querySelector('#seconds');
let divMilliSecs = document.querySelector('#milliseconds');
let count = null;

document.querySelector('#start').addEventListener('click', () => {
	clearInterval(count);
	count = setInterval(startWatch, 10);
});
document.querySelector('#stop').addEventListener('click', () => {
	clearInterval(count);
});
document.querySelector('#reset').addEventListener('click', () => {
	clearInterval(count);
	mins = 0;
	secs = 0;
	milliSecs = 0;
	divMins.innerHTML = '00';
	divSecs.innerHTML = '00';
	divMilliSecs.innerHTML = '000';
});
function startWatch() {
	milliSecs++;
	if (milliSecs <= 9) {
		divMilliSecs.innerHTML = '00' + milliSecs;
	}
	if (milliSecs > 9) {
		divMilliSecs.innerHTML = milliSecs;
	}
	if (milliSecs > 99) {
		milliSecs = 0;
		secs++;
		divSecs.innerHTML = '0' + secs;
		divMilliSecs.innerHTML = '0' + milliSecs;
	}
	if (secs >= 60) {
		secs = 0;
		mins++;
		divMins.innerHTML = '0' + mins;
		divSecs.innerHTML = '0' + secs;
	}
	if (secs > 9) {
		divSecs.innerHTML = secs;
	}
}
