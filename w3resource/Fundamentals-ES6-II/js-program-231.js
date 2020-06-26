// ########################################################################################################
// #                                                                                                      #
// #    Program Purpose: Iterates over all own properties of an object in reverse, running a callback for #
// #					 each one.																	      #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                            #
// #       Program Date: June 26, 2020.                                                                   #
// #                                                                                                      #
// ########################################################################################################

const overOwnPropsInReverseA = (obj = {}, callback=f=>f) =>
	Object.keys(obj).reverse().forEach(callback);

const overOwnPropsInReverseB = (obj = {}, callback=f=>f) => {
	let objProps = [];
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			objProps = [...objProps, prop];
		}
	}
	objProps.reverse().forEach(callback);
};

(() => {

	const person = {
		firstName: "Peter",
		lastName: "Jakes",
		age: 34,
		nickname: "PJ"
	};

	overOwnPropsInReverseA(person, (val, idx) => console.log(`[A] Prop #${idx}:`, val));

	console.log();

	overOwnPropsInReverseB(person, (val, idx) => console.log(`[B] Prop #${idx}:`, val));
})();