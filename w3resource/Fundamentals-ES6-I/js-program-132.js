// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the symmetric difference between two given arrays, using a provided        #
// #                     function as a comparator.                                                       #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 24, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const symmetricDifferenceWith = (arr = [], val, comp=f=>f) => [
    ...arr.filter((a) => val.findIndex((b) => comp(a, b)) === -1),
    ...val.filter((a) => val.findIndex((b) => comp(a, b)) === -1)
];

(() => {

    console.log(symmetricDifferenceWith(
        [1, 1.2, 1.5, 3, 0],
        [1.9, 3, 0, 3.9],
        (a, b) => Math.round(a) === Math.round(b)
    ));

})();