Math.round(5.4) //Возвращает значение числа, округлённое до ближайшего целого.
Math.ceil(5.4) //Возвращает значение числа, округлённое к большему целому.
Math.floor(5.4) //Возвращает значение числа, округлённое к меньшему целому.
Math.round(5.5)
Math.ceil(5.5)
Math.floor(5.5)
Math.round(5.6)
Math.ceil(5.6)
Math.floor(5.6)



// let now = new Date()
// console.log(now.getHours())
// console.log(now)
// let object = new Array()
// console.log(object)
// Задание 2
// Выведите в консоль фразы в 2 строки:
// Сегодня 27.10.2022 (здесь будет ваша дата)
// 19 часов 20 минут (здесь будет ваше время)
let time = new Date();
console.log(`Сёння ${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`);
console.log(`${time.getHours()} гадзін ${time.getMinutes()} хвілін`);
