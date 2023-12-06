// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
//homepage
var p1ButtonContainer = document.querySelector('.p1button-container');
p1ButtonContainer.addEventListener('click', function() {
  var targetURL = 'file:///Users/junmanyang/Documents/GitHub/final-project-fall-2022-rewind/src/page2.html';
  window.location.href = targetURL;
});
