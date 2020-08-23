import '../styles/styles.css'

(function ($) {

  "use strict";

  //Start jquery


  $('.smooth').on('mousewheel', function(e){
      wheel(e.originalEvent, this)
    })
    
    function wheel(event, element) {
        let delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;
    
        handle(delta, element);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }
    
    function handle(delta, element) {
        const time = 1000;
          const distance = 100;
        
        $(element).stop().animate({
            scrollTop: $(element).scrollTop() - (distance * delta)
        }, time );
    }



})(jQuery);


if (module.hot) {
    module.hot.accept()
  }