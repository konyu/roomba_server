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


inertval = 1000;//何秒毎に処理をするか

//タイマー開始関数
function startTimer(){
	//inertvalの秒数毎にsyori関数を実行する。その情報をtimer変数へ入れている。
	timer = setInterval(getImage, inertval);
}

//タイマー開始
startTimer();

function getImage(){
  $.get("/images/newest",
  function(data){
    //リクエストが成功した際に実行する関数
  });
}

});
