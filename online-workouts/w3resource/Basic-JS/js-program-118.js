// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Checks whether a given integer is in a given range.                             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 01, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

let inRange = (low, val, high, inclusive) => {
     if (Number(low) > Number(high))
         return false;
     if (inclusive.toString() === 'true' || inclusive.toString() === 'false') {
         if (inclusive) {
             return low <= val && val <= high;
         } else {
             return low < val && val < high;
         }
     } else {
         throw TypeError(`Invalid argument type. Expected 'boolean' got '${typeof(inclusive)}'`);
     }
};

let runTests = () => {
    console.log(inRange(1, 2, 3, true));
    console.log(inRange(1, 2, -3, true));
    console.log(inRange(1.1, 1.2, 1.3, true));
};

// Run test program
runTests();