// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Determines if a value is an integer or not.                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const isIntegerValueA = (someValue) => {
    return Number.isInteger(someValue) && Number.isFinite(someValue);
}

const isIntegerValueB = (someValue) => {
    if (typeof (someValue) !== "number") {
        return false;
    }
    return !Number.isNaN(someValue) && Number.parseInt(someValue) === someValue &&
            !Number.isNaN(Number.parseInt(someValue, 10));
}

(function () {

    console.log(isIntegerValueA(23));
    console.log(isIntegerValueA(4e2));
    console.log(isIntegerValueA(NaN));
    console.log(isIntegerValueA(23.75));
    console.log(isIntegerValueA(-23));

    console.log("==================================");

    console.log(isIntegerValueB(23));
    console.log(isIntegerValueB(4e2));
    console.log(isIntegerValueB(NaN));
    console.log(isIntegerValueB(23.75));
    console.log(isIntegerValueB(-23));

})();