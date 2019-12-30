// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks a number from three given numbers where two numbers are equal, finds     #
// #                     the third one.                                                                  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let findThirdNumber = (valA, valB, valC) => {
    if ((valA !== valB) && (valB !== valC) && (valA !== valB))
        return "Three numbers are unequal";
    if (valA === valB) return valC;
    if (valA === valC) return valB ;

    return valA;
};

let runTests = () => {
    console.log(findThirdNumber(1, 2, 2));
    console.log(findThirdNumber(1, 1, 2));
    console.log(findThirdNumber(1, 2, 3));
};

// Run the test program
runTests();
