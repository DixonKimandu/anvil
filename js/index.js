
/*Header*/
$( window ).scroll(function() {
  $( ".titles" ).css( "color", "red" );
});
/*Header*/

/*Menu*/
$(document).ready(function(){
    flag = 0;
    $(".menuIcon").click(function(){
        if(flag==0){
          $(".open").hide();
          $(".close").show();

          $(".main").fadeIn(1000);
          flag=1;
        }
        else{
          $(".open").show();
          $(".close").hide();

          $(".main").fadeOut(1000);
          flag=0;
        }
    });
});
/*Menu*/

/*Smooth Scrolling*/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
/*Smooth Scrolling*/

/*About*/
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
/*About*/

/*Portfolio*/
var $animation_ps = $('.animation-p');
var $windowp = $(window);

function check_if_in_view2() {
  var window_heightp = $windowp.height();
  var window_top_positionp = $window.scrollTop();
  var window_bottom_positionp = (window_top_positionp + window_heightp);

  $.each($animation_ps, function() {
    var $elementp = $(this);
    var element_heightp = $elementp.outerHeight();
    var element_top_positionp = $elementp.offset().top;
    var element_bottom_positionp = (element_top_positionp + element_heightp);

    //check to see if this current container is within viewport
    if ((element_bottom_positionp >= window_top_positionp) &&
      (element_top_positionp <= window_bottom_positionp)) {
      $elementp.addClass('in-view2');
    } else {
      $elementp.removeClass('in-view2');
    }
  });
}

$windowp.on('scroll resize', check_if_in_view2);
$windowp.trigger('scroll');
/*Portfolio*/
