// #######################################################################################################
// #                                                                                                     #
// #    Program Purpose: Gets the distance between two given points.									 #
// #     Program Author: Happi Yvan <ivensteinpoker@gmail.com>                                           #
// #       Program Date: August 04, 2020.                                                                #
// #                                                                                                     #
// #######################################################################################################

class Point {
	constructor(xVal, yVal) {
		this.x = xVal;
		this.y = yVal;
	}

	getXCord() {
		return this.x;
	}

	getYCord() {
		return this.y;
	}
}

const distanceBetweenPoints = (pointA = new Point(0, 0), pointB = new Point(0, 0)) =>
	Math.sqrt(Math.pow(pointB.getYCord() - pointA.getYCord(), 2) + Math.pow(pointB.getXCord() - pointA.getXCord(), 2));


(function () {

	console.log(distanceBetweenPoints(new Point(1, 1), new Point(2, 3)));
	console.log(distanceBetweenPoints(new Point(-1, -1), new Point(2, 3)));

})();