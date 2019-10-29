$(function() {
  // Here your JS code, good luck !
  $('.dropdown-toggle').dropdown();

  $("#navbarSupportedContent .nav-link").removeClass("disabled");

  $("#search").keyup(function() {
    var value=$('#search').val();
    $('span').html(value);
  });


  $("#replacetitle").click(function (){
    var num = Math.floor(Math.random() * 9); // la variable num se rajoute après le titre
    $("#helloworld").text('Web Developer' + num)
  });


  $(".list-group-item").click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $("#playVideo").click(function() {
    $("#video").trigger("play");
    setTimeout(function () {
      $("#video").trigger("pause");
    }, 10000)

  });

  $("#my-tab a").on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $("#showModal").click(function(){
    $("#modal").modal();
  });

  $("#mypopover").click(function(){
    $(this).popover();
  });


  var progressBar = $("#progressBar");

  setInterval(function () {
    var width = parseInt(progressBar[0].style.getPropertyValue('width'))

    if (width >= 100) {
      progressBar.css('width', 0)
    } else {
      progressBar.css('width', '100%') //width + 5 + '%'
    }
  }, 1000)

  var isPlayed = true;

  setInterval(function () {
    if (isPlayed) {
    $("#spinner").css('animation-play-state', 'paused');
    isPlayed = false;
  } else {
    $("#spinner").css('animation-play-state', 'running');
    isPlayed = true;
  }
}, 5000);


});
