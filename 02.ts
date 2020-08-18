// 2 Написать функцию, которая вычисляет факториал переданного ей числа.

function getFactorial(num) {
  
  let result = 1;

  while (num) {
    result *= num--;
  }
  console.log(result);
  return result;
}

getFactorial(5);
