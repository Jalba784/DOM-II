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