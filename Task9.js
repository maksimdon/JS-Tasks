// document.querySelector('h1').onclick = () => console.log('hi');



// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
// const ul = document.querySelector('ul');
// const input = document.querySelector('input');
// input.addEventListener('keydown', (event) =>{
//     let li = document.createElement('li');
//     li.innerText = event.key;
//     ul.appendChild(li)
// })



// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
// const input = document.querySelector('input');
// input.addEventListener('keyup', (event) => {
//     if(event.key !== undefined){
//         console.log(input.value)
//     }
// })  



// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let input = document.querySelector('.task3');
//     console.log(input.value);
//     input.value = '';    
// })



// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)
// const form = document.querySelector('.form-task4');
// let select = document.querySelector('select');
// let p = document.createElement('p');
// let div = document.querySelector('div');
// let num1 = document.querySelector('.num1');
// let num2 = document.querySelector('.num2');
// form.style.margin = '100px';
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(select.value)
//     let result;
//     if(select.value === "+"){
//         result = +num1.value + +num2.value
//     }else if(select.value === "-"){
//         result = +num1.value - +num2.value
//     }else if(select.value === "*"){
//         result = +num1.value * +num2.value
//     }else if(select.value === "/"){
//         result = +num1.value / +num2.value
//     }
//     p.innerText = result;
//     div.appendChild(p)
// });



// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }
// let button = document.querySelector('.task5');
// button.addEventListener('mouseenter', () =>button.style.backgroundColor = `rgb(${getRandomInteger(0,255)},${getRandomInteger(0,255)},${getRandomInteger(0,255)})`);
// button.addEventListener('mouseleave', () =>{
//     button.style.transform = `rotate(${getRandomInteger(-180,180)}deg)`
// })