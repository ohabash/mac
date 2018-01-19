function suc_sound() {$('#slack')[0].play(); }
function ding() {$('#ding')[0].play(); }
var queue = [];
var busy = false;

// Enqueue
function addAlert(icon, title, desc) {
  queue.push({'icon': icon, 'title': title, 'desc': desc });
  if (!busy) {
    busy = true;
    fireAlerts(queue);
  }
}

// Show
function fireAlerts(alerts) {
  // console.log(alerts);
  // return false;
  var $e = null;
  var len = alerts.length;
  $.each(alerts, function(index, value) {
    // Use IIFE to multiply Wait x Index (http://stackoverflow.com/a/5226335/922522)
    (function(index, value) {
      var wait = index * 500 + 500;
      var i = index;
      var self = alerts[i];
      setTimeout(function() {
        // Show Alert
        $e = "<div class=\"n-item columns animated slideInRight\"> <div class=\"column icon\"><i class=\"fa fa-"+self.icon+"\" aria-hidden=\"true\"></i></div> <div class=\"column copy is-8\"> <p class=\"t\">"+self.title+"</p> <p class=\"m\">"+self.desc+"</p> </div> <div class=\"column actions\"> <div class=\"action close\">close</div> <div class=\"action snooze\">snooze</div> </div> </div>"
        $("#notices").append($e);
        ding();
        // debug 
        // console.log("notices: "+self);
        $(".actions div").click( function(){
          removeAlert($(this).closest('.n-item'))
        });

        // setTimeout( function(){
        //   $e.remove();
        // }, 5500);
        // Remove displayed from queue
        queue.shift();
        // End of alerts array
        if (index === len - 1) {
          busy = false;
          // Are there more in the queue?
          if (queue.length > 0) {
            fireAlerts(queue);
          }
        }
      }, wait);
    })(index, value);
    // jquery ui draggable
    // $('.n-item').draggable({
    //     axis: "x",
    //     containment: 'drag'
    // });  
  });
}

// Hide
function removeAlert(e) {
  e.removeClass('slideInRight').addClass('slideOutRight').delay(400).queue(function(this1){
    this.remove();
  });
  // $e.addClass('fadeOut');
  // setTimeout(function() {
    // $e.html("");
  // }, 100);
}





















