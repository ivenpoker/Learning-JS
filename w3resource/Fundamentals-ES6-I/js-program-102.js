// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates an array of elements, grouped based on the position in the original a   #
// #                     arrays.                                                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const zip = (...arrays) => {
    const maxLength = Math.max(...arrays.map(x => x.length));
    return Array.from({length: maxLength}).map((_, i) => {
        return Array.from({length: arrays.length}, (_, k) => arrays[k][i]);
    });
};

(() => {

    console.log(zip(['a', 'b'], [1, 2], [true, false]));
    console.log(zip(['a'], [1, 2], [true, false]));

})();