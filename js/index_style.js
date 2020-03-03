$(document).ready(function () {

 //--------------------登入頁面彈跳視窗-----------------------------//

 $(function () {
  $('.login-btn').click(function () {
    $('.bg').fadeIn(200);
    $('.login-contet').fadeIn(600);
  });
  $('.bg').click(function () {
    $('.bg').fadeOut(200);
    $('.login-contet').fadeOut(600);
  });
});

//--------------------評論頁面彈跳視窗-----------------------------//

  $(function () {
    $('.write-comment span a').click(function () {
      $('.bg').fadeIn(200);
      $('.product-comment-content').fadeIn(600);
    });
    $('.bg').click(function () {
      $('.bg').fadeOut(200);
      $('.product-comment-content').fadeOut(600);
    });
  });

//--------------------彈跳視窗置中---------------------------------//

/*登入彈跳視窗置中*/
  function centerHandler(){/*設定置中的函式*/
  var scrollDist=$(window).scrollTop();/*取得捲動長度*/
  var myTop=($(window).height()-$(".login-contet").height())/2+scrollDist;
  /*取得垂直中央位置*/
  var myLeft=($(window).width()-$(".login-contet").width())/2;
  /*取得水平中央位置*/
  $(".login-contet").offset({top:myTop,left:myLeft});
  /*設定區塊於水平與垂直置中*/
  }
  centerHandler (); /*呼叫置中函式，使廣告區塊置中*/
  $(window).scroll(centerHandler); /*當網頁捲動時呼叫置中函式*/
  $(window).resize(centerHandler); /*當視窗縮放時呼叫置中函式*/


/*評論彈跳視窗置中*/
  function centerHandler_comment(){
  var scrollDist=$(window).scrollTop();
  var mycommentTop=($(window).height()-$(".product-comment-content").height())/2+scrollDist;
  var mycommentLeft=($(window).width()-$(".product-comment-content").width())/2;
  $(".product-comment-content").offset({top:mycommentTop,left:mycommentLeft});
  }
  centerHandler ();
  $(window).scroll(centerHandler_comment);
  $(window).resize(centerHandler_comment);

  //--------------------登入彈跳視窗關閉按鈕-----------------------------//

  $(".close").click(function () {
    $('.bg').fadeOut(200);
    $(".login-contet").fadeOut(600);
    $(".product-comment-content").fadeOut(600);
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

//--------------------產品內頁滑鼠移入更換大圖-----------------------------//

$('.inside-page-storefront-photo img').hover(function () {
  $(this).addClass("active");
  $('.inside-page-storefront img').attr("src", $(this).attr("src"));
}, function () {
  $(".inside-page-storefront-photo img").removeClass();
});

//------------------------加入收藏---------------------------------//

$('.restaurant-favorite span a').click(function () {
    $('.restaurant-favorite span a').toggleClass("add");
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
       $(this).siblings().find(".product-info").addClass("product-bgc");  
       $(this).siblings().find(".product-info").removeClass("product-bgc");
       $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */ 
  });


  
  
});
