movieApp
.filter('movieFil', function() {
	return function(movieName) {
		if(movieName === null || movieName === '@home' || movieName === ''){
			return 'Movie TBA Onsite'
		} else {
			return movieName;
		}
	};
})
.filter('dateFil', function() {
	return function(date) {
		return date.substr(0,10);
	};
})
