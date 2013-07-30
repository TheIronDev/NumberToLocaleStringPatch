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
				// If so, build out the tail end of the formatted Number.
				if(splitNumber[1] && splitNumber[1].length > 3) {					
					splitFloats = decimalDelimiter + number.toFixed(3).toString().split('.')[1];
				}

				return splitNumber[0].split( /(?=(?:\d{3})+$)/g ).join(delimiter) + splitFloats;
			};
			window.Number.prototype.toLocaleString = function(){
				var locale,
					navigatorLanguage,
					numberPrecision;
				

				navigatorLanguage = (navigator && navigator.language) || 'en';									
				locale = arguments[0] || navigatorLanguage;
				
				// TODO: Find more locales
				// Using the list from https://developers.google.com/chrome/web-store/docs/i18n
				switch(locale) {
					case 'en':
						return formatNumber(this, ',', '.');
					case 'au':
						return formatNumber(this, ',', '.');
					case 'gb':
						return formatNumber(this, ',', '.');
					case 'fr':
						return formatNumber(this, ' ', ',');
					case 'de':
						return formatNumber(this, '.', ',');
					case 'at':
						return formatNumber(this, ',', '.');
					case 'fi':
						return formatNumber(this, ' ', ',');
					case 'nl':
						return formatNumber(this, '.', ',');
					case 'fi':
						return formatNumber(this, ',', '.');
					case 'es':
						return formatNumber(this, '.', ',');
					case 'da':
						return formatNumber(this, '.', ',');
					case 'el':
						return formatNumber(this, '.', ',');
					case 'et':
						return formatNumber(this, ' ', ',');
					case 'it':
						return formatNumber(this, '.', ',');
					case 'pl':
						return formatNumber(this, ' ', ',');
					case 'sv':
						return formatNumber(this, ' ', ',');
					case 'ru':
						return formatNumber(this, ' ', ',');
					case 'no':
						return formatNumber(this, ',', '.');
				}

				// Failsafe scenerio
				return currentNumber;
			};
	}
})(); // Imediately Invoke
