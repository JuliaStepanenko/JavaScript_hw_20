'use strict'

// Домашка #20 — Замыкание

// 1.  Вам нужно написать функцию, которая принимает один параметр.
//     При первом вызове она его запоминает, при втором — суммирует переданный параметр с тем,
//     что передали первый раз и тд. Например: sum(3) = 3; sum(5) = 8; sum(20) = 28

function calc(numb1){
    let sumNumb = numb1;

    function calc2(numb2){
        return sumNumb += numb2;
    }

    return calc2;
}

let sumSum = calc(0);

console.log(sumSum(3));  //3
console.log(sumSum(5));   //8
console.log(sumSum(20));   //28
console.log("");




// 2. Возьмите счетчик, который мы писали на уроке и добавьте ему возможность задавать начальное значение
//     (с которого будет начинаться отсчет), шаг счетчика (то, сколько будет добавляться при каждом вызове)
//     при инициализации и метод для сброса к начальному значению.

console.log("Сounter");

function counterWrap(counterStart = 0, counterStep= 1 ){
    let  counterSum = counterStart ;

    function counterCalc(){
        return counterSum += counterStep;
    }

    function reset(){
        return counterSum = 0;
    }

    return {counterCalc,reset};
}

// Наша функция с переданными значениями : начало счета, шаг;
let counter = counterWrap(10, 3);

// Вызываем метод для срабатывания счетчика 1 раз.
console.log(counter.counterCalc());

// Вызываем метод для срабатывания счетчика 2-й раз.
console.log(counter.counterCalc());


// Вызываем метод для срабатывания счетчика 3-й раз.
console.log(counter.counterCalc());

// Вызываем метод для сброса.
console.log(counter.reset());