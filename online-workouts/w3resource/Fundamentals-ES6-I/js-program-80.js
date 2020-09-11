// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Implements the Luhn Algorithm used to validate a variety of identification      #
// #                     numbers, such as credit card number, IMEI numbers, National Identifier numbers  #
// #                     etc.                                                                            #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const luhnCheck = (num) => {
    let arr = `${num}`
        .split('')
        .reverse()
        .map((x) => Number.parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
};

(() => {

    console.log(luhnCheck('4485275742308327'));
    console.log(luhnCheck(6011329933655299));
    console.log(luhnCheck(123456789));

})();

