var p62Button = document.querySelector('.back-to-map');
var backto2023Button = document.querySelector('.back-to-2023');

p62Button.addEventListener('click', function() {
	var targetURL = 'page3.html';
	window.location.href = targetURL;
});

backto2023Button.addEventListener('click', function() {
	var targetURL = 'page7-end.html';
	window.location.href = targetURL;
});
