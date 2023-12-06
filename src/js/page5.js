var partytimeButton = document.querySelector('.Party-time');
var backtomapButton = document.querySelector('.Back-to-map');

partytimeButton.addEventListener('click', function() {
	var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page6.html';
	window.location.href = targetURL;
});

backtomapButton.addEventListener('click', function() {
	var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page3.html';
	window.location.href = targetURL;
});
