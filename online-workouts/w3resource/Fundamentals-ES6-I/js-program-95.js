// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Adds an event listener to an element with the ability to use event delegation.  #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: February 17, 2020.                                                              #
// #                                                                                                     #
// #######################################################################################################

const on = (elem = {}, evt, fn, opts = {}) => {
    const delegatorFunc = (e) => e.target.matches(opts.target) &&
            fn.call(e.target, e);
    elem.addEventListener(evt, opts.target ? delegatorFunc: fn, opts.options || false);
    if (opts.target)
        return delegatorFunc;
};

(() => {

    const fn = () => console.log('!');
    console.log(on(document.body, 'click', fn));
    console.log(on(document.body, 'click', fn, {target: 'p'}));
    console.log(on(document.body, 'click', fn, {options: true}));

})();