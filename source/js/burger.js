let burger = document.querySelector('.toggle');
let nav = document.querySelector('.navigation');
let phead = document.querySelector('.page-header');

burger.addEventListener('click', function(event) {

    burger.classList.toggle('toggle--activ');
    nav.classList.toggle('navigation--close');
});

nav.classList.remove('navigation--nojs');
phead.classList.remove('page-header--nojs');
