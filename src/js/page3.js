var homeButton = document.querySelector('.button-home');
var backButton = document.querySelector('.button-back');
var marketButton = document.querySelector('.market');
var partyButton = document.querySelector('.party');

homeButton.addEventListener('click', function() {
	var targetURL = 'index.html';
	window.location.href = targetURL;
});

backButton.addEventListener('click', function() {
	var targetURL = 'page7-end.html';
	window.location.href = targetURL;
});

marketButton.addEventListener('click', function() {
	var targetURL = 'page4.html';
	window.location.href = targetURL;
});

partyButton.addEventListener('click', function() {
	var targetURL = 'page5.html';
	window.location.href = targetURL;
});



