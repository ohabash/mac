var app = angular.module('MAC');


// ListenContrller
app.controller('ListenController', function ($scope, $rootScope, $location) {
	// console.log($scope);
	$scope.PAGE = function (viewLocation) {
    	return viewLocation === $location.path();
	};
});


// toggleMenu
app.controller('menuCtrl', function ($scope, $timeout, $location) {
	$scope.isActive = false;
	$scope.toggleMenu = function() {
		$scope.isActive = !$scope.isActive;
	}
	//data-href
	// $('[data-href]').click( function(){
	// 	window.location.href = $(this).data('href');
	// });

	//back to lockscreen
	$scope.go = function(where) {
		console.log('logOut to: '+ where);
		$location.path(where);
	};

	// init safari
	$scope.goThere = function() {
	    var here = "https://le-velgear.com";
	    $('.safari-iframe iframe').attr('src', here);
	  }

	$timeout(function(){
		$("#cam .close1").click(function(){
			console.log('STOPcam')
			var video = $('#CAM')[0];
			video.play();
		});
	}, 700);

	$scope.startCAM = function() {
      console.log('startCAM')
    // $(function(){
      var video = $('#CAM')[0],
        cvs = document.createElement('canvas'),
        ctx = cvs.getContext('2d');
      // video = $('video');
      navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
      
      navigator.getMedia({ video: !0, audio: !1 }, function(stream)
      {
        if(navigator.mozGetUserMedia)
          video.mozSrcObject = stream;
        else
        {
          var vu = window.URL || window.webkitURL;
          video.src = vu.createObjectURL(stream);
          // $('video').attr('src', vu.createObjectURL(stream));
        }
        video.play();
      }, function(error)
      {
        if(window.console)
          console.error(error);
      });
      
      video.addEventListener('canplay', function(ev)
      {
        if(!streaming)
        {
          height = video.videoHeight / (video.videoWidth / width);
          video.setAttribute('width', width);
          video.setAttribute('height', height);
          streaming = !0;
        }
      }, !1);

      $(video).on('click', function(){
        cvs.width = video.width;
        cvs.height = video.height;
        
        ctx.drawImage(video, 0, 0, cvs.width, cvs.height);
        console.log('taking pic');
        // $scope.desktop_arr.push(cvs.toDataURL('image/png'));
        var msg =  $scope.username+" - "+new Date($.now());
        var msg = "Double Click to Download"
        var tmplt = "<div class=\"deskcon PHOTO pull-right_\"> <img src=\""+cvs.toDataURL('image/png')+"\"> <p>"+msg+"</p> </div>";
        $('#deskcons').append(tmplt);
        dowld();
        function dowld(){
          $(".deskcon").draggable({ containment: 'drag' });
          $('.PHOTO').dblclick( function(){
            console.log('photo clicked')
            var s = $(this).find('img').attr('src');
            var a = $('<a href="' + s + '" download="photo.png"></a>').appendTo('#deskcons');
            a[0].click();
            a.remove();
          });
        }
        // console.log($scope.desktop_arr);
      });

    }

	 // init cam
	 // $scope.camINIT = function() {
	 // 	$('.window#cam .content').append("<video id=\"CAM\" width=\"100%\" height=\"100%\"></video>");
	 // }
});


