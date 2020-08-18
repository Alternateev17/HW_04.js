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
    var bigNum = 0;
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        bigNum = arguments[i];
        // console.log(bigNum);
        if (bigNum[0] > bigNum[1] && bigNum[0] > bigNum[2]) {
            res = bigNum;
            console.log(res);
        }
        else {
            console.log(res);
        }
    }
}
getBigNumber(8, 7, 100);
