let homeButton = document.querySelector('.button-home');
let backButton = document.querySelector('.button-back');
let marketButton = document.querySelector('.market');
let partyButton = document.querySelector('.party');

homeButton.addEventListener('click', function() {
  let targetURL = 'index.html';
  window.location.href = targetURL;
});

backButton.addEventListener('click', function() {
  let targetURL = 'page7-end.html';
  window.location.href = targetURL;
});

marketButton.addEventListener('click', function() {
  let targetURL = 'page4.html';
  window.location.href = targetURL;
});

partyButton.addEventListener('click', function() {
  let targetURL = 'page5.html';
  window.location.href = targetURL;
});



