// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Returns an object associating the properties to the values of a given array of  #
// #                     valid property identifiers and an array of values.                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const zipObjects = (objA = [], objB = []) =>
    objA.reduce((acc, val, idx) =>
        idx < objB.length ?
        ({
            ...acc,
            [val]: objB[idx]
        })
        :
        acc, {});

(() => {

    console.log(zipObjects(['a', 'b', 'c'], [1, 2]));
    console.log(zipObjects(['a', 'b'], [1, 2, 3]));

})();