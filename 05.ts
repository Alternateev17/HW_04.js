// 5 Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.

function getMultiplicationTable(num) {
  let result = 0;
  let multiplication = 0;

  for (let i = 1; i <= 10; i++) {
    result = i;

    for (let j = num; j <= 14; j++) {
      multiplication += result * num;
      console.log(multiplication);
    }
    return  multiplication;
  }
  
}

 getMultiplicationTable(+prompt("Введите число от 1 до 9:"));
