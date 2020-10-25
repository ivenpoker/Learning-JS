// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Determines if a value is an integer or not.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const isIntegerValue = (someValue) => {
    return Number.isInteger(someValue) && Number.isFinite(someValue);
}

(function () {

    console.log(isIntegerValue(23));
    console.log(isIntegerValue(4e2));
    console.log(isIntegerValue(NaN));
    console.log(isIntegerValue(23.75));
    console.log(isIntegerValue(-23));

})();