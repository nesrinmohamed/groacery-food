const updateVh = () => {
	var vh = 0;
	vh = window.innerHeight;
	$('.bg').height(vh);
	$('.bg').css('maxHeight', vh);
	$('.PageHome').height(vh);
	$('.PageHome').css('maxHeight', vh);
	$('.main-home-page').height(vh - 223);
	$('.scroll_items').height(vh - 223);
	$('.PageViewItem').height(vh);
	$('.PageView-swipe').height(vh - 35);
	$('.main-item').height(vh - 112);
	$('.main-cart').height(vh);
	$('.PageViewCart').css('maxHeight', vh);
	$('.PageCartConfirm-swipe').height(vh);
	$('.PageCartConfirm-swipe').css('maxHeight', vh);
	$('.cart-confirm-view').css('maxHeight', vh);
	//cart-confirm-view
	//PageHome
};
updateVh();
window.addEventListener('resize', updateVh);