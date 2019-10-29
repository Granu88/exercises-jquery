$(function() {
  // Here your JS code, good luck !
  $('.dropdown-toggle').dropdown();

  $(".nav-link").removeClass("disabled");

  $("#search").keyup(function() {
    var value=$('#search').val();
    $('span').html(value);
  });


  $("#replacetitle").click(function (){
    var num = Math.floor(Math.random() * 9);
    $("#helloworld").text('Web Developer' + num)
  });

  console.log($('.list-group-item'))

  $(".list-group-item").click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

});
