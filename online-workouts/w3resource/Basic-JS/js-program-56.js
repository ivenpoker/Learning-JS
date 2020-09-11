// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Divide two positive numbers and return a string with properly formatted commas. #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: October 29, 2019.                                                               #
// #                                                                                                     #
// #######################################################################################################



n1 = 80;
n2 = 6;

let div = Math.round(n1 / n2).toString(), result_array = div.split("");

if (div >= 1000) {
    for (let i = div.length - 3; i > 0; i -= 3) {
        result_array.splice(i, 0, ",");
    }
    result_array;
}
console.log(result_array);