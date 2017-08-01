var app = angular.module('MAC');


// ListenContrller
app.controller('talk', function ($scope, $timeout, $rootScope, $firebaseObject, $firebaseArray) {

    // got to bottom
    $scope.bottom = function() {
        console.log('bottom');
        $("#phone").animate({ scrollTop: $('#phone').prop("scrollHeight")}, 500);
    }

    // // default at bottom
    // $timeout(function () {
    //     $scope.bottom();
    // }, 6000);

    // get / set messages
    var ref = firebase.database().ref().child("messages");
    $scope.data = $firebaseObject(ref); // putting a console.log here won't work
    $scope.messages = $firebaseArray(ref);
    console.log("user: ",$scope.username)
    
    // timeformat (not used)
    $scope.formatDate = function(date, fmt) {
        function pad(value) {
            return (value.toString().length < 2) ? '0' + value : value;
        }
        return fmt.replace(/%([a-zA-Z])/g, function (_, fmtCode) {
            switch (fmtCode) {
            case 'Y':
                return date.getUTCFullYear();
            case 'M':
                return pad(date.getUTCMonth() + 1);
            case 'd':
                return pad(date.getUTCDate());
            case 'H':
                return pad(date.getUTCHours());
            case 'm':
                return pad(date.getUTCMinutes());
            case 's':
                return pad(date.getUTCSeconds());
            default:
                throw new Error('Unsupported format code: ' + fmtCode);
            }
        });
    };

    // addmsg
    $scope.addMessage = function() {
        $scope.messages.$add({
          text: $scope.newMessageText,
          user: "ohabash",
          time: new Date().valueOf()
        });
        $('#msgInput').val('');
        $scope.bottom();
    };

    // bottom on dom change
    $scope.$watch(function () {
       return document.body.innerHTML;
    }, function(val) {
       $scope.bottom();
    });


});
