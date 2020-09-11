// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Checks if a given number in the range 40....100000 presents in two number (in  #
// #                     same range).                                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 30, 2019.                                                            #
// #                                                                                                    #
// ######################################################################################################

let checkCondition = (lower, val, upper) => {
    if (val < 40 || val > 10000)
        return false;
    else
        return val >= lower && val <= upper;
};

let runTests = () => {
    console.log(checkCondition(40, 45, 4000));
    console.log(checkCondition(80, 79, 320));
    console.log(checkCondition(89, 30, 4000));
};

// Testing the program...
runTests();