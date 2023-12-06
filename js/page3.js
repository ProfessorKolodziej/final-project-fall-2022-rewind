var homeButton = document.querySelector('.button-home');
var backButton = document.querySelector('.button-back');
var marketButton = document.querySelector('.market');
var partyButton = document.querySelector('.party');

homeButton.addEventListener('click', function() {
	var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/index.html';
	window.location.href = targetURL;
});

backButton.addEventListener('click', function() {
	var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page7-end.html';
	window.location.href = targetURL;
});

marketButton.addEventListener('click', function() {
	var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page4.html';
	window.location.href = targetURL;
});

partyButton.addEventListener('click', function() {
	var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page5.html';
	window.location.href = targetURL;
});



