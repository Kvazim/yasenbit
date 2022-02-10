let btnnext = document.querySelector('.button-slide__switch--next');
let btnprev = document.querySelector('.button-slide__switch--prev');
let slideItem = document.querySelectorAll('.slider__item');
let i = 0;
btnnext.addEventListener('click', function (event) {
    if (slideItem[i].classList.contains('slider__item--activ')) {
        slideItem[i].classList.remove('slider__item--activ');
        i++;
    if (i >= slideItem.length) {
        i = 0;
        slideItem[i].classList.add('slider__item--activ');
    } else if (i <= slideItem.length) {
        slideItem[i].classList.add('slider__item--activ');
        };
    };
});
btnprev.addEventListener('click', function (event) {
    if (slideItem[i].classList.contains('slider__item--activ')) {
        slideItem[i].classList.remove('slider__item--activ');
        i--;
    if (i < 0) {
        i = slideItem.length-1;
        slideItem[i].classList.add('slider__item--activ');
    } else if (i <= slideItem.length) {
        slideItem[i].classList.add('slider__item--activ');
        };
    };
});
