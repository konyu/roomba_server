//= require jquery
//= require jquery_ujs

$(function () {

var $command_hidden = $("#command_command");

$("#foward").click(function(){
  $command_hidden.val("foward");
  $('#new_command').submit();
});

$("#back").click(function(){
  $command_hidden.val("back");
  $('#new_command').submit();
});

$("#left").click(function(){
  $command_hidden.val("left");
  $('#new_command').submit();
});

$("#right").click(function(){
  $command_hidden.val("right");
  $('#new_command').submit();
});


});
