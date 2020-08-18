// 8 Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

// function getBigNumber(num_1, num_2) {
//   let bigNum = 0;

//   if (num_1 >= 1 && num_2 <= 5) {
//     for (let i = num_1; i <= num_2; i++) {
//       if (i == num_2) {
//         bigNum = i;
//       }
//     }
//   } else {
//     console.log("Чисо не входт в деапозон от 1 до 5.");
//   }
//   console.log(bigNum);
//   return bigNum;
// }

// getBigNumber(+prompt("Введите первое число:"), +prompt("Введитте второе число:"));

function getBigNumber() {
  let bigNum = 0;
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    bigNum = arguments[i];
    // console.log(bigNum);
   
  } 
  
}

getBigNumber(8, 7, 100);
