/**
 * TestClass.
 *
 * @constructor
 */
var TestClass = function() {

};

/**
 * String to array converter
 *
 * @method strToArray
 * @param {string} testData
 *
 */
TestClass.prototype.strToArray = function(testData) {
	return testData.split(',');
};

module.exports = TestClass;