// toggleMenu
app.controller('lockScreen', function($scope, $location, $timeout, $http) {
	// console.info('these scripts demo everything accept my ability to ')
	$scope.token = "AIzaSyDQH70jXCG9FH2831ErEoJs7cppRLYQECo";
	$scope.sheet = "1xwFAn1hSpKs6hPqBflIZeV86zGVKIkSDx9N8IJ8Y79o";
	// getUsers
	$scope.getUsers = function() {
		var url = "https://sheets.googleapis.com/v4/spreadsheets/"+$scope.sheet+"/values/Sheet1?key="+$scope.token+"&alt=json&majorDimension=rows";
		$scope.users = []
		// console.info(url);
		$http.get(url).then(function(response) {
			// console.log(response);
			var userTable = response.data.values;
			for (var i = 1, len = userTable.length; i < len; i++) {
				console.log('pushing '+userTable[i])
				$scope.users.push(userTable[i]);
			}
		});
	};$scope.getUsers();


	$scope.writeNewUser = function() {
		var url = "https://hooks.zapier.com/hooks/catch/818284/5fhz9i?username="+$scope.username+"&email="+$scope.email;
		console.log(url);
		$scope.users = [];
		$http.post(url).then(function(response) {
			console.log(response);
		});
	};


	// login
	$scope.userCheck = function(view) {
		for( var i = 0, len = $scope.users.length; i < len; i++ ) {
	        // console.log(i+" vs. "+ $scope.users.length);
		    if( $scope.users[i][0] === $scope.username ) { //if username was found
		        result = $scope.users[i];
		        // console.log('TRUE');
		        // access();
		        return true
		        break;
		    }else if(i+1 == $scope.users.length){ //if user name was not there
	    		return false;
		    }
		}
	};
	$scope.login = function(view) {
		// check provided username
		if($scope.userCheck()){
			access();
		}else{
			addAlert("exclamation-triangle", "Wrong Username", $scope.username+" is not a registered username");
		}

		// grant access
		function access(){
			$('.user .submit-it i').addClass('fa-circle-o-notch fa-spin');
			$('.user input').focusout();
			// var val = $('.user input').val();
			// $scope.username = val;
			$.cookie('user', $scope.username);
			// welcome notice
			addAlert("magic", "welcome "+$scope.username, "Enjoy my translation of macOS into web languages. Remember this is not your desktop.");
			$timeout(function(){
				if ($scope.username) {
					$scope.user = this.username;
						$('.user input').focusout();
		            	$location.path(view); // path not hash
		            	$('body').click()
		        }else{
		        	$('.user .submit-it i').removeClass('fa-circle-o-notch fa-spin');
		        }
			}, 700);
		}
	}


	// register
	$scope.register = function() {
		$scope.getUsers();
		if($scope.username.length > 3 && $scope.email.length > 3){
			if(!$scope.userCheck()){
				$scope.writeNewUser();
				addAlert("star", "Your account was created", "You may now login using your username.");
				$timeout(function(){
					$scope.getUsers();
					$scope.toggleForms();
				}, 700);

			}else{
				addAlert("exclamation-triangle", "Username Already in use", "that username is already in use");
			}
		}else{
			addAlert("exclamation-triangle", "Incomplete Info", "Please provide a username and email that is more than 3 characters");
		}
		// function writeNewUser(){

		// }
	};


	// toggleForms
	$scope.toggleForms = function() {
		var
			login_form = $('form#login'),
			register_form = $('form#register')
		;
		if(login_form.hasClass('active')){
			login_form.removeClass('active');
			register_form.addClass('active');
			$('.firsttime').find('p').text('Login');
		}else{
			register_form.removeClass('active');
			login_form.addClass('active');
			$('.firsttime').find('p').text('Register');
		}
	};
});


// skills
// app.controller('skills', function ($scope, $timeout, $location) {
// 	$scope.updateView = function() {
// 		console.log('updateView');
// 		$timeout((function() {
// 			var $carousel = $('.skill-icons.vc').slick({
// 				infinite: false,
// 				// slidesToShow: 3,
// 				// slidesToScroll: 3
// 				arrows: false,
// 				dots: true,
// 				rows: 4,
// 				slidesPerRow: 6
// 			});
// 			// $timeout((function() {$carousel.slick('slickFilter', ":odd");}), 5000)
// 			$scope.slickFilter = function() {
// 				console.log($scope.searchText);
// 				// $('.skill-item:contains("'+$scope.searchText+'")').show();
// 				$('.skill-item:contains("'+$scope.searchText+'")').removeClass('vc');
// 				$scope.updateView();
// 				// var filterString = 'python';
// 				// $carousel.slick('slickUnfilter');
// 		  // 		$carousel.slick('slickFilter', '[name="'+filterString+'"]');
// 			}
// 		}), 1000)
// 	}
// 	$scope.updateView();
// });

















