// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Iterates over all own properties of an object, running a callback for each one. #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 15, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const performPropIteration = (someObj = {}, callback = f => f) =>
    Object.keys(someObj).forEach(callback);

(() => {

    const person = {
        firstName: 'James',
        lastName: 'Peter',
        printName: function () {
            console.log(`[${this.firstName}, ${this.lastName}]`);
        }
    };

    performPropIteration(person, (prop) => console.log(`Prop: ${prop}`));

})();