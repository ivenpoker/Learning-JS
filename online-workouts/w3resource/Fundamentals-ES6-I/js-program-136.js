// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Generates all permutations of a string.                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 24, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const stringPermutation = (str) => {
    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str];
    }
    return str.split('')
        .reduce((acc, letter, i) =>
            acc.concat(stringPermutation(str.slice(0, i) + str.slice(i+1)).map((val) => letter + val)),
            []
        )
};

(function () {

    console.log(stringPermutation('abc'));
    console.log(stringPermutation('*$*'));

})();