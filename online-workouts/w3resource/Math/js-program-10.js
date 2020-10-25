// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Find the LCM of two numbers.                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 30, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const findLCMOfTwoNumbers = (x, y) => {
    if ((typeof(x) !== "number") || (typeof(y) !== "number")) {
        return false;
    }
    return (!x || !y) ? 0 : Math.abs((x * y) /  gcdOfTwoNumbers(x, y));
}

const gcdOfTwoNumbers = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

(function () {

    console.log(findLCMOfTwoNumbers(3, 15));
    console.log(findLCMOfTwoNumbers(10,15));

})();