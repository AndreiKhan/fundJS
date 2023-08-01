//------1 задание------

let cube = prompt('Введите число которое хотите возвести в куб');


console.log(`${cube} в кубе = ${getCubeNumber(cube)}`);


function getCubeNumber (num) {


    const result = num ** 3 || 0;

    return result

    // if (num) {
    //     console.log(`${num} в кубе = ${num ** 3}`);
    // }
    // else {
    //     num = 0;
    //     console.log(`${num} в кубе = ${num ** 3}`);
    // }
}



//------2 задание------

let salary = prompt('Введите зарплату');


getSalary(salary);


function getSalary (num) {

    if (num) {
        num *= 0.87;
        console.log(`Размер заработной платы за вычетом налогов равен ${num}`);
    } else {
        console.log(`Введенно не число`);
    }
}



//------3 задание------

let number1 = Number(prompt('Введите первое число'));

let number2 = Number(prompt('Введите второе число'));

let number3 = Number(prompt('Введите третье число'));


findMax(number1, number2, number3);


function findMax(num1, num2, num3) {
    
    return Math.max(num1, num2, num3);

}



//------4 задание------

let param1 = Number(prompt('Введите число'));
let param2 = Number(prompt('Введите число'));


console.log(`${param1} + ${param2} = ${sum(param1, param2)}`);

if (param1 > param2) {
    console.log(`${param1} - ${param2} = ${diff(param1, param2)}`);
} else {
    console.log(`${param2} - ${param1} = ${diff(param1, param2)}`);
}

console.log(`${param1} * ${param2} = ${multi(param1, param2)}`);
console.log(`${param1} : ${param2} = ${div(param1, param2)}`);


function sum (num1, num2) {
    return num1 + num2;
}

function diff (num1, num2) {

    if (num1 > num2) {
        return num1 - num2;

    } else {
        return num2 - num1;
    }
}

function multi (num1, num2) {
    return num1 * num2;
}

function div (num1, num2) {
    return num1 / num2;
}