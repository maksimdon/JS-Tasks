let buttonOpen = document.querySelector('.popup-button');
let popup = document.querySelector('.popup');
let popupContent = document.querySelector('.popup-content');
let popupClose = document.querySelector('.popup-content button');
buttonOpen.addEventListener('click', () => {popup.classList.add('opened')});
popupClose.addEventListener('click', () => {popup.classList.remove('opened')});
window.addEventListener('click', (event) => {
    if(event.target == popup){
        popup.classList.remove('opened')
    }
})