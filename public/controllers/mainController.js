movieApp.constant("dataUrl", "https://data.cityofchicago.org/api/views/cyqk-tzjs/rows.json?accessType=DOWNLOAD")
movieApp.controller('mainController', function ($scope, $http, $rootScope, dataUrl) {
    
    $http.get(dataUrl)
	.success(function (data) {
		$scope.data = data.meta;
	})
	.error(function (error) {
		$scope.data.error = error;
	});
});