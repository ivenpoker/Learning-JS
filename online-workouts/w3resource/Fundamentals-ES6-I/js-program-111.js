// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Builds an array, using an iterator function and an initial seed value.          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const unfold = (func=f=>f, seed) => {
    let result = [];
    let val = [null, seed];
    while ((val = func(val[1]))) {
        result.push(val[0]);
    }
    return result;
};

(() => {

    const tempFunc = (n) => (n > 50 ? false : [-n, n+10]);
    console.log(unfold(tempFunc, 10));

})();