// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Divides an integer by another integer as long as the result is an integer and   #
// #                     return the result.                                                              #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let doTheDivision = (intA, intB) => {
    if (Number.isNaN(intA))
        throw new Error(`First argument must be a number`);
    if (Number.isNaN(intB))
        throw new Error(`Second argument must be a number`);

    if (intB === 1) {
        return intA;
    } else {
        while (intA % intB === 0) {
            intA /= intB;
        }
        return intA;
    }
};

let runTests = () => {
    console.log(doTheDivision(-12, 2));
    console.log(doTheDivision(13, 2));
    console.log(doTheDivision(13, 1));
};

// Run the test cases
runTests();