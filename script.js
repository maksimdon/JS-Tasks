let myCreateNum = function (a,b) {return a*b};
console.log(myCreateNum(2,5));



// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
let sumNumbers = function (a, b) {
    if (arguments.length < 2) {
        alert(`введите два параметра`);
    } else if(typeof a !== "number" || typeof b !== "number"){
        alert(`введенные данные не являются числами`)
    }else{
        return (a + b);
    }
}
sumNumbers(1);
sumNumbers(`hi`, 2);
console.log(sumNumbers(1,2))



// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
function square(a) {
  console.log(a * a)
}
square(10) // 100
square()
ДО: NaN
ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
function square(a) {
    if(arguments.length === 0){
        console.error(`Функция "square" не может быть вызвана без аргумента`)
    }else{
        console.log(a * a)
    }
}



// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.
function getRandomInteger(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
function getRandomInteger(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let guessNum = (number) => {
    let a = getRandomInteger(0,10)
    if(number !== a){
        console.log(`Вы не угадали, ваше число - ${number},  а выпало число ${a}`)
    }else{
        console.log(`Вы выиграли`)
    }
}
guessNum(4);



// Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];
let filterFor = (arr, a) => {
    let newArr = [];
    for (let item of arr){
        if(a <= item){
            newArr.push(item);
        }
    };
    console.log(newArr)
}
filterFor();



const names = ['Anna', 'Oleg', 'Tom'];
names.forEach(function(element,index,array){
    console.log(`Элемент ${element} мае індэкс ${index}`)
});



// Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
const arr = ['Anna', 'Oleg', 'Tom'];
const copyArr = arr.map( item => item)
console.log(copyArr);



// Задание 6
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
const arr = ['Anna', 4, 7, 10, 21, 'Oleg', 18, 125, 'Tom'];
function sumObjectValues(array){
    let sum = 0;
    array.forEach(function(item){
        if(typeof item == "number"){
            sum = sum + item
        }
    })
    return sum;
};
console.log(sumObjectValues(arr));