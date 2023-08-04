//------1 задание------

for (let i = 0; i < 11; i++) {

    console.log(`${i} – ${i === 0 ? `это ноль` : (i % 2 === 0 ? `четное число` : `нечетное число`)}`);
}



//------2 задание------

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers);

const numbers2 = numbers.slice();

numbers2.splice(3, 2);

console.log(numbers2);



//------3 задание------

const randomNumbers = new Array(5);

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