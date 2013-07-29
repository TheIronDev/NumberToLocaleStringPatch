(function(){
	var tempNumber = 1000;
	// toLocaleString *should* return different strings based on different locales
	if(	tempNumber.toLocaleString('en') !== '1,000' ||
		tempNumber.toLocaleString('fr') !== '1 000') {
			window.Number.prototype.toLocaleString = function(){
				var currentNumber = this.toString(),
					locale,
					navigatorLanguage;

				navigatorLanguage = (navigator && navigator.language) || 'en';									
				locale = arguments[0] || navigatorLanguage;
				
				// TODO: Find more brands
				// TODO: Intelligently arrange formatting.
				/** 	For instance, DE and AT will likely format numbers the same.
				 *		Rather than have non-Dry code, we can categorize formatting based on type.
				**/
				switch(locale) {
					case 'en':
						return currentNumber.split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
						break;
					case 'fr':
						return currentNumber.split( /(?=(?:\d{3})+(?:\.|$))/g ).join( " " );
						break;
					case 'de':
						return currentNumber.split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "." );
						break;
				}

				// Failsafe scenerio
				return currentNumber;
			};
	}
})(); // Imediately Invoke
