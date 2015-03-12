var assert = require('chai').assert,
	sinon = require('sinon'),
	TestClass = require('../libs/test');

suite('test project', function() {
	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.clock = this.sandbox.useFakeTimers();
		this.testClass = new TestClass();
	});

	var testData1 = '',
		testData2 = '100,982,444,990,1',
		testData3 = 'Mark,Anthony,marka@lib.de';

	test('test request 1: one-line string input', function() {
		var array1 = this.testClass.strToArray(testData1),
			array2 = this.testClass.strToArray(testData2),
			array3 = this.testClass.strToArray(testData3);

		assert.isArray(array1);
		assert.isArray(array2);
		assert.isArray(array3);
	});

	teardown(function() {
	});
});
