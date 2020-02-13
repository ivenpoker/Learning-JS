// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Creates a function that invokes fn with a given context, optionally adding any  #
// #                     additional parameters to the beginning of the arguments.                        #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 13, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const bind = (fn, context, ...args) =>
    function () {
        return fn.apply(context, args.concat(...arguments));
    };

function greet(greeting, punctuation) {
    return `${greeting} ${this.user}${punctuation}`
}

const runTests = () => {
    const freddy = {user: 'Morning'};
    const freddyBound = bind(greet, freddy);
    console.log(freddyBound('Good', '!'));
};

runTests();