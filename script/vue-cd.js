Vue.directive("tap", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.on("tap", binding.value);
		}
	}
});

Vue.directive("press", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.get("press").set({event: 'press',pointer: 1, threshold: 5,time: 500});
			mc.on("press", binding.value);
		}
	}
});

Vue.directive("pan", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
			mc.on("pan", binding.value);
		}
	}
});

Vue.directive("panend", {
	bind: function (el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.on("panend", binding.value);
		}
	}
});

const app = new Vue({
	el: '#app',
	mixins: [Vue2Filters.mixin],
	vuetify: new Vuetify({ rtl: true }),
	data: {
		temp_addons: [
		],
		temp_options: [
		],
		branch: [
			{ id: 1, Aname: 'المنصورة', Ename: 'Mansoura', link: 'mansoura', maps: 'mansoura', Aaddress: 'mansoura', Eaddress: 'mansoura', Acity: 'الرياض', Ecity: 'Riyadh', phone: '011256447', mobile: '0556987483', check: false },
			{ id: 2, Aname: 'العزيزية', Ename: 'Al Aziziah', link: 'aziziah', maps: 'mansoura', Aaddress: 'mansoura', Eaddress: 'mansoura', Acity: 'الرياض', Ecity: 'Riyadh', phone: '011256447', mobile: '0556987483', check: false }
		],
		cats: [
			{ id: 1, Aname: 'الكل', Ename: 'All', link: 'all' },
			{ id: 2, Aname: 'جديد', Ename: 'New', link: 'new' },
			{ id: 3, Aname: 'عروض', Ename: 'Overs', link: 'overs' },
			{ id: 4, Aname: 'الاكثر مشاهدة', Ename: 'Most View', link: 'view' },
			{ id: 5, Aname: 'بروستد', Ename: 'Broasted', link: 'broasted' },
			{ id: 6, Aname: 'برجر', Ename: 'Burger', link: 'burger' },
			{ id: 7, Aname: 'مشروبات', Ename: 'Drinks', link: 'drinks' },
			{ id: 8, Aname: 'اضافات', Ename: 'Addons', link: 'addons' },
			{ id: 9, Aname: 'ملاجظات', Ename: 'Note', link: 'note' }
		],
		items: [
			{
				id: 1, name: 'بروستد عادي', title: '1km', img: 'brost1.jpg', tags: 'الكل,بروستد,جديد', link: 'all,broasted,view', qty: 1, click: 0, price: 25, color: '#000',
				addons: [
					{ id: 1, Aname: 'جبن', Ename: 'cheese', price: 1, check: false },
					{ id: 2, Aname: 'حجم صغير', Ename: 'cheese', price: 1, check: false },
					{ id: 3, Aname: 'حجم كبير', Ename: 'cheese', price: 1, check: false }
				],
				options: [
					{ id: 1, Aname: 'كتشب', Ename: 'cheese', price: 0, check: false },
					{ id: 2, Aname: 'شطة', Ename: 'cheese', price: 0, check: false },
					{ id: 3, Aname: 'بدون مخلل', Ename: 'cheese', price: 0, check: false }
				]
			},
			{ id: 3, name: 'مسحب عادي', title: '800m', img: 'mashb.jpg', tags: 'الكل,مسحب,عروض', link: 'all,broasted,view', qty: 1, price: 25, click: 0, color: '#000' },
			{ id: 4, name: 'روبيان عادي', title: '8km', img: 'robian.jpg', tags: 'الكل,بروستد', link: 'all,broasted,view', qty: 1, price: 25, click: 0, color: '#000' },
			{ id: 5, name: 'برجر دجاج', title: 'm', img: 'gzandIc.jpg', tags: 'الكل,برجر,الاكثر مشاهدة ', link: 'all,broasted,view', qty: 1, click: 0, price: 25, color: '#000' },
			{ id: 2, name: 'المشروبات الغازية', title: '8M', img: 'drink.png', tags: 'الكل,مشروبات', link: 'all,broasted,view', qty: 1, click: 0, price: 25, color: '#cd0000' },
			{ id: 6, name: 'روبيان حراق', title: '10km', img: 'robian.jpg', tags: 'الكل,بروستد', link: 'all,broasted,view', qty: 1, click: 0, price: 25, color: '#cd0000' },
			{ id: 7, name: 'مسحب حراق', title: '81m', img: 'mashb.jpg', tags: 'الكل,بروستد,عروض', link: 'all,broasted,view', qty: 1, click: 0, price: 25, color: '#cd0000' },
			{ id: 8, name: 'بروستد حراق', title: '8M', img: 'brost1.jpg', tags: 'الكل,بروستد', link: 'all,broasted,view', qty: 1, click: 0, price: 25, color: '#cd0000 ' },
			{ id: 9, name: 'بروستد عادي', title: '1km', img: 'brost1.jpg', tags: 'الكل,بروستد,جديد', link: 'all,broasted,view', qty: 1, click: 0, price: 25, color: '#000' }
		],
		Order_Temp: [],
		Order_List: [],
		OrderItems: [
			{ "id": 1, "name": "بروستد عادي", "qty": 1, "price": 28, "total": 28, "img": "brost1.jpg", "addons": [{ "id": 2, "Aname": "حجم صغير", "Ename": "cheese", "price": 1, "check": true }, { "id": 3, "Aname": "حجم كبير", "Ename": "cheese", "price": 1, "check": true }, { "id": 1, "Aname": "جبن", "Ename": "cheese", "price": 1, "check": true }], "options": [{ "id": 1, "Aname": "كتشب", "Ename": "cheese", "price": 0, "check": true }, { "id": 2, "Aname": "شطة", "Ename": "cheese", "price": 0, "check": true }, { "id": 3, "Aname": "بدون مخلل", "Ename": "cheese", "price": 0, "check": true }] }  
		],
		model: null,
		percentage: 20,
		network_connect: window.navigator.onLine,
		nav_: 1,
		loading: true,
		fab: false,
		firstLoad: true,
		swipeDirection: 'None',
		selected_items: 0,
		drinks: ['چای', 'قهوه'],
		width: 0,
		displacement: 1.0,
		selcted_index: -1,
		index: 0,
		preview: '',
		preview_index: 0,
		TabelItemClick: -1,
		imageWidth: 0,
		imageHeight: 0,
		MaxWidth: 0,
		MaxHeight: 0,
		widthSize: 0,
		browserSize: 0,
		MaxItem: 0,
		pages: 0,
		Item_qty: 1,
		selctedCat: 'all',
		viewCat: 'all',
		currency: 'ر.س',
		User_Lang: '',
		User_Mobile: '',
		User_Loc: 0,
		Item_Options_Total: 0,
		Item_Addons_Total: 0,
		OrderSubTotal: 0,
		OrderDiscount: 0,
		OrderVat: 0,
		OrderTotal: 0,
		OrderItemsCount: 0,
		OrderItemsRows:0,
		Order_Mobile: '',
		Order_Note: '',
		Order_Branch: '',
		Order_Branch_ID: 0,
		Order_Number: '',
		Order_Pay_View: '',
		Order_Type: '',
		Order_Branch_View: '',
		Order_Confirm: '',
		LastOrder: 0,
		num: 0,
		visible_dialog: false,
		scrollOrder: 0,
		scrollHeight: 0,
		tab: null,
		shopNumber: 1,
		current_slide_number: 0,
		selectedImage: '',
		selected_Nav: '',
		view_Nav: 'menu',
		Hide_Nav: '',
		attrs: {
			class: 'mb-6',
			boilerplate: true,
			elevation: 2,
		}
	},
	mounted() {
		this.User_Lang = 'ar';
		this.selctedCat = 'الكل';
		this.lazy_update();
		window.addEventListener('online', this.ck_network);
		window.addEventListener('offline', this.ck_network);
	},
	beforeDestroy() {
		window.addEventListener('online', this.ck_network);
		window.addEventListener('offline', this.ck_network);
	},
	updated() {
		//var lazyLoadInstance = new LazyLoad({});
		this.lazy_update();
	},
	methods: {
		format(percentage) {
			return percentage === 100 ? 'Full' : `${percentage}%`;
		},
		ck_network() {
			this.network_connect = window.navigator.onLine;
		},
		lazy_update() {
			var lazyLoadInstance = new LazyLoad({});
			lazyLoadInstance.update();
		},
		Swal_CartOff: function (txt, msg) {
			Swal.fire({
				title: 'هل تريد الاستمرار؟',
				text: txt,
				width: 325,
				showCancelButton: true,
				confirmButtonColor: '#c23350',
				cancelButtonColor: '#2f353a',
				cancelButtonText: 'تراجع',
				confirmButtonText: 'نعم!',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire({
						icon: 'success',
						title: msg,
						showConfirmButton: false,
						timer: 800
					})
					//this.OrderItems = [];
				}
			})
		},
		Swal_Del: function (val) {
			Swal.fire({
				//warning
				icon: 'error',
				width: 325,
				title: '...' + val,
				showConfirmButton: false,
				timer: 300
			})
		},
		msginfo: function (val) {
			Swal.fire({
				//warning
				width: 325,
				html: $(val).html(),
				showCloseButton: true,
				focusConfirm: false,
				showConfirmButton: false,
				timer: 5000
			})
		},
		handleScroll(event) {
			//alert(this.Hide_Nav);
			var vh = 0;
			vh = window.innerHeight;
			if (this.Hide_Nav == '') {
				this.scrollTop = event.currentTarget.scrollTop;
				if (this.scrollTop > 200) {
					this.view_Nav = '';
					$('.home-nav').css('height', '55px');
					$('.main-home-page').css('height', vh - 130);
					$('.scroll_items').css('height', vh - 130);
					$('.scroll_items').css('maxHeight', vh - 130);
				}
				else {
					this.view_Nav = 'menu';
					$('.home-nav').css('height', '148px');
					$('.main-home-page').css('height', vh - 223);
					$('.scroll_items').css('height', vh - 223);
					$('.scroll_items').css('maxHeight', vh - 223);
				}
			}
		},
		on_home_item_scroll: function (val) {
			//e.deltaX // e.target
			var deltaNowX = 0;
			var el = val;
			alert(e.target.className);
		},
		pan_tap: function (e, val) {
			//var el = val;
			//alert(e.target.className);
			if (e.target.className == val) {
				setTimeout(() => { this.preview = '' }, 75)
			}
			//e.deltaX // e.target
		},
		pan_item: function (e, val) {
			//e.deltaX // e.target
			var deltaNowX = 0;
			var el = val;
			deltaNowX = e.deltaX;
			//var el = val + '[data-row="' + index + '"]';
			//var i = $(el).attr('data-row');
			//$(el).hide();
			$(el).css("-webkit-transform", "translateX(" + deltaNowX + "px)");
			$(el).css("transform", "translateX(" + deltaNowX + "px)");
		},
		pan_item_end: function (e, val) {
			//e.deltaX // e.target
			var deltaNowX = 0;
			var el = val;
			deltaNowX = e.deltaX;
			//$(el).hide();
			if (deltaNowX > 200) {
				this.preview = '';
				$(el).css("-webkit-transform", "translateX(0px)");
				$(el).css("transition", "translateX(0px)");
			}
			else if (deltaNowX < -200) {
				this.preview = '';
				$(el).css("-webkit-transform", "translateX(0px)");
				$(el).css("transition", "translateX(0px)");
			}
			else {
				$(el).css("-webkit-transform", "translateX(0px)");
				$(el).css("transition", "translateX(0px)");
			}
		},
		pan_home_item: function (e, val) {
			//e.deltaX // e.target
			var deltaNowX = 0;
			var el = val;
			deltaNowX = e.deltaX;
		},
		pan_home_item_end: function (e, val) {
			//e.deltaX // e.target
			var deltaNowX = 0;
			var el = val;
			deltaNowX = e.deltaX;
			//this.width = width;
			//this.index = Math.round(left / width);
			//this.pages = Math.round(scrollWidth / width);
			alert('');
			//$(el).hide();
			if (deltaNowX > 200) {
				this.preview = '';
			}
			else if (deltaNowX < -200) {
				this.preview = '';
				//$(el).css("-webkit-transform", "translateX(0px)");
				//$(el).css("transition", "translateX(0px)");
			}
			else {
				//$(el).css("-webkit-transform", "translateX(0px)");
				//$(el).css("transition", "translateX(0px)");
			}
		},
		msg_val: function (val, time) {
			Swal.fire({
				//warning
				icon: 'success',
				width: 325,
				html: val,
				showConfirmButton: false,
				timer: time
			})
		},
		msgokay: function (val) {
			Swal.fire({
				//warning
				icon: 'success',
				width: 325,
				html: $('.item-txt').html(),
				showConfirmButton: false,
				timer: 300
			})
		},
		Swal_Success: function (val) {
			Swal.fire({
				//warning
				icon: 'success',
				width: 325,
				title: '...' + val,
				showConfirmButton: false,
				timer: 800
			})
		},
		hidef: function (val, time) {
			setTimeout(() => {
				this.firstLoad = val;
			}, time);
		},
		ifselctedCat: function (ar_val, en_val) {
			if (this.User_Lang === 'ar') { this.selctedCat = ar_val; }
			else { this.selctedCat = en_val; }
		},
		swipe: function (direction) {
			this.swipeDirection = direction;
		},
		swipeTabel: function (direction) {
			this.TabelItemClick = direction;
		},
		nextSlide: function () {
			if (this.current_slide_number < this.items.length - 1) { this.cuscrollOrderItemsrrent_slide_number += 1; }
			else { this.preview = ''; }
		},
		prevSlide: function () {
			if (this.current_slide_number > 0) { this.current_slide_number -= 1; }
		},
		confirem_order: function () {
			var network = this.network_connect;
			Swal.fire({
				title: 'هل تريد الاستمرار؟',
				text: 'سيتم تنفيذ الطلب !',
				width: 325,
				showCancelButton: true,
				confirmButtonColor: '#c23350',
				cancelButtonColor: '#2f353a',
				cancelButtonText: 'تراجع',
				confirmButtonText: 'نعم!',
		 	}).then((result) => {
					if (result.isConfirmed && network) {
					this.Send_Order();
					Swal.fire({
						icon: 'success',
						width: 325,
						title: 'تم تنفيذ الطلب',
						showConfirmButton: false,
						timer: 800
					})
					//this.OrderItems = [];
				}
				else if (!result.isConfirmed) {

				}
				else {
						Swal.fire({
							icon: 'error',
							width: 325,
							html:'لم يتم تنفيذ الطلب..' + "<br />" + ' الرجاء التحقق من اتصالك بالانترنت..',
							showConfirmButton: true,
							confirmButtonText: 'اعادة المحاولة!',
							timer: 5000
						 }).then((result) => {
							if (result.isConfirmed && network) {
								this.Send_Order();
							}
						})
						//this.OrderItems = [];
					}
			})
		},
		Send_Order: function () {
			if (this.network_connect){ 
		 this.Order_Temp.push({
				order_id: "1",
				order_number: "165",
				order_date: "2023/04/01",
				order_branch_id: this.Order_Branch_ID,
				order_subtotal: this.OrderSubTotal,
				order_discount_code:"",
				order_discount: this.OrderDiscount,
				order_vat: this.OrderVat,
				order_total: this.OrderTotal,
				order_note: this.Order_Note,
				order_mobile: this.Order_Mobile,
				order_address: "",
				order_status_note: "", 
				order_status_code: "",
				order_pay_method: "",
    order_pay_done: false,
				order_done: false,
				order_count_item: this.OrderItems.length,
				order_items_list: this.OrderItems
			});
			this.preview = '';
			this.OrderItems = [];
			this.Order_List.push(this.Order_Temp[0]);
		 }
		},
		AddOrderItems: function (id, name, qty, price, img) {
			this.OrderItemsRows += 1;
			var Addons = this.Item_Addons_Total;
			var total = (price * qty + Addons);
			this.OrderItems.push({ item_row: this.OrderItemsRows,id: id, name: name, qty: qty, price: (price + Addons), total: total, img: img, addons: this.temp_addons, options: this.temp_options});
			//this.OrderItems.reverse();
			//this.OrderItems.sort(function (a, z) {
			//	return z.name - a.name;
			//});
			this.CountOrderTotal();
			this.Item_qty = 1;
		 this.temp_addons = [];
			this.temp_options = [];
			this.Item_Addons_Total = 0;
			//this.OrderSubTotal += (qty * price);
		},
		ResetTemp: function (index) {
			var ad = this.items[index].addons;
			var op = this.items[index].options;
			if (ad) { 
			for (let entry of ad) { entry.check = false; }
			}
			if (op) { 
			for (let entry of op) { entry.check = false; }
			}
		},
		UpdateOrderItems: function (index, qty) {
			//$('.taphand').html('');
			//$(event.target).append('<i class="taphand mdi mdi-24px mdi-gesture-double-tap" style="position:absolute; top:35px; left:24px; z-index:78;color:#666;"></i>');
			//alert(this.items[idx].click);
			//var index = this.OrderItems.findIndex(x => x.id == id);
			var OrdList = this.OrderItems;
			var priceOnList = OrdList[index].price;
			//this.OrderItems[index].img = 'brost1.jpg';
			OrdList[index].qty = qty;
			OrdList[index].total = (qty * priceOnList);
			//this.OrderItems.push({ id: id, name: name, qty: qty, price: price, total: total, idx, idx });
			//this.OrderItems.splice(index, 1);
			this.CountOrderTotal();
			/*$('.taphand').hide(800);*/
			//this.OrderTotal = (this.OrderSubTotal - this.OrderDiscount);
		},
		CountOrderTotal: function () {
			//alert(this.items[idx].click);
			//var index = this.OrderItems.findIndex(x => x.id == id);
			var OrdList = this.OrderItems;
			var SubTotalOnList = 0;
			for (let entry of OrdList) {
				SubTotalOnList += entry.total;
			}
			this.OrderSubTotal = SubTotalOnList;
			this.OrderVat = (this.OrderSubTotal - this.OrderDiscount) * 15 / 100;
			this.OrderTotal = (this.OrderSubTotal + this.OrderVat - this.OrderDiscount);
			//this.OrderTotal = (SubTotalOnList - this.OrderDiscount);
		},
		DelOrderItems: function (index) {
			this.OrderSubTotal = this.OrderSubTotal - this.OrderItems[index].total;
			//this.items[idx].click = 0;
			this.OrderItems.splice(index, 1);
			//if (i === this.pages - 1) {
			// this.$refs.horizontal.scrollToIndex(this.items.length - 1)
			//} else {
			//}
		},
		Add_temp_addons: function (item) {
   //{ id: 1, Aname: 'كتشب', Ename: 'cheese', price: 0, check: false }
			//var total = (price * qty);
			var index = this.temp_addons.findIndex(x => x.id == item.id);
			if (index == -1) {
				this.Item_Addons_Total += item.price;
				this.temp_addons.push(item);
			}
			else {
				this.Item_Addons_Total -= item.price;
				this.temp_addons.splice(index, 1);
			}
		},
		Add_temp_options: function (item) {
			//{ id: 1, Aname: 'كتشب', Ename: 'cheese', price: 0, check: false }
			//var total = (price * qty);
			var index = this.temp_options.findIndex(x => x.id == item.id);
			if (index == -1) {
				//this.Item_Options_Total += item.price;
				this.temp_options.push(item);
			}
			else {
				//this.Item_Options_Total -= item.price;
				this.temp_options.splice(index, 1);
			}
		},
		nbtn: function (key) {
			$('.item-home-nbtn').removeClass('active');
			$('.item-home-nbtn:nth-child(' + key + ')').addClass('active');
			this.$refs.horizontal.scrollToIndex(key);
		},
		alert_view: function (val) {
			alert(val);
		},
		alert_view_: function () {
			alert('');
		},
		nextTabs: function (index) {
			if (index < this.cats.length - 1) { index++; this.viewCat = this.cats[index].link; }
			else { this.viewCat = this.cats[index].link; }
		},
		prevTabs: function (index) {
			if (index > 0) { index--; this.viewCat = this.cats[index].link; }
		},
		scrollOrderItems: function (val) {
			this.scrollHeight = val;
			document.getElementById("scrollToTop").scrollTop = document.getElementById("scrollToTop").scrollTop + this.scrollHeight;
		},
		formatPrice(value) {
			if (typeof value !== "number") {
				return value;
			}
			const formatter = new Intl.NumberFormat('en-US', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			});
			return formatter.format(value);
		},
		setWidth() {
			this.imageWidth = this.$refs.img.clientWidth;
			this.imageHeight = this.$refs.img.clientHeight;
		},
		viewItem: function (item, index) {
			this.preview = item;
			this.current_slide_number = index;
		},
		onScrollDebounce({ scrollWidth, width, left }) {
			this.width = width;
			this.index = Math.round(left / width);
			this.pages = Math.round(scrollWidth / width);
			//this.$refs.horizontal_item.scrollToIndex(this.index);
		},
		onPageClick(i) {
			if (i === this.pages - 1) {
				this.$refs.horizontal.scrollToIndex(this.items.length - 1)
			} else {
				this.$refs.horizontal.scrollToLeft(i * this.width)
			}
		},
		swipe: function (direction) {
			this.swipeDirection = direction
		},
		selected_img: function (key) {
			this.selected_items = key;
			this.$refs.horizontal.scrollToIndex(key);
			return this.selected_items = key;
		}
	}

})
//------------------
