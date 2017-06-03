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
    var toolTipWidth = $('#tooltip-container').outerWidth();
    var toolTipHeight = $('#tooltip-container').outerHeight();

    $('#tooltip-container').css('left', (e.pageX - 20) + 'px');
    $('#tooltip-container').css('top', (e.pageY + 20) + 'px')
  }).mouseout(function(e){

  });

});
