// ######################################################################################################
// #                                                                                                    #
// #    Program Purpose: Finds the greatest common divisor (GCD) of more than two integers.             #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                          #
// #       Program Date: September 30, 2020.                                                            #
// #                                                                                                    #
// ######################################################################################################

const findGCDMoreThanTwoNumbers = (input = []) => {
	if (toString.call(input) !== "[object Array]")
		return  false;
	let len, a, b;
	len = input.length;
	if ( !len ) {
		return null;
	}
	a = input[ 0 ];
	for (let i = 1; i < len; i++) {
		b = input[ i ];
		a = findGCD(a, b);
	}
	return a;
}

const findGCD = (valA, valB) => {
	if ((typeof valA !== 'number') || (typeof valB !== 'number'))
		return false;
	valA = Math.abs(valA);
	valB = Math.abs(valB);
	while(valB) {
		let t = valB;
		valB = valA % valB;
		valA = t;
	}
	return valA;
}

(function () {

	console.log(findGCDMoreThanTwoNumbers([3, 15, 27]));
	console.log(findGCDMoreThanTwoNumbers([5, 10, 15, 25]));

})();