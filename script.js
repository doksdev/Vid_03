var circleOne = document.querySelector('.circle-one');
var circleTwo = document.querySelector('.circle-two');
var content = document.querySelector('.content');
let choice;

// Width and Height of content
const contentHeight = content.offsetHeight;
const contentWIdth = content.offsetWidth;


circleOne.style.top = Math.floor((Math.random() * contentHeight) + 1) + "px";
circleOne.style.left = Math.floor(Math.random() * (contentWIdth - contentWIdth/1.2 + 1) + contentWIdth/1.2) + "px";

circleTwo.style.top = Math.floor((Math.random() * contentHeight) + 1) + "px";
circleTwo.style.left = Math.floor(Math.random() * (contentWIdth - contentWIdth/1.2 + 1) + contentWIdth/1.2) + "px";

var h = setInterval(function() {
    choice = Math.floor((Math.random() * 2) + 1);
    if ( choice == 1) {
        circleOne.style.top = Math.floor((Math.random() * contentHeight) + 1) + "px";
        circleOne.style.left = Math.floor(Math.random() * (contentWIdth - contentWIdth/12 + 1) + contentWIdth/12) + "px";

        circleTwo.style.top = Math.floor((Math.random() * contentHeight) + 1) + "px";
        circleTwo.style.left = Math.floor(Math.random() * (contentWIdth - contentWIdth/12 + 1) + contentWIdth/12) + "px";
    } else {
        circleOne.style.top = Math.floor((Math.random() * contentHeight) + 1) + "px";
        circleOne.style.left = Math.floor(Math.random() * (contentWIdth - contentWIdth/12 + 1) + contentWIdth/12) + "px";

        circleTwo.style.top = Math.floor((Math.random() * contentHeight) + 1) + "px";
        circleTwo.style.left = Math.floor(Math.random() * (contentWIdth - contentWIdth/12 + 1) + contentWIdth/12) + "px";
    }
}, 8000)

h();


// Thanks for watching :)
