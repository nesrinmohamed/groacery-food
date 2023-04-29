$(document).ready(function () {
	var deltaNow = 0;
	//var element = $('.PageView-swipe');

	$('.PageView-swipe').hammer().on('panmove', function (e) {
		deltaNow = e.gesture.deltaX;
		$(this).css("-webkit-transform", "translateX(" + deltaNow + "px)");
		$(this).css("transition", "translateX(" + deltaNow + "px)");
		//$(this).css("-webkit-transform", "translateX(" + deltaNow + "px)");
		//$(this).css("transform", "translate(" + e.gesture.deltaX + "px,"+ e.gesture.deltaY +"px)");
		//$(this).css("height", e.gesture.deltaY + "px");
		//$(this).css("width", e.gesture.deltaX + "px");
	});

	$('.PageView-swipe').hammer().on('panstart pancancel', function (e) {
		deltaNow = e.gesture.deltaX;
		//$(this).css("-webkit-transform", "translateX(-400px) rotate(-25deg)").css("opacity", 0);
		$(this).css("-webkit-transform", "translateX(0px)");
		$(this).css("transition", "translateX(0px)");
	});

	$('.PageView-swipe').hammer().on('panend', function (e) {
		deltaNow = e.gesture.deltaX;
		if (deltaNow > 200) {
			$('.PageViewCart').hide();
			$('.PageViewItem').hide();
			//$(this).css("-webkit-transform", "translateX(-400px) rotate(-25deg)").css("opacity", 0);
			$(this).css("-webkit-transform", "translateX(0px)");
			$(this).css("transition", "translateX(0px)");
		}
		else if (deltaNow < -200) {
			$('.PageViewCart').hide();
			$('.PageViewItem').hide();
			//$(this).css("-webkit-transform", "translateX(-400px) rotate(-25deg)").css("opacity", 0);
			$(this).css("-webkit-transform", "translateX(0px)");
			$(this).css("transition", "translateX(0px)");
		}
		else {
			$(this).css("-webkit-transform", "translateX(0px)");
			$(this).css("transition", "translateX(0px)");
		}
	});

	//$('span').on('touchstart', function (e) {
	//	$(this).fadeOut(25).fadeIn(25);
	//});

	//$('button').hammer().on('touchstart', function (e) {
	// $(this).html("<span class='rb'>aaaaaa</span>")
	//	$(this).fadeOut(25).fadeIn(25);
	//});

	//$('.click').hammer().on('touchend', function (e) {
	// $(this).html("<span>aaaaaa</span>")
	//	$(this).fadeOut(25).fadeIn(25);
	//});

	$('.brunch-info-btn').click(function () {
		$('.brunch-info-btn').removeClass('dark').removeClass("animate__animated animate__bounce");
		$(this).toggleClass('dark').addClass("animate__animated animate__bounce");
		$('.brunch-icon').addClass('mdi-map-marker-radius');
		$(this).find('span').removeClass('mdi-map-marker-radius').addClass('mdi-checkbox-marked');
	});

	$('.btn-view-grid').click(function () {
		$('.home-item-grid').css('width', '47%');
		$('.home-item-grid').css('height', '200px');
		$('.item-home-title').css('height', '60px');
		$('.item-home-img').css('width', '100%');
		$('.item-home-img').css('height', '100%');
	});

	$('.btn-view-week').click(function () {
		$('.home-item-grid').css('width', '30%');
		$('.home-item-grid').css('height', '175px');
		$('.item-home-img').css('height', '100px');
		$('.item-home-title').css('height', '75px');
	});

	$('.btn-view-list').click(function () {
		$('.home-item-grid').css('width', '88%');
		$('.home-item-grid').css('margin', '7px auto 7px auto');
		$('.item-home-img').css('border', '1px soild #555');
		$('.home-item-grid').css('height', '250px');
		$('.item-home-img').css('width', '100%');
		$('.item-home-img').css('height', '200px');
		$('.item-home-img-view').css('width', '100%');
		$('.item-home-title').css('height', '50px');
	});

	$('.btn-toggle-nav').click(function () {
		var data = $(this).attr('data-bind');
		var vh = 0;
		vh = window.innerHeight;
		if (data == '') {
			$('.home-nav').css('height', '55px');
			$('.main-home-page').css('height', vh - 130);
			$('.scroll_items').css('height', vh - 130);
			$('.scroll_items').css('maxHeight', vh - 130);
		}
		else {
			$('.home-nav').css('height', '148px');
			$('.main-home-page').css('height', vh - 223);
			$('.scroll_items').css('height', vh - 223);
			$('.scroll_items').css('maxHeight', vh - 223);
		}
		//$('.home-nav').css('height', 'auto');

	});

	//app-bar-icon

});