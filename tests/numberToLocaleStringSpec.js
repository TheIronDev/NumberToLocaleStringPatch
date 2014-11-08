'use strict';

// Conveniently, phantomJS does not handle number.toLocaleString correctly,
// so this should be testing for the override.
describe("The Number Locale Shim", function(){
	var number;

	beforeEach(function() {
		number = Math.PI*1000000;
	});

	describe('when passing in different locales', function(){
		it("should produce '3,141,592.654' for English Locales", function() {
			expect(number.toLocaleString('en')).toEqual("3,141,592.654");
		});
		it("should produce '3 141 592,654' for French Locales", function() {
			expect(number.toLocaleString('fr')).toEqual("3 141 592,654");
		});
		it("should produce '3.141.592,654' for German Locales", function() {
			expect(number.toLocaleString('de')).toEqual("3.141.592,654");
		});
		it("should produce '3,141,592.654' for Austrian Locales", function() {
			expect(number.toLocaleString('at')).toEqual("3,141,592.654");
		});

		it("should produce '3,141,592.654' for Australian Locales", function() {
			expect(number.toLocaleString('au')).toEqual("3,141,592.654");
		});

		it("should produce '3,141,592.654' for British Locales", function() {
			expect(number.toLocaleString('gb')).toEqual("3,141,592.654");
		});

		it("should produce '3 141 592,654' for Finish Locales", function() {
			expect(number.toLocaleString('fi')).toEqual("3 141 592,654");
		});

		it("should produce '3 141 592,654' for Russian Locales", function() {
			expect(number.toLocaleString('ru')).toEqual("3 141 592,654");
		});

		it("should produce '3 141 592,654' for Swedish Locales", function() {
			expect(number.toLocaleString('sv')).toEqual("3 141 592,654");
		});

		it("should produce '3 141 592,654' for Polish Locales", function() {
			expect(number.toLocaleString('pl')).toEqual("3 141 592,654");
		});

		it("should produce '3 141 592,654' for Estonian Locales", function() {
			expect(number.toLocaleString('et')).toEqual("3 141 592,654");
		});

		it("should produce '3.141.592,654' for Netherland Locales", function() {
			expect(number.toLocaleString('nl')).toEqual("3.141.592,654");
		});

		it("should produce '3.141.592,654' for Spanish Locales", function() {
			expect(number.toLocaleString('es')).toEqual("3.141.592,654");
		});

		it("should produce '3.141.592,654' for Danish Locales", function() {
			expect(number.toLocaleString('da')).toEqual("3.141.592,654");
		});

		it("should produce '3.141.592,654' for Italian Locales", function() {
			expect(number.toLocaleString('it')).toEqual("3.141.592,654");
		});

		it("should produce '3.141.592,654' for Greek Locales", function() {
			expect(number.toLocaleString('el')).toEqual("3.141.592,654");
		});

		it("should produce '3 141 592,654' for Finnish Locales", function() {
			expect(number.toLocaleString('fi')).toEqual("3 141 592,654");
		});
		it("should produce '3,141,592.654' for Norway Locales", function() {
			expect(number.toLocaleString('no')).toEqual("3,141,592.654");
		});
	});

	it("should round up if there are more than 3 decimal digits", function() {
		var decimalNumber = 0.1237;		
		expect(decimalNumber.toLocaleString('en')).toEqual("0.124");
	});
	it("should round appropriately if the 4th decimal digit is less than 5", function() {
		var decimalNumber = 0.1233;		
		expect(decimalNumber.toLocaleString('en')).toEqual("0.123");
	});

	it("should not append decimal digits", function() {
		var wholeNumber = 1234;		
		expect(wholeNumber.toLocaleString('en')).toEqual("1,234");
	});

	it("should be able to format Number objectes with '..' ", function() {

		expect(1234..toLocaleString('de')).toEqual("1.234");
		expect((1234.25).toLocaleString('de')).toEqual("1.234");
	});
});