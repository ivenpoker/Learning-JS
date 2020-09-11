// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Reduce a given Array-like object into a value hash.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 21, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const toHash = (object, key) =>
    Array.prototype.reduce.call(
        object,
        (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc), {}
    );

(() => {

    console.log(toHash([4, 3, 2, 1]));
    console.log(toHash([{a: 'label'}], 'a'));

})();