'use strict'

const sumToCycle = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const sumToRecursion = (num) => {
    if (num == 0) {
        return num;
    }
    return num + sumToRecursion(--num)
}

const sumToFormula = (num) => {
    return num * (num + 1) / 2;
}

console.log(sumToCycle(100));
console.log(sumToRecursion(100));
console.log(sumToFormula(10000));

// Думаю, что самый быстрый способ подсчета это подсчет по формуле, а самый медленный при помощи рекурсии

//sumToRecursion(100000) Нельзя выполнить, вылезет ошибка переполнения стека