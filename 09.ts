// 9 Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).

function getEvenAddNum(num_1, num_2, bool) {

    let result = 0;
    
    for (let i = num_1; i <= num_2; i++) {
        result = i;
        // console.log(result);
        if (i > 0 == bool) {
            console.log(i);  
        } else if (i < 0 != bool) {
             console.log(i);
        }  
        } 
    }
   
getEvenAddNum(-7, 5, false);
