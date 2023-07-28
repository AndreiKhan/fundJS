//------1 задание------

let num1 = prompt('Первое число');
let num2 = prompt('Второе число');

console.log(num1 <= 1 ? `Число ${num1} равно или меньше 1` : `Число ${num1} не равна или меньше 1`);
console.log(num2 >= 3 ? `Число ${num2} равно или больше 3` : `Число ${num2} не равна или больше 3`);



//------2 задание------

let test = true;

console.log(test === true ? '+++' : '---');



//------3 задание------

let day = randomNum(1, 31);

let decade = Math.ceil(day / 10);

console.log(`${day} день находится в ${decade} декаде месяца`);


function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//------4 задание------

let number = prompt('Введите число');

let unit = number % 10;

let dozens = Math.floor((number % 100) / 10);

let hundreds = Math.floor((number % 1000) / 100);

console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${unit}`);