var app = angular.module('MAC');


// ListenContrller
app.controller('talk', function ($scope, Auth, $timeout, $rootScope, $firebaseObject, $firebaseArray) {

    // got to bottom
    $scope.bottom = function() {
        // console.log('bottom');
        $("#phone").animate({ scrollTop: $('#phone').prop("scrollHeight")}, 500);
    }


    Auth.$onAuthStateChanged(function(u) {
        
        // messages
        $rootScope.u = u;
        var m = "convos-"+$rootScope.u.uid;
        var ref = firebase.database().ref().child(m);
        $scope.data = $firebaseObject(ref); // putting a console.log here won't work
        $scope.messages = $firebaseArray(ref);

        //user key table 

    });


    // addmsg
    $scope.addMessage = function() {
        $scope.messages.$add({
            // user: $rootScope.u.uid,{
              text: $scope.newMessageText,
              display: $rootScope.u.displayName,
              email: $rootScope.u.email,
              time: new Date().valueOf()
            // }
        });
        $('#msgInput').val('');
        $scope.bottom();
        $scope.autoreply();
    };
    

    $scope.autoreply = function() {
        $scope.messages.$add({
            // user: $rootScope.u.uid,{
              text: "Though your message is databased; I am no longer monitoring for communications on this channel. Please find me at www.OmarHabash.com",
              display: "Omar Habash",
              email: "ContactOmarNow@gmail.com",
              time: new Date().valueOf()
            // }
        });
    };

    // bottom on dom change
    $scope.$watch(function () {
       // return document.body.innerHTML;
    }, function(val) {
       $scope.bottom();
    });


});
