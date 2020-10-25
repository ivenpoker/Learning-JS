// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Calculates the product of values (numeric values) in an array.                 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const computeProductOfNumericValues = (someArray = []) =>
    someArray.reduce((acc, val) => !Number.isNaN(val) && Number.isFinite(val) ? acc * Number.parseFloat(val) : acc , 1);

(function () {

    console.log(computeProductOfNumericValues([1, 2, 3]));
    console.log(computeProductOfNumericValues([100, -200, 3]));
    console.log(computeProductOfNumericValues([1, 2, 'a', 3]));

})();