// 2 Написать функцию, которая вычисляет факториал переданного ей числа.
function getFactorial(num) {
    var result = 1;
    while (num) {
        result *= num--;
    }
    console.log(result);
    return result;
}
getFactorial(5);
