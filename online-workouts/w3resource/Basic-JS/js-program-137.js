// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Test whether a given integer is greater than 15 return the given number,        #
// #                     otherwise return 15.                                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 02, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const doChecking = (num) => {
    while (num < 15) {
        num++;
    }
    return num;
};

const runTests = () => {
    console.log(doChecking('123'));
    console.log(doChecking('10'));
    console.log(doChecking('5'));
};

// Run test program
runTests();