movieApp.controller("movCntrl", function ($scope, $http, $rootScope, dataUrl) {
	$scope.data;
	
	$http.get(dataUrl)
	.success(function (data) {
		$scope.data = data.data;
		console.log($scope.data[0][19]);
	})
	.error(function (error) {
		$scope.data.error = error;
	});
	
	//details about the movie that are retrieved on click
	$scope.sendDetails = function (details){
		$rootScope.details = details;
		console.log(details);
	}
	
});