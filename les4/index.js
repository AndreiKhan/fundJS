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

const randomNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 10));

const sum = randomNumbers.reduce((acc, curr) => acc + curr, 0);

const minNumber = Math.min(...randomNumbers);

const hasNumber3 = randomNumbers.includes(3);

console.log(`Массив рандомных чисел => ${randomNumbers}`);

console.log(`Сумма массива => ${sum}`);

console.log(`Минимальное число => ${minNumber}`);

console.log(`Есть ли цифра 3 в массиве => ${hasNumber3}`);



//------* задание------

let x = 'x'

for (let i = 0; i < 20; i++) {

    console.log(x);
    x += 'x'
}