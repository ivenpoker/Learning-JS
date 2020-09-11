// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that invokes the method at a given key of an object.         #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const bindKey = (context, fn, ...args) =>
    function () {
        return context[fn].apply(context, args.concat(...arguments));
    };

const runTest = () => {
    const freddy = {
        user: 'fred',
        greet: function (greeting, punctuation) {
            return `${greeting} ${this.user}${punctuation}`
        }
    };
    const freddyBound = bindKey(freddy, 'greet');
    console.log(freddyBound('hi', '!'));
};

runTest();

