// 5 Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
function getMultiplicationTable(num) {
    var result = 0;
    var multiplication = 0;
    for (var i = 1; i <= 10; i++) {
        result = i;
        for (var j = num; j <= 14; j++) {
            multiplication += result * num;
            console.log(multiplication);
        }
        return multiplication;
    }
}
getMultiplicationTable(+prompt("Введите число от 1 до 9:"));
