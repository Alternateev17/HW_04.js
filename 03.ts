// 3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function getNumder(num_1, num_2, num_3) {
    let result = (num_1 * 100) + (num_2 * 10) + num_3;
    console.log(result);
    return result;
}

getNumder(2, 7, 9);