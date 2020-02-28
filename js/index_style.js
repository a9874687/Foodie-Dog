$(document).ready(function () {

  //-------------------手機漢堡選單-----------------------------//

  $("#header>.container> section a img").click(function () {
    if($(window).width()<= 374){ 
      $("#header > .container > section > ul li").slideToggle();
    };
  });

  //--------------------登入彈跳視窗關閉按鈕-----------------------------//

  $(".close").click(function () {
    $(".login-contet").hide();
  });

//--------------------評分高低下拉式選單-----------------------------//

  $('.critic').click(function () {
    event.preventDefault();
    $('.critic>a').toggleClass('color');
    $('.critic-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.critic').toggleClass('border-radius-top color');
  });

//--------------------最佳距離下拉式選單-----------------------------//

  $('.distance').click(function () {
    event.preventDefault();
    $('.distance>a').toggleClass('color');
    $('.distance-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.distance').toggleClass('border-radius-top color');
  });

//--------------------每人均消下拉式選單-----------------------------//

  $('.consumption').click(function () {
    event.preventDefault();
    $('.consumption>a').toggleClass('color');
    $('.consumption-open').toggleClass('border-radius-bottom color').slideToggle();
    $('.consumption').toggleClass('border-radius-top color');
  });

//--------------------滑鼠移入更換大圖-----------------------------//

  $('#storefront-photo img').hover(function () {
    $(this).addClass("active");
    $('#storefront img').attr("src", $(this).attr("src"));
  }, function () {
    $("#storefront-photo img").removeClass();
  });

//--------------------登入頁面彈跳視窗-----------------------------//

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

//--------------------評論頁面彈跳視窗-----------------------------//

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

//--------------------ajax讀取其他頁面-----------------------------//
  
$('.product-info').click(function () {
  let x = $(this).index();
  console.log(x);
  
  switch (x) {
      case 0:
          $('.restaurant-details').load("ajax/product-search-list1.html");
          break;
      case 1:
          $('.restaurant-details').load("ajax/product-search-list2.html");
          break;
      case 2:
          $('.restaurant-details').load("ajax/product-search-list3.html");
            break;
      case 3:
          $('.restaurant-details').load("ajax/product-search-list4.html");
            break;
      case 4:
          $('.restaurant-details').load("ajax/product-search-list5.html");
            break;
      case 5:
          $('.restaurant-details').load("ajax/product-search-list6.html");
            break;
       }
  });

});
