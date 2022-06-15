let num1 = 2;
let num2 = 5;

function caunt(a, b) {
    if (a > b) {
        return a;
    } else if (a === b) {

        return 'Są równe';
    } else {
        return b +' jest większa od ' + a;
    }

}
console.log(caunt(num1, num2))

// function caunt2(a, b) {
//     let countFinal = Math.max(a, b);
//     return countFinal;
// }
// console.log(caunt2(num1, num2))