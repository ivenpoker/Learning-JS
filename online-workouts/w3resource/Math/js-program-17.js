// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Calculates the sum of values in an array.                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const findSumOfValuesInArray = (someArray = []) =>
    someArray.reduce((acc, val) => !Number.isNaN(val) && Number.isFinite(val) ? acc + val : acc, 0);

(function () {

    console.log(findSumOfValuesInArray([1, 2, 3]));
    console.log(findSumOfValuesInArray([100, -200, 3]));
    console.log(findSumOfValuesInArray([1, 2, 'a', 3]));

})();