var p62Button = document.querySelector('.back-to-map');
var backto2023Button = document.querySelector('.back-to-2023');

p62Button.addEventListener('click', function() {
	var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page3.html';
	window.location.href = targetURL;
});

backto2023Button.addEventListener('click', function() {
	var targetURL = '/Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page7-end.html';
	window.location.href = targetURL;
});
