
//ナビゲーション

$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});


$('.title').on('click', function() {
	var findElm = $(this).next(".box");
	$(findElm).slideToggle();
    
	if($(this).hasClass('close')){
		$(this).removeClass('close');
	}else{
		$(this).addClass('close');
	}
});

$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); 
	$(".open").each(function(index, element){
		var Title =$(element).children('.title');
		$(Title).addClass('close');	
		var Box =$(element).children('.box');
		$(Box).slideDown(500);
	});
});


// スライダー
$(function () {
	$('.meeting-slider').slick({
	  arrows: false, 
	  dots: true, 
	  dotsClass:'slick-dots',
	  speed: 1000, 
	  slidesToShow: 1, 
	  centerMode: true, 
	  variableWidth: true, 
	});
  });

  $('.tools__slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 1000, 
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 500,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });



$(window).scroll(function () {
$('.fadeInTrigger').each(function(){ 
	var elemPos = $(this).offset().top-50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeIn');
	}else{
	$(this).removeClass('fadeIn');
	}
	});
});

$(window).on('load', function(){
	$('.fadeInTrigger2').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');
		}else{
		$(this).removeClass('fadeIn');
		}
		});
	});

// ＝＝＝＝ページトップ＝＝＝＝
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	}else{
		if($('#page-top').hasClass('UpMove')){
			$('#page-top').removeClass('UpMove');
			$('#page-top').addClass('DownMove');
		}
	}
}

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});




