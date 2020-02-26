$(document).ready(function () {
  //-------------------手機漢堡選單
  $(".showmenu").click(function () {
    if($(window).width()<= 374){ 
      $(".login-content").close();
    };
  });
  //--------------------登入彈跳視窗關閉按鈕
  $(".close").click(function () {
    $("#header>.container ul li").slideToggle();
  });

//--------------------評分高低下拉式選單
  $('.critic').click(function () {
    event.preventDefault();
    $('.critic>a').toggleClass('color');
    $('.critic-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.critic').toggleClass('border-radius-top color');
  });
//--------------------最佳距離下拉式選單
  $('.distance').click(function () {
    event.preventDefault();
    $('.distance>a').toggleClass('color');
    $('.distance-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.distance').toggleClass('border-radius-top color');
  });

//--------------------每人均消下拉式選單
  $('.consumption').click(function () {
    event.preventDefault();
    $('.consumption>a').toggleClass('color');
    $('.consumption-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.consumption').toggleClass('border-radius-top color');
  });
//--------------------滑鼠移入更換大圖
  $('#storefront-photo img').hover(function () {
    $(this).addClass("active");
    $('#storefront img').attr("src", $(this).attr("src"));
  }, function () {
    $("#storefront-photo img").removeClass();
  });

//--------------------登入頁面彈跳視窗
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

//--------------------評論頁面彈跳視窗
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


  


});
