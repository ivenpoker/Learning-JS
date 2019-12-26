// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Finds the number of inversions of a given array of integers. NB. Two elements   #
// #                     of the array at stored position i and j from an inversion if a[i] > a[j] and    #
// #                     i < j.                                                                          #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: December 26, 2019.                                                              #
// #                                                                                                     #
// #######################################################################################################

let numberOfInversionsNaive = (arr) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                cnt++;
        }
    }
    return cnt;
};

let runTests = () => {
    console.log(numberOfInversionsNaive([0, 3, 2, 5, 9]));
    console.log(numberOfInversionsNaive([1, 5, 4, 3]));
    console.log(numberOfInversionsNaive([10, 30, 20, -10]));
};

// Run the tests and display the results
runTests();