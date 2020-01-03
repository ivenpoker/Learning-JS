// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Simplifies a given absolute path for a file in Unix-style.                      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: January 03, 2020.                                                               #
// #                                                                                                     #
// #######################################################################################################

const simplifyPath = (mainPath) => {
    let parts = mainPath.split('/');
    let newPath = [];
    let length = 0;

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (part === '.' || part === '' || part === '..') {
            if (part === '..' && length > 0) {
                length--;
            }
            continue;
        }
        newPath[length++] = part;
    }
    if (length === 0) {
        return '/';
    }
    let result = '';
    for (let i = 0; i < length; i++) {
        result += '/' + newPath[i];
    }
    return result;
};

const runTests = () => {
    console.log(simplifyPath('/home/var/./www/../html/sql/'));
};

// Run test cases for program
runTests();