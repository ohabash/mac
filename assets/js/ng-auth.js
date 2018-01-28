
app.controller('auth', function($scope, $timeout, Auth, FB, $firebaseAuth, $location, $firebaseObject, $firebaseArray) {
	


  Auth.$onAuthStateChanged(function(firebaseUser) {
    $scope.firebaseUser = firebaseUser;
    // console.log($scope.firebaseUser)
    if (firebaseUser) {
      $location.path('/desktop');
    } else {
      // console.log("Signed out");
    }
  });


	// createUser
    $scope.createUser = function() {
    	// console.log('createuser');
      $scope.message = null;
      $scope.error = null;
      // Create a new user
      Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
          $scope.profile(firebaseUser);
          $scope.success = "User created with uid: " + firebaseUser.uid;
          $scope.uid = firebaseUser.uid;
          // $scope.userkey(firebaseUser);
        }).catch(function(error) {
          $scope.error = error;
          addAlert("exclamation-triangle", error.code, error.message);
          console.error(error);
        });
    };



    // create user key
    $scope.userkey= function(u) {
      console.log(u);

      // create child
      var ref = firebase.database().ref().child('userkey');
      $scope.data = $firebaseObject(ref); // putting a console.log here won't work, see below
      $scope.userOBJ = $firebaseArray(ref);

      // method
      $scope.userOBJ.$add({
        email: u.email,
        name: u.displayName,
        uid: u.uid,
        convo_id: 'convos-'+u.uid
      }).then( function(error){
        addAlert("exclamation-triangle", error.code, error.message);
      });
    };




    // profile data update
    $scope.profile = function(u) {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: $scope.name
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        // addAlert("magic", "profile updated", "");
        $scope.userkey(u);
      }).catch(function(error) {
        addAlert("exclamation-triangle", error.code, error.message);
      });
    };




    //signIn
    $scope.signIn = function(e,p) {
      // login with Facebook
      $scope.firebaseUser = null;
      $scope.error = null;
      Auth.$signInWithEmailAndPassword(e, p).then(function(firebaseUser) {
          $scope.firebaseUser = firebaseUser;
          $scope.uid = firebaseUser.uid;
          // addAlert("star", "Welcome", firebaseUser);
          $location.path('/desktop');
          // console.log($scope.uid)
        }).catch(function(error) {
          $scope.error = error;
          addAlert("exclamation-triangle", error.code, error.message);
          // console.error(error);
        });
    };



    // logOut
    $scope.logout = function() {
      // console.log("logout()");
      Auth.$signOut();
      $location.path('/');
      addAlert("star", "You Are Now Signed Out", "");
    };


      // deleteuser
      $scope.deleteUser = function() {
        $scope.message = null;
        $scope.error = null;

        Auth.$deleteUser().then(function() { // Delete the currently signed-in user
          $scope.message = "User deleted";
          // console.log("good bye!");
          $location.path('/');
        }).catch(function(error) {
          $scope.error = error;
          // console.log(error)
          addAlert("exclamation-triangle", error.code, error.message);
        });
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






