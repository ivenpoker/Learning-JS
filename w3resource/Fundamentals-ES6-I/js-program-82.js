// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Maps the values of an array to an object using a function, where the key-value  #
// #                     pairs consist of the original value as the key and the mapped value.            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const mapKeys = (mainArr = [], func = f => f) =>
                mainArr.map((val) => func(val)).reduce
                    ((acc, val, i) => ({
                        ...acc,
                        [mainArr[i]]: val
                    }), {});

(() => {

    console.log(mapKeys(['1', '2', '3', '4'], (val) => `#${val}`));
    console.log(mapKeys([1, 2, 3, 4, 5], (val) => Math.pow(Number(val), 2)))

})();