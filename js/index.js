// Your code goes here

/* Keydown */
// Send email address
let emailBtn = document.querySelector('.emailButton');
emailBtn.addEventListener('click', () => {
    alert('Your email has been registered.');
});

/* Doubleclick */
// Doubleclick on first bus image
let funBus = document.querySelector('.funBusImage');
funBus.addEventListener('dblclick', () => {
    window.location.href = 'http://www.funbus.com/group-tours/';
});

/* Resize */
//
let website = document.querySelector('html');
website.addEventListener('resize', () => {
    console.log(`Width is ${window.innerWidth}`)
    console.log(`Width is ${window.innerHeight}')
});