// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates the logical value of logical NOR operation for two given booleans.      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const logicalNOR = (valA, valB) => {
    return !(valA || valB);
};

const runTests = () => {
     console.log(`First case  -> ${logicalNOR(true, false)}`);
     console.log(`Second case -> ${logicalNOR(false, false)}`);
     console.log(`Third case  -> ${logicalNOR(true, true)}`);
};

// run program now.
runTests();