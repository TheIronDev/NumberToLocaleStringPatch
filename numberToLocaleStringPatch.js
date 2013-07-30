/* Author: Tyler Stark 
 * Name: Localized Numbers Patch
 * Purpose: Patch Legacy Browsers Usage of toLocaleString
 **/
(function(){
	var tempNumber = Math.PI*1000000;
	//  German and French localized numbers do not equal eachother.
	// If the following passes, it suggests that the locale parameter is being ignored.
	if(tempNumber.toLocaleString('de') === tempNumber.toLocaleString('fr') ) {
			// Helper Function to assist with formatting numbers
			var formatNumber = function(number, delimiter, decimalDelimiter){
				var numberString = number.toString(), 
					splitNumber = numberString.split('.'),
					splitFloats = '';

				// Check if the number's precision is greater than the thousanths place.
				if(splitNumber[1] && splitNumber[1].length > 3) {
					// If so, build out the tail end of the formatted Number.
					splitFloats = decimalDelimiter + number.toFixed(3).toString().split('.')[1];
				}

				return splitNumber[0].split( /(?=(?:\d{3})+(?:\.|$))/g ).join(delimiter) + splitFloats;
			};
			window.Number.prototype.toLocaleString = function(){
				var locale,
					navigatorLanguage,
					numberPrecision;
				

				navigatorLanguage = (navigator && navigator.language) || 'en';									
				locale = arguments[0] || navigatorLanguage;
				
				// TODO: Find more locales				
				switch(locale) {
					case 'en':
						return formatNumber(this, ',', '.');
					case 'fr':
						return formatNumber(this, ' ', ',');
					case 'de':
						return formatNumber(this, '.', ',');
				}

				// Failsafe scenerio
				return currentNumber;
			};
	}
})(); // Imediately Invoke
