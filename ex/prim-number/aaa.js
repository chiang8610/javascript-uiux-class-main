let isPrime = true;

for (let aaa = 2; aaa <= 100; aaa++) {
    for (let bbb = 2; bbb < aaa; bbb++) {

        if (aaa % bbb == 0) {
            isPrime = false;

        }

    }
    if (isPrime !== true) {
        // console.log(`${aaa}不是質數`);
        isPrime = true;
    }
    else {
        console.log(`${aaa}是質數`);
    }
}






// let isPrime1 = true;

// for (let dividend = 2; dividend <= 100; dividend++) {
//     for (let divisor = 2; divisor < dividend; divisor++) {

//         if (dividend % divisor == 0) {
//             isPrime1 = false;
//         }
//     }


//     if (isPrime1 !== true) {
//         console.log(`${dividend} != 質數`);
//         isPrime1 = true;
//     } else {
//         console.log(`${dividend} == 質數`);

//     }

// }