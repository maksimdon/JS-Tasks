let main = document.querySelector('main');
let menu = document.querySelector('.side-box');
let opener = document.querySelector('.opener');
let closer = document.querySelector('.closer');
opener.addEventListener('click', () => {
    main.classList.add('main-cut');
    opener.classList.add('closed');
    menu.classList.add('opened')
});
closer.addEventListener('click', () => {
    main.classList.remove('main-cut');
    opener.classList.remove('closed');
    menu.classList.remove('opened')
})