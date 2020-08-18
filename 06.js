// 6 Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать.
function getRemainder(num_1, num_2) {
    var result = 0;
    var result_2 = 0;
    if (num_1) {
        result += num_1 - num_2;
        result_2 += result / result;
        console.log(result);
        console.log(result_2);
    }
}
getRemainder(17, 3);
