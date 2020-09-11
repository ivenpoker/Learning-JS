// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Find the number of trailing zeros in the decimal representation of the          #
// #                     factorial of a given number.                                                    #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 30, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let fact = (num) => {
    if (num < 1)
        return 1;
    return num * fact(num-1);
};

let findTrailingZeros = (num) => {
    let tempVal = fact(num);
    // console.log(`Factorial of ${num} -> ${tempVal}`);
    let digits = `${tempVal}`.split('');
    let zeroCnt = 0;

    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] === '0') {
            zeroCnt += 1;
        } else {
            break;
        }
    }

    return zeroCnt;
};

let runTests = () => {
    console.log(findTrailingZeros(8));
    console.log(findTrailingZeros(9));
    console.log(findTrailingZeros(10));
};

// Run the test program
runTests();