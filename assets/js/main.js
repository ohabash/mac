$ (document) .ready (function(){
	// $('.drag').draggable();
	$(".drag").draggable({ containment: 'drag', scroll: true, handle: '.titlebar' });

    $(".window").draggable(
       { containment: "parent" }
    );




// resize
$(function() {
    $( ".window" ).resizable();
});

//window buttons hover state
// $('.window-rounds').hover(function () {
//     $('.window-rounds').addClass('hovered');
// });

$('.buttons').hover(function () {
    $(this).find('.window-rounds').addClass('hovered');
  }, function() {
    $(this).find('.window-rounds').removeClass('hovered');
  }
);


//get height of header and add that margin at the bottom of window
$('.titlebar').mousedown(function () {
    var titleHeight = $(this).height();
    var windowHeight = $(this).parent('.window').height();
    var newContentHeight = (windowHeight - titleHeight);
    // $(this).siblings('.content').css('height',newContentHeight);
    $(this).siblings('.content').find('ul').css('height',newContentHeight - 5);
    // $(this).siblings('.content').css('padding-bottom', $vars);
});

$('.content').hover(function () {
    var titleHeight = $(this).siblings('.titlebar').height();
    var windowHeight = $(this).parent('.window').height();
    var newContentHeight = (windowHeight - titleHeight);
    $(this).css('height',newContentHeight);
    $(this).find('ul').css('height',newContentHeight - 5);
});





// $('.titlebar').mousedown(function () {
//     $vars = $(this).height();
//     $(this).siblings('.content').css('padding-bottom', $vars);
// });



	//day of the week
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tues";
	weekday[3] = "Wed";
	weekday[4] = "Thurs";
	weekday[5] = "Fri";
	weekday[6] = "Sat";

	var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
   



// login input action
$('#username').keypress(function (e) {
  if (e.which == 13) {
    // event.preventDefault();
    $('#username').addClass('animated fadeOut');
    $('.loader').removeClass('hide');
        setTimeout(function() {
        $('.lockScreen').removeClass('fadeIn').addClass('animated fadeOut dr4')
        setTimeout(function() {
            $('.lockScreen').addClass('hide');
        }, 1000);
    }, 1000);
// window.location.href = "desktop.php";
  }
});


// logOut input action
$('.logOut').click(function () {
    $('.lockScreen').addClass('fadeIn').removeClass('hide');
    $('.loader').addClass('hide');
     $('#username').addClass('animated fadeIn').removeClass('fadeOut');
});


// bring active window to top
$(".window").mousedown(function(){
    $(this).addClass('active').siblings().removeClass('active');
});


//close windows
$( ".close1" ).click(function() {
    $(this).parents('.window').addClass('zoomOut animated').removeClass('active');
    $(this).parents('#skills').addClass('zoomOut animated');
}); 







//toolTips
 // $(function() {
 //    function notify( input ) {
 //      var msg = "Selected " + $.trim( input.data( "tooltip-title" ) || input.text() );
 //      $( "<div>" )
 //        .appendTo( document.body )
 //        .text( msg )
 //        .addClass( "notification ui-state-default ui-corner-bottom" )
 //        .position({
 //          my: "center top",
 //          at: "center top",
 //          of: window
 //        })
 //        .show({
 //          effect: "blind"
 //        })
 //        .delay( 1000 )
 //        .hide({
 //          effect: "blind",
 //          duration: "slow"
 //        }, function() {
 //          $( this ).remove();
 //        });
 //    }
 
 //    $( "button" ).each(function() {
 //      var button = $( this ).button({
 //        icons: {
 //          primary: $( this ).data( "icon" )
 //        },
 //        text: !!$( this ).attr( "title" )
 //      });
 //      button.not( ".menu" ).click(function() {
 //        notify( button );
 //      });
 //    });
 //    $( ".set" ).buttonset({
 //      items: "button"
 //    });
 
 //    $( "button.menu" )
 //      .click(function() {
 //        $( document ).tooltip( "close", { currentTarget: this });
 //        var menu = $( this ).next().show().position({
 //          my: "left top",
 //          at: "left bottom",
 //          of: this
 //        });
 //        $( document ).one( "click", function() {
 //          menu.hide();
 //        });
 //        return false;
 //      })
 //      .next()
 //        .hide()
 //        .menu({
 //          selected: function( event, ui ) {
 //            notify( ui.item );
 //          }
 //        });
 
 //    $( document ).tooltip({
 //      position: {
 //        my: "center top",
 //        at: "center bottom+5",
 //      },
 //      show: {
 //        duration: "fast"
 //      },
 //      hide: {
 //        effect: "hide"
 //      }
 //    });
 //  });









})
// close .ready()    












$(document).ready(function() {
    $('.dialog').dialog();
});











// header clock
function updateClock ( )
    {
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
 
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
 
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
 
    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
 
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
 
    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
     
     
    $(".clock").html(currentTimeString);
         
 }
 
$(document).ready(function(){
   setInterval('updateClock()', 1000);
});





// request fullscreen [Vanilla Js]
    var elem = document.getElementById("body");

    elem.onclick = function() {
        req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
        req.call(elem);
    }



//jQueryUI Tabs
$(function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});


//jQuery ToolTips
$(function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
});



// register windows

 $(".finderStart").click(function(){
    $('#finder').addClass('show active').removeClass('zoomOut').siblings().removeClass('active');
});


 $(".one1").click(function(){
    $('#one').addClass('show active').removeClass('zoomOut').siblings().removeClass('active');
});


$(".tabs1").click(function(){
    $('#tabs1').addClass('show active').removeClass('zoomOut').siblings().removeClass('active');
});




// skills
$('.skillsStart').click(function () {
    $('#skills').css('display','block').removeClass('zoomOut').removeClass('hide');
});


//close windows
$( ".closeSkills" ).click(function() {
    $('#skills').addClass('zoomOut animated').removeClass('fadeIn');
    setTimeout(function() {
        $('#skills').addClass('hide fadeIn');
    }, 900);
}); 


	


       