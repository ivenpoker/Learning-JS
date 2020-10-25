// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Rounds a number to a given decimal places.                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const roundNumberToSpecificDecimalPlaces = (someDecNum, numOfPlaces) => {
    if (Number.isNaN(someDecNum) || !Number.isFinite(someDecNum) ||
        Number.isNaN(numOfPlaces) || !Number.isFinite(numOfPlaces)) {
        return false
    }
    return Number(someDecNum).toFixed(numOfPlaces);
}

(function () {

    console.log(roundNumberToSpecificDecimalPlaces(12.375, 2));
    console.log(roundNumberToSpecificDecimalPlaces(12.37499, 2));
    console.log(roundNumberToSpecificDecimalPlaces(-10.3079499, 3));

})();