// 7 Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.

// function getSum(num_1, num_2) {

//     let result = 0;

//         for (let i = num_1; i <= num_2; i++ ) {
//             result += i;
//         }
//         console.log(result);
//    return result;
// }

// getSum(1, 7);

function getSum() {

    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
        
    }
    console.log(result);
    return result;

}
getSum(1, 7, 9, 8, 3);