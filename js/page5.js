let partytimeButton = document.querySelector('.Party-time');
let backtomapButton = document.querySelector('.Back-to-map');

partytimeButton.addEventListener('click', function() {
  let targetURL = 'page6.html';
  window.location.href = targetURL;
});

backtomapButton.addEventListener('click', function() {
  let targetURL = 'page3.html';
  window.location.href = targetURL;
});
