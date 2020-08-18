// 4 Написать функцию, которая проверяет, является ли переданное ей число простым.
function getPrimeNumber(num) {
    var primeNum = (num % 1 == 0 && num % num == 0 && num % 2 != 0) ? true : false;
    console.log(primeNum);
    return primeNum;
}
getPrimeNumber(7);
