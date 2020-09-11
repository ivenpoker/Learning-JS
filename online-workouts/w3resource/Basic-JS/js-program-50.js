// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Capitalizes the first letter of each word in a given string.                   #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: October 29, 2019.                                                              #
// #                                                                                                    #
// ######################################################################################################

let capitalize = (mainString) => {
    let newMainStr = mainString.split(" ");
    let final = '';
    for (let x = 0; x < newMainStr.length; x++) {
        if (newMainStr[x].length > 0)
            final += `${newMainStr[x].trim()[0]}`.toUpperCase() + newMainStr[x].trim().slice(1) + ' ';
    }
    return final.trim();
};

let runTests = () => {
    console.log(`${capitalize("first test case")}`);
    console.log(`${capitalize("second test Case")}`);
    console.log(`${capitalize('Third Test   case')}`);

};

// Main test case
runTests();