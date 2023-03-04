
$(document).ready(function() {
  $('#menuLink').click(function() {
    $('#menu').css({
      display: 'block'
    });
    // $('#menu').animate({left:'300px'});
  })
  $('#main').click(function() {
    $('#menu').css({
      display: 'none'
    });
    // $('#menu').animate({left:'300px'});
  })
})

