//------1 задание------

for (let i = 0; i < 11; i++) {

    if (i === 0) {
        console.log(`${i} – это ноль`);

    } else {
        if (i % 2 === 0) {
            console.log(`${i} – четное число`);

        } else {
            console.log(`${i} – нечетное число`);
        }
    }
}



//------2 задание------

let numbers = [1, 2, 3, 4, 5, 6, 7]

console.log(numbers);

numbers.splice(3, 2);

console.log(numbers);



//------3 задание------

let randomNumbers = new Array(5);

let sum = 0;

for (let i = 0; i < 5; i++) {

    randomNumbers[i] = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    sum += randomNumbers[i]
}

console.log(`Массив рандомных чисел => ${randomNumbers}`);

console.log(`Сумма массива => ${sum}`);

console.log(`Минимальное число => ${Math.min.apply(null, randomNumbers)}`);

console.log(`Есть ли цифра 3 в массиве => ${randomNumbers.includes(3)}`);



//------* задание------

let x = 'x'

for (let i = 0; i < 20; i++) {

    console.log(x);
    x += 'x'
}