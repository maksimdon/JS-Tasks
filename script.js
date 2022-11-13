// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

let str = 'kitty';
let ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}    
console.log(ucFirst(str));



// Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

let string = 'badWOrd';
let checkSpam = str => {
    str = str.toLowerCase();
    if(str.includes('xxx') || str.includes('badword')){
        return true
    } else{
        return false
    }
}
console.log(checkSpam(string));



// Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.

let string = 'прывятанне Жэня';
let reverseString = (str) => {
    let array = str.split('');
    array = array.reverse();
    str = array.join('');
    return str;
}
console.log(reverseString(string))



// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

// let stations = [

//     'MAN675847583748sjt567654;Manchester Piccadilly',
    
//     'GNF576746573fhdg4737dh4;Greenfield',
    
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    
//     'SYB4f65hf75f736463;Stalybridge',
    
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    
// ];

let humanReadable = arr => {
    arr.forEach(element => {
        const beg = element.slice(0, 3);
        const splitIndex = element.indexOf(';');
        const end = element.slice(splitIndex + 1);
        const resultString = (`${beg}: ${end}`);
        console.log(resultString)
    });
}
humanReadable(stations);



// Задание 5
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let unique = arr => {
    let newStrings = [];
    for (let item of arr){
        if(newStrings.includes(item) == false){
            newStrings.push(item)
        }
    }
    console.log(newStrings)
}
unique(strings);



// Задание 6
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

let catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
let catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
let verifyCats = (arrJa, arrJu) => {
    arrJa.splice(0,1); arrJa.splice(8,1);
    let allCats = arrJa.concat(arrJu);
    for (let i = 0; i < allCats.length; i++){
        if(allCats[i] <= 2){
            console.log(`Кошка № ${i + 1} ещё котёнок`)
        } else{
           console.log(`Кошка № ${i + 1} взрослая, ей ${allCats[i]} лет`) 
        }
    }
}
verifyCats(catsJane, catsJulia)

let catsJane = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
let catsJulia = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];
let verifyCats = (arrJa, arrJu) => {
    arrJa.splice(0,1); arrJa.splice(8,1);
    let allCats = arrJa.concat(arrJu);
    allCats.forEach(element => {
        if (element <= 2){
            console.log(`Кошка № ${allCats.indexOf(element) + 1} ещё котёнок`)
        } else{
            console.log(`Кошка № ${allCats.indexOf(element) + 1} взрослая, ей ${element} лет`)
        }
    });
};
verifyCats(catsJane, catsJulia);



// Задание 7
// Решить 4 задание из прошлой темы, используя метод filter
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
let filterFor = (arr, a) => {
    const newArr = arr.filter(item => item >= a)
    return newArr;
}
console.log(filterFor(arr, 10))



// Задание 8
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

let getAverageHumanAge = arr => {
    let peopleAge = arr.map(item => {
        if (item <= 2){
            item = item * 10
        } else {
            item = item * 7
        };
        return item
    });
    let filtredAges = peopleAge.filter(item => item >= 18);
    const result = filtredAges.reduce((acc, item) => acc += item, 0) /  (filtredAges.length);   
    return result;
}
console.log(getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]))
console.log(getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]))