// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Checks if a given number in the range 40....100000 presents in two number (in  #
// #                     same range).                                                                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 30, 2019.                                                            #
// #                                                                                                    #
// ######################################################################################################

let reverseString = (str) => {
    let revStr = "";
    for (let x = str.length-1; x >= 0; x--)
        revStr.concat(`${str[x]}`);
    return revStr;
};

let runTest = () => {
    console.log()
};