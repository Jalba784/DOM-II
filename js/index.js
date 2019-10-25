// Your code goes here


/* Click */
// Send email address
let emailBtn = document.querySelector('.emailButton');
emailBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Your email has been registered.');
});

/* Doubleclick */
// Doubleclick on first bus image
let funBus = document.querySelector('.funBusImage');
funBus.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    window.location.href = 'http://www.funbus.com/group-tours/';
});

/* Blur & Focus */
let emailFm = document.querySelector('.emailForm');
// Focus
emailFm.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'pink';
});
// Blur
emailFm.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});

/* Mouseover */
// Changes font color to green and resizes font to
// 2.0rem when mouse hovers over navBa1.
let navBar1 = document.querySelector('nav');
navBar1.addEventListener('mouseover', (e) => {
    setTimeout(() => {
        e.target.style.color = 'green';
        e.target.style.fontSize = '2.0rem';
    }, 500);
}, false);

/* Wheel */
// This event only affects the paragraph that begins with
// "Traveling expedition modern..."
let firstPara = document.querySelector('p');
firstPara.addEventListener('wheel', (e) => {
    e.target.style.fontSize = '5.0rem';
});

/* Load */
window.addEventListener('load', () => {
    alert('Page is fully loaded!');
});

/* Keydown */
emailFm.addEventListener('keydown', (e) => {
    console.log(e.key);
});

/* Resize */
window.addEventListener('resize', () => {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let result = `The window's width is: ${w} and the height is: ${h}`;
    console.log(result);
});

/* Reset */
let resetFm = document.querySelector('.emailForm');
resetFm.addEventListener('reset', () => {
    console.log("Form is reset...");
});
=======
//Changes Nav bar buttons when mouse hovers over each button
let navButtons = document.querySelector("nav");
navButtons.addEventListener('mouseover', (e) => {
    e.target.style.color = 'dodgerBlue';
    e.target.style.fontSize = '3rem';

    setTimeout(function () {
        e.target.style.color = '';
        e.target.style.fontSize = '1.7rem';
    }, 600);
}, false);


//Form Creation
let contentDest = document.querySelector('.content-destination');

let lastDiv = document.createElement("div");
contentDest.appendChild(lastDiv);
let lastH2 = document.createElement("h2");
lastDiv.appendChild(lastH2);
lastH2.textContent = 'Members';
lastH2.style.marginTop = '20px';
let form1 = document.createElement("form");
lastDiv.appendChild(form1);
form1.setAttribute('name', 'login');
form1.style.display = 'flex';
form1.style.flexDirection = 'column';


//Username Input
let input0 = document.createElement("input");
input0.setAttribute('type', 'text');
input0.setAttribute('name', 'email');
input0.setAttribute('minlength', '4');
input0.setAttribute('maxlength', '100');
input0.setAttribute('size', '100');
input0.setAttribute('placeholder', 'Email or Username');
input0.style.width = '50%';
input0.style.height = '25px';
input0.style.border = '1px solid black';
input0.style.marginBottom = '10px';


//Password Input
let input1 = document.createElement("input");
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'password');
input1.setAttribute('minlength', '4');
input1.setAttribute('maxlength', '100');
input1.setAttribute('size', '100');
input1.setAttribute('placeholder', 'Password');
input1.style.border = '1px solid black';
input1.style.width = '50%';
input1.style.height = '25px';
input1.style.marginBottom = '20px';


//Appending inputs to Form
form1.appendChild(input0);
form1.appendChild(input1);


//Login Button
let formButton = document.createElement("button");
formButton.setAttribute('type', 'submit');
formButton.textContent = 'Log In';
formButton.style.width = '60%';
formButton.style.height = '25px';
formButton.style.margin = '0 auto';
formButton.style.fontSize = '1.5rem';
formButton.style.border = '1px solid aqua';
formButton.style.borderRadius = '7px';
formButton.style.color = 'white';
formButton.style.backgroundColor = 'mediumSeaGreen';
form1.appendChild(formButton);

//KeyDown Event Listener for input0
let firstInput = document.querySelector('input');
let stringUser = [];
firstInput.addEventListener('keydown', (e) => {
    stringUser.push(e.key);
});


//Wheel Event makes text bigger
let wheelPara = document.querySelector('#paraScroll');
wheelPara.addEventListener('wheel', biggerText);
function biggerText() {
    this.style.fontSize = '5.0rem';
}

// Drag & Drop
let boatImg = document.querySelector('#boat');
let dashedSqaure = document.querySelectorAll('.empty');

// Boat Image Listeners
boatImg.addEventListener('dragstart', dragStart);
boatImg.addEventListener('dragend', dragEnd);

//Loop through empties and call drag events
for (const empty of dashedSqaure) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}
function dragEnd() {
    this.className = 'boatImg';
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(boatImg);
}

// Load Event
window.addEventListener('load', function() {
    alert("The page has fully loaded!");
});

// Focus Event
let passwordFocus = document.querySelector("input[name='password']");
passwordFocus.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'pink';
});
passwordFocus.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});

// Resize Event
const heightOutput = document.querySelector('#spanHeight');
const widthOutput = document.querySelector('#spanWidth');
window.addEventListener('resize', function () {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
});

// Scroll Event
let scrollEvent = document.querySelector('#paraScroll');
let lastPosition = 0;
let ticking = false;
let counter = 0;
let star = '*';

// Checkout the console to see a pretty cool effect
function doSomething(argument) {
    ++counter;
    console.log(star.repeat(counter));
}
scrollEvent.addEventListener('scroll', function (e) {
    lastPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(lastPosition);
            ticking = false;
        });
        ticking = true;
    }
});

// Select Event
let passwordText = document.querySelector("input");
passwordText.addEventListener('select', selectingText);

function selectingText(e) {
    const log = document.querySelector('#selectedText');
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    log.textContent = `The text you selected is: ${selection}`;
}


// Double Click Event
let firstP = document.querySelector("p");
firstP.addEventListener('dblclick', clickMe);
function clickMe() {
    firstP.textContent = 'I was double clicked';
}

// Nested Click Event
let footer = document.querySelector("footer");
let copyright = document.querySelector("#copyright");
copyright.style.border = '1px solid black';

footer.addEventListener('click', parentClick);
function parentClick() {
    alert('Parent event just fired');
}
copyright.addEventListener('click', childClick);
function childClick(e) {
    e.stopPropagation();        // Propagation Stopped
    alert('Child event just fired');
}

console.log(passwordText);





