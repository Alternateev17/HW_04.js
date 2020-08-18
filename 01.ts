// 1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function getMinMaxNum(num_1, num_2) {
  return (num_1 < num_2) ? -1 : (num_1 > num_2) ? 1 : 0;
}
let res = getMinMaxNum(1, 2);

console.log(res);
