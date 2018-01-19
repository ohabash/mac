
app.controller('auth', function($scope, $location, $timeout, $http) {
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


	// icon frontend stuff
	$('input#username').focus(function(){
		$('.user .submit-it').css('display', 'block');
		$(this).focusout(function(){
			if($(this).val().length<1){
				$('.user .submit-it').css('display', 'none');
				$(this).val('');
			}
		});
	});



});


