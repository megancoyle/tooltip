/*  JavaScript Document                      */
$(document).ready(function(){
  $('.tooltip').mouseover(function(e){
    if($(this).attr('data-tip-type') == 'text') {
      $('#tooltip-container').html($(this).attr('data-tip-source'));
    }

    if($(this).attr('data-tip-type') == 'html') {
      var elementToGet = '#' + $(this).attr('data-tip-source');
      var newHTML = $(elementToGet).html();
      $('#tooltip-container').html(newHTML);
    }
  }).mousemove(function(e){

  }).mouseout(function(e){

  });

});
