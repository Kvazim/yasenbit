const order = document.querySelectorAll('.product__button');
const btncard = document.querySelectorAll('.card__button');
const modalClose = document.querySelector('.modal');
const modalCont = document.querySelector('.modal-container');

openPopup = () => {
    modalClose.classList.remove('modal--close');
    window.addEventListener('keydown', onWindowKeydown);
    window.addEventListener('mousedown', onWindowClick);
}

const closePopup = () => {
    modalClose.classList.add('modal--close');
    window.removeEventListener('keydown', onWindowKeydown);
    window.removeEventListener('mousedown', onWindowClick);
}

const onBtnCardClick = () => {
    openPopup();
}

const onWindowClick = (evt => {
    if (evt.target !== modalCont && !modalCont.contains(evt.target)) {
        closePopup();
    }
});

const onWindowKeydown = (evt => {
    if (evt.key == 'Escape' || evt.key == 'Esc') {
        closePopup();
    }
});

order.forEach(function(btnorder) {
    btnorder.addEventListener('click', onBtnCardClick);
});

btncard.forEach(function(cardbtn) {
    cardbtn.addEventListener('click', onBtnCardClick);
});
