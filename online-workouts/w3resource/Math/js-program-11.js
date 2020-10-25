// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Finds the LCM of more than 2 integers.                                         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 25, 2020.                                                              #
// #                                                                                                    #
// ######################################################################################################

const lcmOfMoreThanTwoNumbers = (inputArray = []) => {
    if (!Array.isArray(inputArray)) {
        return false
    }
    let r1 = 0;
    let r2 = 0;
    let l = inputArray.length;
    for (let i = 0; i < l; i++) {
        r1 = inputArray[i] % inputArray[i+1];
        if (r1 === 0) {
            inputArray[i+1] = (inputArray[i] * inputArray[i+1] / inputArray[i+1]);
        } else {
            r2 = inputArray[i+1] % r1;
            if (r2 === 0) {
                inputArray[i+1] = (inputArray[i] * inputArray[i+1]) / r1;
            } else {
                inputArray[i+1] = (inputArray[i] * inputArray[i+1]) / r2;
            }
        }
    }
    return inputArray[l-1];
}

(function () {

    console.log(lcmOfMoreThanTwoNumbers([100, 90, 80, 7]));
    console.log(lcmOfMoreThanTwoNumbers([5, 10, 15, 25]));

})();