$(function() {
  // Here your JS code, good luck !
  $('.dropdown-toggle').dropdown();

  $(".nav-link").removeClass("disabled");

  $("#search").keyup(function() {
    var value=$('#search').val();
  $('span').html(value);

  

    console.log(value)
  });
});
