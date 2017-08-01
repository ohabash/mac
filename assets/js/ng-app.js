var app = angular.module('MAC',[
	"ngRoute",
	"contentful",
	"slickCarousel",
	"firebase",
	"moment-filter"
]);

// views
app.config(function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			controller: 'ListenController',
			templateUrl: 'partials/views/lock.html',
			activeClass: 'lock',
			activeJs: 'lock'
		})
		.when('/desktop', {
			controller: 'ListenController',
			templateUrl: 'partials/views/desktop.html',
			activeClass: 'desktop',
			activeJs: 'desktop'
		})
		.when('/skills', {
			controller: 'ListenController',
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
	
