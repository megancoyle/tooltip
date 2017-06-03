/*  JavaScript Document                      */
$(document).ready(function(){
  $('.tooltip').mouseover(function(e){
    if($(this).attr('data-tip-type') == 'text') {
      $('#tooltip-container').html($(this).attr('data-tip-source'));
    }
  }).mousemove(function(e){

  }).mouseout(function(e){

  });

});
