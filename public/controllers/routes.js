// configure our routes
movieApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })
        .when('/child', {
            templateUrl: 'views/child.html',
            controller: 'movCntrl'
        })
        .when('/teen', {
            templateUrl: 'views/teen.html',
            controller: 'movCntrl'
        })
        .when('/all', {
            templateUrl: 'views/all.html',
            controller: 'movCntrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
        .when('/details', {
            templateUrl: 'views/details.html',
            controller: 'movCntrl'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html'
        })
        .when('/login', {
            templateUrl: 'views/login.html'
        });
});

// create the controllers and inject Angular's $scope
movieApp.controller('aboutController', function ($scope, $http, dataUrl) {
    
    $http.get(dataUrl)
	.success(function (data) {
		$scope.data = data.meta;
	})
	.error(function (error) {
		$scope.data.error = error;
	});
});

movieApp.controller('contactController', function ($scope, $http, dataUrl) {
    
    $http.get(dataUrl)
	.success(function (data) {
		$scope.data = data.meta;
	})
	.error(function (error) {
		$scope.data.error = error;
	});
});