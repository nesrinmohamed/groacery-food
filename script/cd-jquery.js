
$('.item-home-nbtn:first').addClass('active');

$('.item-home-nbtn').click(function () {
 $('.item-home-nbtn').removeClass('active');
 $(this).toggleClass('active').toggleClass("animate__animated animate__bounce");
 $('.nav-icon').addClass('mdi-tag-multiple');
 $(this).find('span').removeClass('mdi-tag-multiple').addClass('mdi-checkbox-marked');
});

$('#app').css('display', 'block');

//$('.item-home-nbtn:nth-child(1)').click(function () {
// //$('.item-home-nbtn').removeClass('active')
// //$(this).toggleClass('active');
// alert(this.index);
//});
//var i = 3;

$(".scroll_items").scroll(function () {
	var s = $(this).scrollTop();
 if ($(this).scrollTop() > 200) {
		//$('.top_btn').css("display", "none");
	//	$('.top_btn').hide();
  //$('.home-nav').css("max-height", "55px");
  //$('.top_btn').removeClass('animate__animated animate__bounceInLeft');
  //$('.top_btn').css("height", "32px");
  //$('.top_btn').css("width", "72px");
  // $('.swiper_nav').css("margin", "5px");
	}
	else if ($(this).scrollTop() < 200) {
  //$('.top_btn').css("height", "72px");
  //$('.home-nav').css("max-height", "160px");
		//$('.top_btn').css('display', 'flex');
		//$('.fix-home-nav').css("display", "flex");
		//$('.top_btn').css("display", "flex");
 }
});
//item-cart-btn
$('.item-cart-btn').click(function () {
 $('.item__total').hide();
 $('.item__total').show();
 $('.item__total').addClass("animate__animated animate__bounce");
 $('.item__total').fadeOut(800, 'linear');
});

$('.btn-Count-Cart').click(function () {
	$('.item-Count-view').toggle(); 
});

$('.item-cart-add').click(function () {
	$('.ViewCartItem').hide();
	$('.ViewCartItem').show();
 $('.PageViewItem').hide();
 $('.PageViewItem').show();
 $('.PageViewItem').removeClass("animate__animated animate__fadeInLeft animate__faster");
 $('.PageViewItem').addClass("animate__animated animate__fadeOutLeft animate__faster");
});

//item-home-box
$('.item-home-box').click(function () {
 $('.PageViewItem').hide();
 $('.PageViewItem').show();
 $('.PageViewItem').removeClass("animate__animated animate__fadeOutLeft animate__faster");
 $('.PageViewItem').addClass("animate__animated animate__fadeInLeft animate__faster");
});

$('.BtnViewCart').click(function () {
 $('.PageViewCart').hide();
	$('.PageViewCart').show();
 $('.PageViewCart').removeClass("animate__animated animate__fadeOutLeft animate__faster");
 $('.PageViewCart').addClass("animate__animated animate__fadeInLeft animate__faster");
});
    //--item-cart-add PageViewItem
