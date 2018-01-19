/*global Firebase*/



app.controller('desktop', function($scope, $firebaseObject, $firebaseArray, $timeout, Auth, FB, $firebaseAuth, $rootScope, $location) {

	// Auth.$onAuthStateChanged(function(u) {
	// 	$rootScope.u = u;
	// 	// $scope.userkey(u);
	// });
	// $scope.userkey= function(u) {
 //      // create child
 //      var ref = firebase.database().ref().child('userkey');
 //      $scope.data = $firebaseObject(ref); // putting a console.log here won't work, see below
 //      $scope.userOBJ = $firebaseArray(ref);

 //      // method
 //      $scope.userOBJ.$save({
 //        email: u.email,
 //        name: u.displayName,
 //        uid: u.uid,
 //        convo_id: 'convos_'+u.uid
 //      });
 //    };
	$timeout(function() {
		console.log($rootScope.u);
		addAlert("star", "Welcome, "+$rootScope.u.displayName, "Enjoy my translation of macOS into web languages. Remember this is not your desktop.");
	}, 1000);

	// var user = firebase.auth().currentUser;
	// user.updateProfile({
	//   displayName: "Jane Q. User",
	//   photoURL: "https://example.com/jane-q-user/profile.jpg"
	// }).then(function() {
	//   addAlert("magic", "profile updated", "");
	// }).catch(function(error) {
	//   addAlert("exclamation-triangle", error.code, error.message);
	// });






});