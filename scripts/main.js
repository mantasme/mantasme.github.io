var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/scifi.jpg') {
      myImage.setAttribute ('src','images/scifi2.jpg');
    } else {
      myImage.setAttribute ('src','images/scifi.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Sci-fi is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Sci-fi is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}