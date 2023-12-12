var partytimeButton = document.querySelector('.Party-time');
var backtomapButton = document.querySelector('.Back-to-map');

partytimeButton.addEventListener('click', function() {
	var targetURL = 'page6.html';
	window.location.href = targetURL;
});

backtomapButton.addEventListener('click', function() {
	var targetURL = 'page3.html';
	window.location.href = targetURL;
});
