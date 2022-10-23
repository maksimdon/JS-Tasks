// Задание 1
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
let i = 0;
while(i < 3){
    i++
alert( `number ${i}!` );
}
Задание 2
Перепишите код с использованием тернарного оператора
let male = true;
let gender = male === false ? 'man' : 'woman';
console.log(gender)



// Задание 2
// Перепишите код с использованием тернарного оператора
let country = 'Sweden';
let access = country == 'Sweden' ? true : false
console.log(access);



// Задание 3
// Задать массив логических значений (true/false). Например: const roles = [true, false, false, true, false]
// Каждое значение обозначает админ (true) или пользователь (false).
// Из этого массива сформировать массив объектов - roles, такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
// Т.е. из
// [true, false, false]
// должно получиться
// [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]
const roles = [true, false, false, true, false];
let role = [];
for (i = 0; i < roles.length; i++){
    let userRole = roles[i] == true ? 'admin' : 'user'; 
    role.push({role: userRole});
}
console.log(role);



// function logNumber(number) {
//     console.log(number)
// };
// logNumber(124);



// Задание 4
// Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.
function findPositiveNumbers(arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]){
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
    
    // 1)
    for(i = 0; i < arr.length; i++)
    if(arr[i] >= 0){
        console.log(arr[i])
    }
// 2)
let newArr = [];
for(i = 0; i < arr.length; i++)
     if(arr[i] >= 0){
        newArr.push(arr[i]);
     }
     console.log(newArr)
// 3)
    let newArr = [];
    for(i = 0; i < arr.length; i++)
        if(arr[i] >= 0){
            newArr.push(arr[i]);
        }
    return newArr;
}
// 4)
let newArr = [];
for(i = 0; i < arr.length; i++)
    if(arr[i] >= 0){
        newArr.push(arr[i]);
    }
console.log(newArr);
}
findPositiveNumbers()



// Задание 5
// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

function argumentsCounting (value, count) {
    let arr = [];
    for(i = 0; i < count; i++){
        arr.push(value)
    }
    console.log(arr);
}
argumentsCounting('a', 3);



// Задание 6
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a){
    let newArr = [];
    for(let item of arr){
        if(item >= a){
            newArr.push(item);
        }
    }
    console.log(newArr)
}
filterFor(arr, 10);



// Задание 7
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// Одна функция может вызывать другую функцию
function getRandomRGB(min, max){
    function getRandomInteger(min,max) {
        return Math.floor(Math.random() * (max - min)) + min;
        }
    let r = getRandomInteger(255,255);
    let g = getRandomInteger(255,255);
    let b = getRandomInteger(255,255);
    console.log(`rgb(${r},${g},${b})`)
}
getRandomRGB();



// Задание 8
// Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.
// Примеры вызова такой функции:
// getSquares(0, 100) - выведет квадраты чисел от 0 до 100
// getSquares(56, 87) - выведет квадраты чисел от 56 до 87
function getSquares(min,max){
    let a = 0;
    for(i = 0; i < (max - min) + 1; i++){
    a = (min + i) * (min + i)
    console.log(a)
}
}
getSquares(4,10)



// Задание 9
// Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.
// Для проверки, целое ли число, вам понадобится опеатор % (подумайте, остаток от деления на какое число подойдет для вашей цели)
function isInteger(x){
    let boolean = (x % 1 === 0) ? true : false;
    console.log(boolean)
}
isInteger(3);



// Задание 10
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"
function isInteger(n){
    if(n % 1 !== 0){
        alert('Увядзіце цэлы лік')
    } else{
        for(i = 1; i < n + 0.5; i = i + 0.5){
            (i % 1 === 0) ? console.log(`${i} integer`) : console.log(`${i} decimal`); 
        }
    }
}
isInteger(21)
