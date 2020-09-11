// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the kth greatest element of an array.                                     #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 03, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let inRange = (low, num, high) => {
    return low <= num && num <= high;
};

let findKthGreatest = (data, kth) => {
    if (!Array.isArray(data)) {
        throw new Error(`Invalid first argument type. Expected array, got ${typeof(data)}`);
    }
    if (Number.isNaN(kth)) {
        throw new Error(`Invalid second argument type. Expected number, got ${typeof(kth)}`);
    }
    if (!inRange(0, kth, data.length-1)) {
        throw new Error(`Invalid index. Must be in range [${0}, ${data.length}]`);
    }
    console.log(`Sorted data: ${data.sort().reverse()}`);
    return data.sort().reverse()[kth-1];
};

let runTests = () => {
    console.log(findKthGreatest([1, 2, 6, 4, 5], 3));
    console.log(findKthGreatest([-10, -25, -47, -36, 0], 1));
};

// Run the test cases ...
runTests();
