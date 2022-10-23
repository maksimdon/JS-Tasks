let n = prompt('Чысло.');
if(n <= 100 && n >= 0){
    alert(`да1`)
}else if(n >= 100 || n <= 0){
    alert(`не`)
}
user = { name: 'masha', age: 18, gender: 'female' }
user.login = 'masha1'
boyUser = { boyName: 'kolya', boyAge: 10, boyGender: 'male' };
boyUser.boyName = 'vitya';
boyUser['boyName'] = 'vitya';Заработная плата ххх составляет ххх рублей.

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000,
    };
console.log(`Заробак Den стварае ${engineers.Den}`);
console.log(`Заробак Matt стварае ${engineers.Matt}`);
console.log(`Заробак Steve стварае ${engineers.Steve}`);


// Задание 3
Создать массив из 5 элементов.
Используя цикл for, вывести каждый второй элемент массива в консоль.
let array = [1, 3, 6, 159, 200];
for(let i = 0; i < array.length; i += 2){
    console.log(array[i])
}


// Задание 4
Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
Индексу 0 соответствует число 42
Индексу 1 соответствует число 65
и т.д.
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for(let i = 0; i < numbers.length; i++){
    console.log(`Індэкс ${i} = ${numbers[i]}`)
};



// Задание 5

// Дан массив объектов, например:



let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
for(let item of questions){
    item.usersAnswer = null;
}


// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
// 2) Посчитать и вывести в консоль сумму элементов в массиве.
// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
// 3) Посчитать и вывести в консоль сумму четных элементов в массиве.
// 4) Найти и вывести в консоль максимальное число массива.
// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
// 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// 1)
for(let item of numbers){
    console.log(item)
}
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
// 2)
let sum = 0;
for(i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
};
console.log(sum);
// 3)
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        sum = numbers[i] + sum;
    }
}
console.log(sum);
// 4)
let max = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log(max);
// 5)
let max = 0;
let indexMax = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
        indexMax = i;
    }
}
console.log(max);
console.log(indexMax);



// Задание 7
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = []
for (let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
        newArr.push(arr[i])
    }
}
console.log(newArr)



// Задание 8
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.
let nums = [5, 4, 3, 8, 0];
let limit = 5;
let numsArr = [];
for(let item of nums){
    if(item >= limit){
        numsArr.push(item)
    }
}
console.log(numsArr)



// Задание 9
// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
// Пройти в цикле по ассиву и вывести имена всех пользователей, возраст которых больше 15.
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
for(i = 0; i < users.length; i++){
    if(users[i].age > 15){
        console.log(users[i].name)
    }
}



// Задание 10*
// Задать массив слов. Например:
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):
// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let newVegets = [];
for(let item of vegetables){
    newVegets.push({word: item, length: item.length})
}
console.log(newVegets)
for(let i = 0; i < newVegets.length; i++){
    console.log(`${newVegets[i].word} - ${newVegets[i].length}`)
}
