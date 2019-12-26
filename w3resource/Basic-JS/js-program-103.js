// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the maximum number from a given positive integer by deleting exactly one  #
// #                     digit of the given number.                                                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let digitDelete = (num) => {
    let result = 0;
    let numDigits = [];
    while (num) {
        numDigits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let indexNum = 0; indexNum < numDigits.length; indexNum++) {
        let n = 0;
        for (let i = numDigits.length-1; i >= 0; i--) {
            if (i !== indexNum) {
                n = n * 10 + numDigits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
};

let runTests = () => {
   console.log(digitDelete(100));
   console.log(digitDelete(10));
   console.log(digitDelete(1245));
};

// Run the test cases
runTests();