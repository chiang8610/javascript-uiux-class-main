function getRangom(x) {

    return Math.floor(Math.random() * x) + 1;
}

let arr = [];
let n = 0;
function aaa() {

    for (let i = 1; i < 6; i++) {

        let num = getRangom(38);

        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {
            arr.push(num);
        }


        arr.sort(function (a, b) {
            /**
             * 用數字排序
             * a - b 指的是由小到大
             * b - a 指的是由大到小
             * 
             * 若只有 arr.sort()，括號裡面沒有排序用的 function，
             * 則以字串作為排序依據，例如 [20, 5, 9, 10]，
             * 就會變成 [10, 20, 5, 9]
             */
            return a - b;
        });
    }

    n = getRangom(8);

    return `第一區好號碼:${arr}，特別號${n}`
    // `第一區號碼為： ${arr.join(",")}，第二區號碼為： ${n}`;// 
}
alert(aaa());
