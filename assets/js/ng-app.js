var app = angular.module('MAC',[
	"ngRoute",
	"contentful",
	"slickCarousel",
	"firebase",
	"moment-filter",
]);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);






// firbase config
app.constant('FB', {
	url: 'https://demoapp-c83c3.firebaseio.com'
});


// check "$requireSignIn" when changing routes
// https://github.com/firebase/angularfire/blob/master/docs/guide/user-auth.md#ngroute-example
app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/");
    }
  });
}]);





// views
app.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			controller: 'auth',
			templateUrl: 'partials/views/auth.html',
			activeClass: 'auth',
			activeJs: 'auth'
		})
		.when('/desktop', {
			controller: 'auth',
			// template: 'Test Template <img src="/partials/views/tt.png"/>',
			templateUrl: '/partials/views/desktop.html',
			activeClass: 'desktop',
			activeJs: 'desktop',
			resolve: {
				"currentAuth": ["Auth", function(Auth) {return Auth.$requireSignIn(); }]
			}
		})
		.when('/skills', {
			controller: 'auth',
			templateUrl: 'partials/views/skills.html',
			activeClass: 'skills',
			activeJs: 'skills'
		})
		.otherwise({
			templateUrl:'partials/views/404.html'
		});	
		$locationProvider.html5Mode(true);
});




// contentful config
app.config(function(contentfulProvider){
	contentfulProvider.setOptions({
	    space: '5or9ydh1w7rc',
	    accessToken: '35eab5fce649e6cb96cdc6c3b2cb2da65db1aa44c27a45b2cad0c2bf943538a7'
	});
});

	


