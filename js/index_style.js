$(document).ready(function () {
  //手機板選單點擊
  $(".showmenu").click(function () {
    if($(window).width()<= 374){ 
      $("#header .container ul li").slideToggle();
    }
  });

  $('.critic').click(function () {
    event.preventDefault();
    $('.critic>a').toggleClass('color');
    $('.critic-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.critic').toggleClass('border-radius-top color');
  });

  $('.distance').click(function () {
    event.preventDefault();
    $('.distance>a').toggleClass('color');
    $('.distance-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.distance').toggleClass('border-radius-top color');
  });


  $('.consumption').click(function () {
    event.preventDefault();
    $('.consumption>a').toggleClass('color');
    $('.consumption-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.consumption').toggleClass('border-radius-top color');
  });

  $('#storefront-photo img').hover(function () {
    $(this).addClass("active");
    $('#storefront img').attr("src", $(this).attr("src"));
  }, function () {
    $("#storefront-photo img").removeClass();
  });



  $(function () {
    $('.login-btn').click(function () {
      $('.bg').fadeIn(200);
      $('.login-contet').fadeIn(600);
    });
    $('.bg').click(function () {
      $('.bg').fadeOut(800);
      $('.login-contet').fadeOut(800);
    });
  });


  $(function () {
    $('.write-comment span a').click(function () {
      $('.bg').fadeIn(200);
      $('.product-comment-content').fadeIn(600);
    });
    $('.bg').click(function () {
      $('.bg').fadeOut(800);
      $('.product-comment-content').fadeOut(800);
    });
  });


  $(function () {
    $('.restaurant-info-content a h2').click(function () {
      $('.bg').fadeIn(200);
      $('.restaurant-details-mask').fadeIn(600);
    });
    $('.bg').click(function () {
      $('.bg').fadeOut(800);
      $('.restaurant-details-mask').fadeOut(800);
    });
  });


});
