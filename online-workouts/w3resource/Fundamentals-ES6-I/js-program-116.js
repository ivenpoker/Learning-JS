// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks if a predicate (second argument) is truthy on all elements of a          #
// #                     collection (first argument).                                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 20, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const doCheck = (collection, pred=f=>f) =>
    collection.every(pred);

(() => {

    console.log(doCheck([1, 2, 3, 4, 5], (val) => val >= 0));
    console.log(doCheck([-1, 3, 4, 5, 9], (val) => val <= 0));

})();