var app = angular.module('MAC');





// ListenContrller
app.controller('ListenController', function ($scope, $rootScope, Auth, $location, $firebaseAuth) {

  // console.log($scope);
  $scope.PAGE = function (viewLocation) {
      return viewLocation === $location.path();
  };
  



});












// nav controller
app.controller('nav', function ($scope, $rootScope, $location) {

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

















