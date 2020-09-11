// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a shallow clone of an object.                                           #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: March 14, 2020.                                                                 #
// #                                                                                                     #
// #######################################################################################################

const shallowCloneA = (obj = {}) => {
    return Object.keys(obj).reduce((acc, key) =>
        ({
            ...acc,
            [key]: obj[key]
        }), {});
};

const shallowCloneB = (obj = {}) => Object.assign({}, obj);

const printLine = (char = '-', times = 15) => {
    let line = '';
    Array(times).fill(0).forEach(() => line += char);
    console.log(line);
};

(function () {

    const person = {
        firstName: 'James',
        lastName: 'King',
        age: 40,
        family: {
            wife: {
                firstName: 'Jane',
                lastName: 'Doe'
            },
            children: [
                {firstName: 'Peter', lastName: 'king', age: 10}
            ]
        }
    };

    console.log("Person:", person);

    printLine('-', 35);
    console.log("Shallow clone A:", shallowCloneA(person));
    printLine('-', 35) ;
    console.log("Shallow clone B:", shallowCloneB(person));

})();