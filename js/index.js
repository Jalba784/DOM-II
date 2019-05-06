// Your code goes here

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


console.log(contentDest);




