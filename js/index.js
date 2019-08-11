// Your code goes here

/* Keydown */
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

/* sdf */