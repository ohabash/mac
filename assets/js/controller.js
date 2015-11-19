var app = angular.module('followUp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'partials/homepage.html',
            controller: 'homeController'
		})

		.when('/start', {
			templateUrl: 'partials/start.html',
            controller: 'startController'
		})

		.otherwise({ redirectTo: '/404', 
			templateUrl:'partials/404.html',
            controller: '404Controller'
		});

});



// CONTROLLERS ============================================


app.controller('followUp', ['$scope', function($scope) {
  $scope.setRoute = function(route) {
		$location.path(route);
	}
}]);

// home page controller
app.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
});

// start page controller
app.controller('startController', function($scope) {
    $scope.pageClass = 'page-start';
});

// 404 page controller
app.controller('404Controller', function($scope) {
    $scope.pageClass = 'page-404';
});





//hash conflict
var directives = angular.module('directives');

directives.directive('showtab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });






