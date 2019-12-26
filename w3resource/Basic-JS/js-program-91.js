// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the maximum possible sum of some of its k consecutive numbers (numbers    #
// #                     that follow each other in order.) of a given array of positive integers.        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let arrayMaxConsecutiveSum = (nums, k) => {
    if (!Array.isArray(nums))
        throw new Error(`Invalid first argument, expected 'array' got ${typeof(nums)}`);
    let result = 0;
    let temp_sum = 0;
    for (let i = 0; i < k - 1; i++) {
        temp_sum += nums[i];
    }
    for (let i = k-1; i < nums.length; i++) {
        temp_sum += nums[i];
        if (temp_sum > result) {
            result = temp_sum;
        }
        temp_sum -= nums[i-k+1];
    }
    return result;
};

let runTests = () => {
    console.log(arrayMaxConsecutiveSum([1, 2, 3, 14, 5], 2));
    console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
    console.log(arrayMaxConsecutiveSum([9, 3, 5, 1, 7], 2));
};

// Now let's run the test cases
runTests();