Vue.component('spahome', {
template:`
<div class="bg" style="display: flex; flex-wrap: wrap; width: calc(100vw); max-width: calc(100vw); overflow: hidden; touch-action: none; ">
<div class="PageHome" style="background-color: #fff;width: 100%; display: flex; flex-wrap: wrap; overflow: hidden; ">
<div class="home-nav" style=" background: linear-gradient(135deg, #343a40, black); background-size: auto; background-position: center;height: 148px; background-repeat: repeat; align-items: center; display: flex; flex-wrap: wrap; position: relative; z-index: 0;width: 100%; padding-left: 14px; padding-right: 14px; touch-action: pan-x !important;">
<div class="animate__animated animate__bounceInRight" style="z-index: 100; border-radius: 5px; align-items: center; display: flex; position: relative; z-index: 0; width: 100%; height: 55px;">
<v-app-bar-nav-icon class="btn-toggle-nav" v-on:click="view_Nav=='menu' ? view_Nav='' : view_Nav='menu'" :data-bind="view_Nav" color="#f2f2f2"></v-app-bar-nav-icon>
<v-spacer></v-spacer>
<!-- v-on:click="view_Nav=='admenu' ? view_Nav='menu' : view_Nav='admenu'" -->
<div v-on:click="view_Nav='menu'" class="btn-toggle-nav item-home-btn dark" :data-bind="view_Nav" style="z-index: 100; margin-left: 7px; height: 35px; max-height: 35px; width: 100%;">
<div class="nav-icon mdi mdi-24px mdi-tag-multiple" style="display: flex; margin-left: 7px; max-height: 24px; align-items: center; justify-content: center;"></div>
{{selctedCat}}
</div>
<v-spacer></v-spacer>
<v-btn v-on:click="preview='ViewSetGrid'" color="#f2f2f2" icon>
<v-icon>mdi-dots-vertical</v-icon>
</v-btn>
</div>
<div v-show="view_Nav=='menu'" class="top_btn" style="z-index: 1; touch-action: pan-x !important; display: flex; align-items: center; width: 100%; height: 92px; max-height: 92px; touch-action: pan-x pan-y; background-color: rgba(18,19,20,.1); color: #272727; position: relative;">
<div v-show="view_Nav=='menu'" class="swiper_nav" style="z-index: 1; touch-action: pan-x !important; width: 100%; height: 72px; max-height: 72px; margin-right: auto; margin-left: auto; overflow: hidden; cursor: pointer; ">
<vue-horizontal ref="horizontal" class="horizontal" snap="none" :button="false">
<div v-for="(item, index) in cats" class="item-home-nbtn dark" v-on:click="$refs.horizontal.scrollToIndex(index+1),$refs.horizontal_item.scrollToIndex(index),viewCat=item.link,ifselctedCat(item.Aname,item.Ename)" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; transition-property: transform; touch-action: pan-x !important; width: 72px; margin-left: 12px; height: 72px; transition-property: transform; font-size: 13px;" >
<span class="nav-icon mdi mdi-24px mdi-tag-multiple" style="display: flex; width: 100%; max-height: 24px; align-items: center; justify-content: center;"></span>
<abbr class="nav-icon_titel" style="display: flex; width: 100%; max-height: 42px; align-items: flex-start; justify-content: center;">{{item.Aname}} </abbr>
</div>
</vue-horizontal>
</div>
</div>
</div>
<main class="main-home-page" style="background: linear-gradient(45deg, #f5f5f5,#e6e6e6); position: relative; margin: auto; text-align: center; width: 100%; max-width: 100%; overflow: hidden; ">
<vue-horizontal class="swip-item-home" ref="horizontal_item" snap="center" :displacement="displacement" :button="false" @scroll-debounce="">
<div v-for="(cat, index) in cats" style="display: flex;height:fit-content; touch-action: none; touch-action: pan-x pan-y; width: 100%; position: relative; ">
<div @scroll="handleScroll" class="scroll_items" v-on:click="nbtn(index+1)" v-on:touchend="nbtn(index+1)" style="touch-action: pan-x pan-y; height: fit-content; width: calc(100vw); display: flex; flex-wrap: wrap; justify-content: center !important; align-items: flex-start; overflow-y: scroll; overflow-x: hidden; scrollbar-color: auto; scrollbar-width: none; scroll-snap-type: mandatory; margin: auto; ">
<div v-on:click="preview='ViewItem',preview_index=index" class="card item-home-box home-item-grid"
v-for="(item, index) in items" v-show="item.tags.includes(''+cat.Aname+'')"
style="background: linear-gradient(45deg, #343a40, black); border: 1px solid #ccc; justify-content: center !important; touch-action: none; touch-action: pan-x pan-y; display: flex; align-items: flex-start; width: calc(50% - 7px); height: 250px; margin: 3px; z-index: 2; cursor: pointer; overflow: hidden; overflow: hidden; ">
<div class="item-home-img" style="display: flex; flex-wrap: wrap; justify-content: center !important; height: 200px; width: 100%; align-items: center; overflow: hidden; scrollbar-width: none; ">
<img alt="يتم التحميل..." class="lazy" draggable="false" style="z-index: 2; display: flex; height: 100%; width: 100%; align-items: center; justify-content: center !important; " :data-src="'http://192.168.0.197/img/pd/'+item.img">
</div>
<div class="item-home-title" style="background: linear-gradient(45deg, #f5f5f5,#ccc); display: flex; width: 100%; height: 50px; align-items: center; justify-content: center !important; z-index: 2; overflow: hidden; scrollbar-width: none; ">
<div style="display: flex; flex-wrap: wrap; width: 100%; justify-content: center !important; ">
<span style="display: flex; width: 100%; font-size: 15px; font-weight: 500; color: #000; justify-content: center !important; ">
{{item.name}} <br /> {{formatPrice(item.price)}} {{currency}}
</span>
</div>
</div>
</div>
</div>
</div>
</vue-horizontal>
</main>
<v-bottom-navigation style="background: linear-gradient(135deg, #343a40, black); background-position: center; background-repeat: repeat; touch-action: none; color: #fff; height: 75px; max-height: 75px; display: flex; overflow:hidden; ">
<div class="animate__animated animate__bounceInUp" style="display: flex; width: 100%;">
<v-btn style="touch-action:none;width:20%;">
<span style="color:#f2f2f2;">الكل</span>
<v-icon color="#f2f2f2">mdi-widgets</v-icon>
</v-btn>
<v-btn style="touch-action:none;width:20%;">
<span style="color:#f2f2f2;">جديد</span>
<v-icon color="#f2f2f2">mdi-music-note</v-icon>
</v-btn>
<v-btn v-show="!fab" v-on:click="fab=true" style="touch-action:none;width:20%;">
<span style="color:#f2f2f2;">القائمة</span>
<v-icon color="#f2f2f2">
mdi-account-circle
</v-icon>
</v-btn>
<v-btn v-show="fab" v-on:click="fab=false" style="touch-action:none;width:20%;">
<span style="color:#f2f2f2;">القائمة</span>
<v-icon color="#f2f2f2">
mdi-close
</v-icon>
</v-btn>
<v-btn class="BtnViewCartConfirm" v-on:click="preview='ViewCartConfirm',Order_Confirm='mobile',CountOrderTotal()" style="touch-action:none;width:20%;">
<span style="color:#f2f2f2;">الطلب</span>
<v-icon color="#f2f2f2">mdi-book</v-icon>
</v-btn>
<v-btn class="BtnViewCart" v-on:click="preview='ViewCart',CountOrderTotal()" style="touch-action:none;width:20%;position:relative;">
<span class="v-badge__badge primary" style="top: 14px; left: 25px; z-index: 99; ">{{OrderItems.length}}</span>
<span style="color:#f2f2f2;">السلة</span>
<v-icon color="#f2f2f2">mdi-cart</v-icon>
</v-btn>
</div>
</v-bottom-navigation>
</div>

<div v-show="preview==='ViewItem'" class="PageViewItem" style="z-index: 11; position: absolute; top: 0px; right: 0px; display: flex; flex-wrap: wrap; background-color: rgba(18,19,20,.2); touch-action: pan-y !important; align-items: center; ">
<!--v-on:click="preview=''"-->
<div class="PageView-swipe" style="display: flex; flex-wrap: wrap; align-items: center; touch-action: pan-y !important; ">
<main class="main-item" style="display: flex; flex-wrap: wrap; align-items: center; background-color: rgba(18,19,20,.2); position: relative; text-align: center; width: 100%; max-width: 100%; overflow-y: scroll; overflow-x: hidden; scrollbar-color: auto; scrollbar-width: none; scroll-snap-type: mandatory; touch-action: pan-y !important; ">
<div style=" margin: auto; background: #fff; display: flex;width: calc(100% - 24px); max-height: 100%; flex-wrap: wrap; align-items: center; touch-action: pan-y !important; ">
<div v-on:click="preview=''" class="close-page-view" style="position: absolute; top: 27px; right: 27px; z-index: 147; ">
<div class="item-home-btn dark" style=" width: 45px; height: 45px; opacity:0.8; display: flex; align-items: center; ">
<v-icon style="color: #f2f2f2; touch-action: pan-y !important; border-radius: 55px; width: 45px; height: 45px; ">mdi-close</v-icon>
</div>
</div>
<div class="item-home-img" style="background: url(css/bg/bgbg3.jpg); display: flex; flex-wrap: wrap; user-select: none; justify-content: center !important; width: 100%; max-height: 200px; max-width: 100%; align-items: center; overflow: hidden; scrollbar-width: none; touch-action: pan-y !important; ">
<img alt="يتم التحميل..." class="lazy" draggable="false" style="pointer-events: none; z-index: 2; display: flex; width: 100%; align-items: center; user-select: none;" :data-src="'http://192.168.0.197/img/pd/'+items[preview_index].img">
</div>
<div class="item-home-title" style="background: #fff; width: 100%; z-index: 2; display: flex; touch-action: pan-y !important;">
<div style="display: flex; flex-wrap: wrap; width: 100%; margin: 7px 0 7px 0;">
<span style="display: flex; width: 100%; font-size: 18px; font-weight: 500; color: #000; justify-content: center !important; ">
{{items[preview_index].name}} - {{formatPrice(items[preview_index].price)}} {{currency}}
</span>
</div>
</div>
<div class="item-home-title" style=" width: 100%; z-index: 2; display: flex; touch-action: pan-y !important;">
<div style="display: flex; flex-wrap: wrap; width: 100%; padding: 0px 24px 0px 24px; margin: 3px auto 3px auto; ">
<p>مجموعة من التوابل التي تعطي مذاقا معينا وجديدا للبروستد ولجميع المقبلات بلا استتثناء لتصل بك الى طعم لن تقاومه أبدا .المكونات : فلفل اسود ، ثوم ، ملح ، كمون ...</p>
</div>
</div>
<div class="item-home-title" style="background: #fff; width: 100%; z-index: 2; display: flex; touch-action: pan-y !important; ">
<div style="display: flex; justify-content: center !important; height: auto; width: 100%; margin: 7px auto 7px auto; ">
<a><span class="item-home-btn light" style="border: 1px solid #ccc; margin: 0px 7px 0px 7px; font-size: 13px; ">750 كالوري</span></a>
<a><span class="item-home-btn light" style="border: 1px solid #ccc; margin: 0px 7px 0px 7px; font-size: 13px; ">15 دقيقة</span></a>
<a><span class="item-home-btn light" style="border: 1px solid #ccc; margin: 0px 7px 0px 7px; font-size: 13px; ">السعرات الحرارية</span></a>
</div>
</div>
<div v-for="(item, index) in items[preview_index].addons" class="item-home-title" style="background: #fff; width: 100%;margin: 7px; z-index: 2; display: flex; justify-content: center !important; touch-action: pan-y !important; ">
<div class="item-home-btn light">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
{{item.Aname}}
</label>
</div>
</div>
<div class="item-cart-title" style=" background: #fff; width: 100%; z-index: 2; display: flex; height: 250px; justify-content: center !important; touch-action: pan-y !important; "></div>
</div>
</main>
<v-bottom-navigation style="background: rgba(18,19,20,.2); background-position: center; background-repeat: repeat; touch-action: none; color: #fff; height: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; position:relative; ">
<div style="display: flex; background: linear-gradient(45deg, #343a40, black); height: 72px; width: calc( 100% - 24px); justify-content: center; position: relative; touch-action: none; ">
<div v-ripple v-on:click="Item_qty++" class="item-cart-btn" style="display: flex; align-items: center; justify-content: center; touch-action: none; min-width: 75px;font-size: 22px; ">
<span class="mdi mdi-36px mdi-plus" style="display: flex; width: 100%; max-height: 36px; align-items: center; justify-content: center;"></span>
</div>
<div style="display: flex; align-items: center; justify-content: center; touch-action: none;font-size: 22px;width:auto;">
<span style="display: flex; width: 100%; max-height: 24px; align-items: center; justify-content: center;">{{Item_qty}}</span>
</div>
<div v-ripple v-on:click="Item_qty>1 ? Item_qty-- : Item_qty" class="item-cart-btn" style="display: flex; align-items: center; justify-content: center; touch-action: none;  min-width: 75px; margin-left: 3px; transition-property: transform; font-size: 22px; ">
<span class="mdi mdi-36px mdi-minus" style="display: flex; width: 100%; max-height: 36px; align-items: center; justify-content: center;"></span>
</div>
<div v-on:click="AddOrderItems(items[preview_index].id,items[preview_index].name,Item_qty,items[preview_index].price,items[preview_index].img),Swal_Success('تم الاضافة بنجاح')" class="item-cart-add" style="display: flex;align-items: center; justify-content: center;touch-action: none; width:50%;font-size: 22px; ">
<span class="mdi mdi-36px mdi-cart" style="display: flex; width: 100%; max-height: 36px; align-items: center; justify-content: center; ">اضافة</span>
</div>
</div>
<div class="item__total" style=" z-index: 200; position: absolute; bottom: 72px; background: linear-gradient(45deg, #343a40, black); display: none; flex-wrap: wrap; height: 72px; width: calc( 100% - 24px); overflow: hidden; justify-content: center !important; align-items: center; touch-action: none; ">
<div style="display: flex; height: 72px; width: 100%;overflow: hidden;">
<span class="btn" style="display: flex; font-size: 22px; width: 100%; color: #fff; justify-content: center !important; align-items: center; border: 1px solid #000; ">{{formatPrice(items[preview_index].price * Item_qty)}} {{currency}}</span>
</div>
</div>
</v-bottom-navigation>
</div>
</div>

<div v-show="preview==='ViewCart'" class="PageViewCart" style=" z-index: 11; position: absolute; width: 100%; top: 0px; right: 0px; background-color: rgba(18,19,20,.2);">
<!--v-on:click="preview=''"-->
<div class="PageView-swipe" style="display: flex; flex-wrap: wrap; align-items: center; width: 100%;margin: auto; touch-action: pan-y !important; ">
<main v-tap="(e) => pan_tap(e,'main-cart')" class="main-cart" style="display: flex; flex-wrap: wrap; position: relative; text-align: center; width: 100%; height: 100%; max-width: 100%;align-items: center; justify-content: center !important; overflow-y: scroll; overflow-x: hidden; scrollbar-color: auto; scrollbar-width: none; scroll-snap-type: mandatory; touch-action: pan-y !important; ">

<div class="cart-empty-view" v-show="OrderItems.length<=0" style="touch-action: pan-y !important; display: flex; background-color: transparent; margin: 24px auto 5px auto; width: calc(100% - 24px); justify-content: center; align-items: center; ">
<div class="cart-empty-window animate__animated animate__bounce" style="z-index: 1440; display: flex; flex-wrap: wrap; padding: 12px 0 12px 0; justify-content: center; align-items: center; background-color: #fff; width: 100%; height: 90%; margin: 5px; border-radius: 20px; scrollbar-color: rgba(18,19,20,.5) #ccc; scrollbar-width: none; touch-action: pan-y !important; ">
<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; width: 100%;">
<img draggable="false" style="pointer-events: none; z-index: 2; display: flex; max-width: 100%; align-items: center;" src="css/bg/cart_empty.png">
<span style="display: flex; align-items: center; justify-content: center; width: 100%; font-weight: 500; font-size: 15px; height: 60px; ">لا يوجد لديك عناصر في السلة الخاصة بك. </span>
</div>
<div style="display: flex; background: linear-gradient(45deg, #343a40, black); color:#fff; cursor: pointer; height: 72px; width: calc( 100% - 24px); justify-content: center; position: relative; ">
<div v-on:click="preview=''" class="item-cart-add" style="display: flex; cursor: pointer; align-items: center; justify-content: center; touch-action: pan-y !important; width: 100%; font-size: 22px; ">
رجوع
<span class="mdi mdi-36px mdi-gesture-double-tap" style="display: flex; width: 36px; height: 36px; max-height: 36px; align-items: center; justify-content: center; "></span>
</div>
</div>
</div>
<div class="cart-drop" style="z-index: 1; position: absolute; right: 0px; width: 25%; height: 75%; background-color: transparent; "></div>
<div class="cart-drop" style="z-index: 1; position: absolute; left: 0px; width: 25%; height: 75%; background-color: transparent; "></div>
<div class="cart-drop" style="z-index: 1; position: absolute; top: 0px; width: 100%; height: 25%; background-color: transparent; "></div>
<div class="cart-drop" style="z-index: 1; position: absolute; bottom: 0px; width: 100%; height: 25%; background-color: transparent; "></div>
</div>

<div class="cart-view" v-show="OrderItems.length>0" style="background: linear-gradient(135deg, #f2f2f2, #eee); border-radius: 12px; padding: 12px 0 12px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; margin: auto auto auto auto; width: calc(100% - 24px); ">

<div class="cart-item-remove" v-ripple style=" align-items: center; justify-content: center !important; margin: auto; color: #000; display: flex; flex-wrap: wrap; width: 94%; margin: 3px auto 3px auto; justify-content: right !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<abbr style="background: linear-gradient(45deg, #eee, #f5f5f5); border: 1px solid #ccc; color: #000; font-size: 15px; height: 45px; width: 65%; margin: 3px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="nav-icon mdi mdi-24px mdi-cart" style="color: #000; margin: 3px; display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
 عدد الاصناف ({{OrderItems.length}})
</abbr>
<abbr v-on:click="Swal_CartOff('سيتم حذف جميع الاصناف من السلة !','تم الحذف بنجاح')" style="background: linear-gradient(45deg, #f5f5f5, #ccc); border: 1px solid #ccc; color: #000; font-size: 18px; height: 45px; width: 35%; margin: 3px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
حذف الكل 
<span class="nav-icon mdi mdi-24px mdi-cart-off" style="color: #000; margin: 3px; display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
</abbr>
</div>

<div class="cart-item-box" style="justify-content: center; align-items: center; max-height: calc(100vh - 50vh);overflow-y: scroll; overflow-x: hidden; scrollbar-color: auto; scrollbar-width: none; scroll-snap-type: mandatory; touch-action: pan-y !important; ">
<div class="cart-item-card" v-for="(item, index) in OrderItems" style="background: linear-gradient(45deg, #f2f2f2, #f5f5f5); border: 1px solid #ccc; touch-action: pan-y !important; width: 94%; display: flex; flex-wrap: wrap; margin: 6px auto 6px auto; align-items: center; justify-content: center !important; cursor: pointer; ">
<div class="cart-item-alert" style="line-height: 1px; position: relative; width: 100%; height:100%;display:none;">
<div style=" background: rgba(18,19,20,.5); z-index: 9999; position: absolute; top: 0px; left: 0px; width: 100%; height: 136px; max-height: 136px; display: none; justify-content: center !important; align-items: center; display: none; overflow-y: scroll; overflow-x: hidden; scrollbar-color: auto; scrollbar-width: none; scroll-snap-type: mandatory; touch-action: pan-y !important; ">
<div class="tags--" style="display: flex;max-height:32px; justify-content: center !important; align-items: center; max-width: 100%; max-height: 100%;">
<span style="height: 32px; width: 100%; margin: 3px; display: block; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="nav-icon mdi mdi-24px mdi-tag-outline" style="width: 24px; height: 24px; align-items: center; justify-content: center; "></span>
<abbr>الاضافات (1)</abbr>
</span>
<span v-on:click="TabelItemClick=-1" style="font-size: 14px; background-color: #fff; display: block; margin: 3px; height: 32px; width: 100%; ">
( 1{{currency}}) جبن سائل</span>
<span style="height: 32px; width: 100%; margin: 3px; display: block; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="nav-icon mdi mdi-24px mdi-tag-outline" style="width: 24px; height: 24px; align-items: center; justify-content: center; "></span>
<abbr style="margin-right: 3px; margin-left: 3px; ">ملاحظات (3)</abbr>
</span>			
<span style="font-size:14px; background-color: #fff; display: block; margin: 3px; height: 32px; width: 100%; ">
زيادة ثوم# , #بدون كتشب ,#بدون شطة
</span>
</div>
</div>
</div>
<div class="cart-item-qty" style="display: flex; width: 100%; line-height: 1px; position: relative; background-color: #fff; ">
<div v-ripple v-on:click="UpdateOrderItems(index,item.qty+1),msgokay('('+item.qty+')'+item.name)" style="position: absolute; z-index:0;  right: 0px; height: 72px; width: 72px; display: flex; align-items: center; justify-content: right !important; color: #2e3442; padding-right: 5px; touch-action:none; ">
<span class="item-home-btn" style="border: 1px solid #666; margin: 0px 14px 0px 7px; font-size: 13px;">+</span>
</div>
<div v-ripple v-show="item.qty>1" v-on:click="UpdateOrderItems(index,item.qty-1),msgokay('('+item.qty+')'+item.name)" style="position: absolute; left: 0px; height: 72px; width: 72px; display: flex; align-items: center; justify-content: left !important; color: #2e3442; padding-left: 5px; touch-action: none; ">
<span class="item-home-btn" style="border: 1px solid #666; margin: 0px 7px 0px 14px; font-size: 13px; ">-</span>
</div>
<div v-ripple v-show="item.qty==1" style="position: absolute; left: 0px; height: 72px; width: 72px; display: flex; align-items: center; justify-content: left !important; color: #2e3442; padding-left: 5px; touch-action: none; ">
<span class="item-home-btn" style="border: 1px solid #666; margin: 0px 7px 0px 14px; font-size: 13px; ">-</span>
</div>
</div>
<div class="cart-item-image" style="display: flex; touch-action: pan-y !important; height: 55px; width: 100%; align-items: center; justify-content: center !important; ">
<div class="item-cart-pan" style="touch-action: pan-y !important; display: flex; height: 55px; align-items: center; flex-wrap: wrap; justify-content: center !important; align-items: center; ">
<img alt="يتم التحميل..." class="lazy" draggable="false" style="touch-action: pan-y !important; pointer-events: none; border-radius: 50%; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center !important; width: 48px; height: 48px; margin-top: 3px; " :data-src="'http://192.168.0.197/img/pd/'+item.img">
</div>
</div>
<div class="cart-item-btn" style="align-items: center; justify-content: center !important; margin: auto; color: #000; display: flex; flex-wrap: wrap; width: 95%; margin: 3px auto 3px auto; touch-action: pan-y !important; z-index: 12; " v-on:focus="selcted_index=index" v-on:click="selcted_index=index">
<abbr class="item-txt" style="color: #000; font-size: 15px; height: 32px; width: 100%; margin: 3px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
({{item.qty}}) {{item.name}} - {{formatPrice(item.total)}} {{currency}}
</abbr>
<span v-ripple v-on:click="DelOrderItems(index),Swal_Del('تم الحذف')" style="border: 1px solid #ccc; color: #272727; font-size: 15px; height: 32px; width: 48%; margin: 3px auto 3px auto; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="nav-icon mdi mdi-24px mdi-backspace-outline" style="color: #dc3545; margin: 3px; display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
<abbr class="nav-icon_titel" style="display: flex; width: auto; height: 32px; margin: 3px; align-items: center; justify-content: center; ">حذف </abbr>
</span>
<span v-ripple v-on:click="msginfo('.tags--')" style="border: 1px solid #ccc; color: #272727; font-size: 15px; height: 32px; width: 48%; margin: 3px auto 3px auto; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="nav-icon mdi mdi-24px mdi-tag-multiple" style=" margin: 3px; display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
<abbr class="nav-icon_titel" style="display: flex; width: auto; height: 32px; margin: 3px; align-items: center; justify-content: center; ">عرض التفاصيل</abbr>
</span>
</div>
</div>
</div>

<div class="cart-item-btn-confirm" v-show="OrderItems.length>0" style="background-position: center; width: 100%; background-repeat: repeat; touch-action: none; touch-action: pan-x pan-y; color: #fff; height: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; position: relative; margin: 5px auto 5px auto; ">
<div style="display: flex; background: linear-gradient(45deg, #343a40, black); cursor: pointer; height: 72px; width: calc( 100% - 24px); justify-content: center; position: relative; ">
<div v-on:click="preview='ViewCartConfirm',Order_Confirm='mobile'" class="item-cart-add" style="display: flex; cursor: pointer; align-items: center; justify-content: center; touch-action: none; touch-action: pan-x pan-y; width: 100%; font-size: 22px; ">
({{formatPrice(OrderSubTotal)}} {{currency}})  تنفيذ الطلب
<span class="mdi mdi-36px mdi-gesture-double-tap" style="display: flex; width: 36px; max-height: 36px; align-items: center; justify-content: center; "></span>
</div>
</div>
<div class="item__total" style=" z-index:200; position: absolute; bottom: 72px; background: linear-gradient(45deg, #343a40, black); display: none; flex-wrap: wrap; height: 72px; width: calc( 100% - 24px); overflow: hidden; justify-content: center !important; align-items: center; ">
<div style="display: flex; height: 72px; width: 100%;overflow: hidden;">
<span class="btn" style="display: flex; cursor:pointer; font-size: 22px; width: 100%; color: #fff; justify-content: center !important; align-items: center; border: 1px solid #000; ">{{formatPrice(items[preview_index].price * items[preview_index].qty)}} {{currency}}</span>
</div>
</div>
</div>

<div class="cart-item-btn-exit" v-show="OrderItems.length<=0" style=" background-position: center;width:100%; background-repeat: repeat; touch-action: none; touch-action: pan-x pan-y; color: #fff; height: 0px; overflow:hidden; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; position:relative; ">
<div style="display: flex; cursor: pointer; height: 2px; width: calc( 100% - 24px); justify-content: center; position: relative; ">
<div v-on:click="preview=''" class="item-cart-add" style="display: flex; cursor: pointer; align-items: center; justify-content: center; touch-action: none; touch-action: pan-x pan-y; width: 100%; font-size: 22px; ">
رجوع
</div>
</div>
</div>

</div>

</main>


</div>
</div>

<div v-show="preview==='ViewCartConfirm'" class="PageCartConfirm" style=" z-index: 11; position: absolute; width: 100%; top: 0px; right: 0px; background-color: rgba(18,19,20,.2);">
<!--v-on:click="preview=''"-->
<div v-tap="(e) => pan_tap(e,'PageCartConfirm-swipe')" class="PageCartConfirm-swipe" style="display: flex; flex-wrap: wrap; align-items: center; width: calc(100% - 32px);margin: auto; touch-action: pan-y !important; ">
<main v-pan="(e) => pan_item(e,'.cart-confirm-view')" v-panend="(e) => pan_item_end(e,'.cart-confirm-view')" class="cart-confirm-view" style="border-radius:25px; background: linear-gradient(135deg, #f2f2f2, #eee); padding-top: 12px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; width: 100%; position: relative; text-align: center; overflow-y: scroll; overflow-x: hidden; scrollbar-color: auto; scrollbar-width: none; scroll-snap-type: mandatory; touch-action: pan-y !important; ">
<div v-show="OrderItems.length>0" style="display: flex; flex-wrap: wrap; width: 100%; justify-content: center; align-items: center; touch-action: pan-y !important; ">
<div class="close-confirm-btn" style="align-items: center; justify-content: center !important; margin: auto; height: 1px; color: #272727; display: flex;touch-action: pan-y !important; z-index: 132; cursor: pointer; ">
<div style="position: absolute; left: 0px; top: 0px; font-size: 15px; height: 45px; width: 48px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr v-ripple v-on:click="preview=''" style="display: flex; border: 1px solid #999; border-radius: 22px 0px; width: 48px; height: 45px; color: #272727; align-items: center; justify-content: center; font-size: 24px; ">
<span class="nav-icon mdi mdi-36px mdi-close" style="color: #272727; display: flex; width: 48px; height: 45px; align-items: center; justify-content: center; "></span>
</abbr>
</div>
</div>
<div class="step-nav" style="align-items: center; justify-content: center !important; color: #272727; display: flex; flex-wrap: wrap; width: 100%; height: 100px; margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<div class="step-nav-item" style="height: 100px; align-items: center; justify-content: center !important; color: #272727; display: flex; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer;">
<div v-on:click="Order_Confirm='mobile'" class="step-nav-btn" style="font-size: 15px; height: 100px; width: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr style="border: 1px solid #555; border-radius: 50%; font-size: 15px; height: 75px; width: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="step-icon mdi mdi-36px mdi-phone-in-talk" style="display: flex; width:100%; height: 36px; align-items: center; justify-content: center; "></span>
</abbr>
<abbr style="font-size: 15px; display: flex; width: 100%; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
 رقم الجوال
</abbr>
</div>
<div class="step-nav-line" style="position: relative; font-size: 15px; height: 1px; width: 40px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<div class="new-line" style="position: absolute; bottom: 5px; left: 1px; background: #555; height: 3px; width: 40px; "></div>
</div>
</div>
<div class="step-nav-item" style="height: 100px; align-items: center; justify-content: center !important; color: #272727; display: flex; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer;">
<div v-on:click="Order_Confirm='location'" class="step-nav-btn" style="font-size: 15px; height: 100px; width: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr style=" border: 1px solid #ccc; border-radius: 50%; font-size: 15px; height: 75px; width: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="step-icon mdi mdi-36px mdi-map-marker-multiple" style="display: flex; width:100%; height: 36px; align-items: center; justify-content: center; "></span>
</abbr>
<abbr style="font-size: 15px; display: flex; width: 100%; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
 تحديد الفرع
</abbr>
</div>
<div class="step-nav-line" style="position: relative; font-size: 15px; height: 1px; width: 40px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<div class="new-line" style="position: absolute; bottom: 5px; left: 1px; background: #555; height: 3px; width: 40px; "></div>
</div>
</div>
<div class="step-nav-item" style="height: 100px;width: 75px;align-items: center; justify-content: center !important; color: #272727; display: flex; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer;">
<div v-on:click="Order_Confirm='note'" class="step-nav-btn" style="font-size: 15px; height: 100px; width: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr style=" border: 1px solid #ccc; border-radius: 50%; font-size: 15px; height: 75px; width: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="step-icon mdi mdi-36px mdi-cloud-outline" style="display: flex; width:94%; height: 36px; align-items: center; justify-content: center; "></span>
</abbr>
<abbr style="font-size: 14px; display: flex; width: 75px; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">تنفيذ الطلب</abbr>
</div>
</div>
</div>
<div style="scrollbar-color: rgba(18,19,20,.5) #ccc; scrollbar-width: none; display: flex; flex-wrap: wrap; width: 100%; justify-content: center; align-items: center; ">
<div v-show="Order_Confirm==='mobile'" class="mobile-info animate__animated animate__flipInY" style=" padding: 0px 0px 3px 0px; color: #272727; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; width: 94%; margin: auto; touch-action: pan-y !important; z-index: 12; ">
<div class="mobile-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%;margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<div style="color: #272727; font-size: 15px; height: 125px; width: 125px; border-radius: 50%; margin: 24px 0px 14px 0px; padding: 3px 0px 3px 0px; display: none; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<div style="line-height:1px;position:relative;">
<div class="circle" style=" height: 100px; width: 100px; background: linear-gradient(45deg, #eee, #ccc); position: absolute; top: 0px; left: 50%; ">
<div style="display: flex; height: 100px; width: 100px; align-items: center; justify-content: center !important; ">
<img src="img/phone-call.svg" style="display: flex; align-items: center; justify-content: center !important; margin: auto; max-height: 75px; " />
</div>
</div>
</div>
</div>
</div>
<div class="brunch-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%; margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<abbr style="font-size: 15px; height: 45px; border-top: 1px solid #555; border-bottom: 1px solid #555; width: 94%; margin: 3px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
 الرجاء اضافة رقم الجوال
</abbr>
</div>
<div class="brunch-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%; margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<div class="mobile-info-btn dark" style=" border: 1px solid #555; font-size: 15px; height: 75px; width: 94%; margin: 7px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<input v-model="Order_Mobile" type="text" id="inputAddress2" maxlength="10" placeholder="05xxxxxxxx" style="display: flex; height: 72px; flex-wrap: wrap; align-items: center; justify-content: center !important; width: 100%; font-size:22px; margin:auto; text-align:center; ">
</div>
</div>
<div class="cart-off" style="color: #272727; display: flex; flex-wrap: wrap; width: 94%; touch-action: pan-y !important; z-index: 12; margin: auto;">
<div v-on:click="Order_Confirm='location'"  class="home-card-bottom" style="cursor:pointer; align-items: center; justify-content: center !important; margin: auto; color: #000; display: flex; flex-wrap: wrap; width: 100%; margin: 3px auto 3px auto; touch-action: pan-y !important; z-index: 12; ">
<span style="background: linear-gradient(135deg, #dadada, #e5e5e5); border: 1px solid #555; color: #272727; font-size: 22px; height: 72px; width: 94%; margin: 14px auto 14px auto; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr class="nav-icon_titel" style="display: flex; width: auto; color: #272727; height: 32px; align-items: center; justify-content: center; font-size: 22px; ">التالي</abbr>
<span class="nav-icon mdi mdi-24px mdi-checkbox-multiple-marked-circle-outline" style="color: #272727; margin: 3px; display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
</span>
</div>
</div>
</div>
<div v-show="Order_Confirm==='location'" class="location-info animate__animated animate__flipInY" style=" padding: 0px 0px 3px 0px; color: #272727; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; width: 94%; margin: auto; touch-action: pan-y !important; z-index: 12; ">
<div class="location-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%;margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<div style="color: #272727; font-size: 15px; height: 100px; width: 125px; border-radius: 50%; margin: 24px 0px 14px 0px; padding: 3px 0px 3px 0px; display: none; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<div style="line-height:1px;position:relative;">
<div class="circle" style=" height: 100px; width: 100px; background: linear-gradient(45deg, #eee, #ccc); position: absolute; top: 0px; left: 50%; ">
<div style="display: flex; height: 100px; width: 100px; align-items: center; justify-content: center !important; ">
<img src="img/location.svg" style="display: flex; align-items: center; justify-content: center !important; margin: auto; max-height: 45px; " />
</div>
</div>
</div>
</div>
</div>
<div class="brunch-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%; margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<abbr v-show="Order_Branch===''" style="font-size: 15px; height: 45px; border-top: 1px solid #555; border-bottom: 1px solid #555; width: 94%; margin: 3px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
 الرجاء تحديد الفرع
</abbr>
<abbr v-show="Order_Branch!=''" style="font-size: 15px; height: 45px; border-top: 1px solid #555; border-bottom: 1px solid #555; width: 94%; margin: 3px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
تم اختيار فرع ({{Order_Branch}})
</abbr>
</div>
<div class="brunch-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%; margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<abbr v-for="(item, index) in branch" v-on:click="msg_val(item.Aname,300),Order_Branch=item.Aname,Order_Branch_ID=item.id" class="brunch-info-btn dark" style="border: 1px solid #555; font-size: 15px; height: 60px; width: 94%; margin: 7px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="brunch-icon mdi mdi-24px mdi-gesture-double-tap" style="display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
{{item.Aname}}
</abbr>
</div>
<div class="cart-off" style="color: #272727; display: flex; flex-wrap: wrap; width: 94%; touch-action: pan-y !important; z-index: 12; margin: auto;">
<div v-on:click="Order_Confirm='note'" class="home-card-bottom" style="cursor:pointer; align-items: center; justify-content: center !important; margin: auto; color: #000; display: flex; flex-wrap: wrap; width: 100%; margin: 3px auto 3px auto; touch-action: pan-y !important; z-index: 12; ">
<span style="background: linear-gradient(135deg, #dadada, #e5e5e5); border: 1px solid #555; color: #272727; font-size: 22px; height: 72px; width: 94%; margin: 14px auto 14px auto; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr class="nav-icon_titel" style="display: flex; width: auto; color: #272727; height: 32px; align-items: center; justify-content: center; font-size: 22px; ">التالي</abbr>
<span class="nav-icon mdi mdi-24px mdi-checkbox-multiple-marked-circle-outline" style="color: #272727; margin: 3px; display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
</span>
</div>
</div>
</div>
<div v-show="Order_Confirm==='note'" class="note-info animate__animated animate__flipInY" style=" padding: 0px 0px 3px 0px; color: #272727; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; width: 94%;margin: auto; touch-action: pan-y !important; z-index: 12; ">
<div class="note-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%;margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<div style="color: #272727; font-size: 15px; height: 125px; width: 125px; border-radius: 50%; margin: 24px 0px 14px 0px; padding: 3px 0px 3px 0px; display: none; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<div style="line-height:1px;position:relative;">
<div class="circle" style=" height: 100px; width: 100px; background: linear-gradient(45deg, #eee, #ccc); position: absolute; top: 0px; left: 50%; ">
<div style="display: flex; height: 100px; width: 100px; align-items: center; justify-content: center !important; ">
<img src="img/happy-smilin.svg" style="display: flex; align-items: center; justify-content: center !important; margin: auto; max-height: 75px; " />
</div>
</div>
</div>
</div>
</div>
<div class="brunch-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%; margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<abbr style="font-size: 15px; border-top: 1px solid #555; border-bottom: 1px solid #555; height: 45px; width: 94%; margin: 3px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
الرجاء اضافة ملاحظاتك  
</abbr>
</div>
<div class="brunch-info-title" style="align-items: center; justify-content: center !important; margin: auto; color: #272727; display: flex; flex-wrap: wrap; width: 94%; margin: 3px auto 3px auto; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer; ">
<div class="note-info-btn dark" style="border: 1px solid #555; font-size: 15px; height: 100px; width: 94%; margin: 7px 0px 3px 0px; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<textarea type="text" id="inputAddress2" maxlength="500" rows="2" placeholder="مثل : سفري , محلي , زيادة خبز ,زيادة كل شي , بدون ثلج المشروبات , تاخير الطلب 30 دقيقة , الرجاء الاتصال بي" style="display: flex; height: 98px; flex-wrap: wrap; align-items: center; justify-content: center !important; width: 100%; font-size:15px; margin:auto; text-align:center; "></textarea>
</div>
</div>
<div class="cart-off" style="color: #272727; display: flex; flex-wrap: wrap; width: 94%; touch-action: pan-y !important; z-index: 12; margin: auto;">
<div v-on:click="Swal_CartOff('سيتم تنفيذ الطلب !','تم تنفيذ الطلب '),preview='',OrderItems = []"  class="home-card-bottom" style="cursor:pointer; align-items: center; justify-content: center !important; margin: auto; color: #000; display: flex; flex-wrap: wrap; width: 100%; margin: 3px auto 3px auto; touch-action: pan-y !important; z-index: 12; ">
<span style="background: linear-gradient(135deg, #dadada, #e5e5e5); border: 1px solid #555; color: #272727; font-size: 22px; height: 72px; width: 94%; margin: 14px auto 14px auto; padding: 3px 0px 3px 0px; display: flex; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr class="nav-icon_titel" style="display: flex; width: auto; color: #272727; height: 32px; align-items: center; justify-content: center; font-size: 22px; ">ارسال الطلب</abbr>
<span class="nav-icon mdi mdi-24px mdi-checkbox-multiple-marked-circle-outline" style="color: #272727; margin: 3px; display: flex; width: auto; height: 32px; align-items: center; justify-content: center; "></span>
</span>
</div>
</div>
</div>
</div>
</div>
<div v-show="OrderItems.length>0633" style="background: rgba(18,19,20,.2); background-position: center;width:100%; background-repeat: repeat; touch-action: none; touch-action: pan-x pan-y; color: #fff; height: 75px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; position:relative; ">
<div style="display: flex; background: linear-gradient(45deg, #343a40, black); cursor: pointer; height: 72px; width: calc( 100% - 24px); justify-content: center; position: relative; ">
<div v-on:click="preview='',Swal_Success('تم تنفيذ الطلب'),OrderItems=[]" class="item-cart-add" style="display: flex; cursor: pointer; align-items: center; justify-content: center; touch-action: none; touch-action: pan-x pan-y; width: 100%; font-size: 22px; ">
رجوع
<span class="mdi mdi-36px mdi-gesture-double-tap" style="display: flex; width: 36px; max-height: 36px; align-items: center; justify-content: center; "></span>
</div>
</div>
</div>
</main>
</div>
</div>

<div v-show="preview==='ViewSetGrid'" class="PageViewSetGrid" style=" z-index: 11; position: absolute; width: 100%; top: 0px; right: 0px; background-color: rgba(18,19,20,.2);">
<!--v-on:click="preview=''"-->
<div v-tap="(e) => pan_tap(e,'PageViewSetGrid')" class="PageViewSetGrid" style="display: flex; flex-wrap: wrap; align-items: center; max-width: calc(100% - 32px); height: calc(100vh); margin: auto; touch-action: pan-y !important; ">
<main v-pan="(e) => pan_item(e,'.cart-confirm-view')" v-panend="(e) => pan_item_end(e,'.cart-confirm-view')" class="cart-confirm-view" style="border-radius:25px;display: flex; flex-wrap: wrap; justify-content: center; align-items: center; width: 75%; position: relative; text-align: center; overflow-y: scroll; overflow-x: hidden; scrollbar-color: auto; scrollbar-width: none; scroll-snap-type: mandatory; touch-action: pan-y !important; ">
<div class="animate__animated animate__fadeInLeft animate__faster" style="background: linear-gradient(135deg, #ccc, #fff); display: flex; flex-wrap: wrap; width: 100%; justify-content: center; align-items: center; touch-action: pan-y !important; ">
<div class="step-item" style=" height: 72px; width: 100%; align-items: center; justify-content: center !important; color: #272727; display: flex; justify-content: center !important; touch-action: pan-y !important; z-index: 12; cursor: pointer;">
<div class="btn-view-grid" style="font-size: 15px; height: 55px; width: 72px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr style="font-size: 15px; height: 55px; width: 72px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="alert-icon mdi mdi-24px mdi-view-dashboard" style="display: flex; width:100%; height: 36px; align-items: center; justify-content: center; "></span>
لوحة
</abbr>
</div>
<div class="btn-view-list" style="font-size: 15px; height: 55px; width: 72px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr style="font-size: 15px; height: 55px; width: 72px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="alert-icon mdi mdi-24px mdi-reorder-horizontal" style="display: flex; width:100%; height: 36px; align-items: center; justify-content: center; "></span>
قائمة
</abbr>
</div>
<div class="btn-view-week" style="font-size: 15px; height: 55px; width: 72px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<abbr style="font-size: 15px; height: 55px; width: 72px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center !important; touch-action: pan-y !important; ">
<span class="alert-icon mdi mdi-24px mdi-reorder-vertical" style="display: flex; width:100%; height: 36px; align-items: center; justify-content: center; "></span>
مجموعة
</abbr>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
`,
	data() {
		return {
		branch: [
			{ id: 1, Aname: 'المنصورة', Ename: 'Mansoura', link: 'mansoura', maps: 'mansoura', Aaddress: 'mansoura', Eaddress: 'mansoura', Acity: 'الرياض', Ecity: 'Riyadh', phone: '011256447', mobile: '0556987483' },
			{ id: 2, Aname: 'العزيزية', Ename: 'Al Aziziah', link: 'aziziah', maps: 'mansoura', Aaddress: 'mansoura', Eaddress: 'mansoura', Acity: 'الرياض', Ecity: 'Riyadh', phone: '011256447', mobile: '0556987483' }
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
					{ id: 1, Aname: 'جبن', Ename: 'cheese', price: 1 },
					{ id: 2, Aname: 'حجم صغير', Ename: 'cheese', price: 1 },
					{ id: 3, Aname: 'حجم كبير', Ename: 'cheese', price: 1 }
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
		OrderItems: [
			{ "id": 1, "name": "بروستد عادي", "qty": 1, "price": 25, "total": 25, "img": "brost1.jpg" },
			{ "id": 3, "name": "مسحب عادي", "qty": 1, "price": 25, "total": 25, "img": "mashb.jpg" },
			{ "id": 5, "name": "برجر دجاج", "qty": 1, "price": 25, "total": 25, "img": "gzandIc.jpg" },
			//{ "id": 6, "name": "روبيان حراق", "qty": 1, "price": 25, "total": 25, "img": "robian.jpg" },
			//{ "id": 1, "name": "بروستد عادي", "qty": 1, "price": 25, "total": 25, "img": "brost1.jpg" },
			//{ "id": 3, "name": "مسحب عادي", "qty": 1, "price": 25, "total": 25, "img": "mashb.jpg" },
			//{ "id": 5, "name": "برجر دجاج", "qty": 1, "price": 25, "total": 25, "img": "gzandIc.jpg" },
			//{ "id": 6, "name": "روبيان حراق", "qty": 1, "price": 25, "total": 25, "img": "robian.jpg" },
			//{ "id": 1, "name": "بروستد عادي", "qty": 1, "price": 25, "total": 25, "img": "brost1.jpg" },
			//{ "id": 3, "name": "مسحب عادي", "qty": 1, "price": 25, "total": 25, "img": "mashb.jpg" },
			//{ "id": 5, "name": "برجر دجاج", "qty": 1, "price": 25, "total": 25, "img": "gzandIc.jpg" },
			//{ "id": 6, "name": "روبيان حراق", "qty": 1, "price": 25, "total": 25, "img": "robian.jpg" },
			{ "id": 2, "name": "المشروبات الغازية", "qty": 1, "price": 25, "total": 25, "img": "drink.png" },
		],
		model: null,
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
		OrderSubTotal: 0,
		OrderDiscount: 0,
		OrderVat: 0,
		OrderTotal: 0,
		OrderItemsCount: 0,
		Order_Mobile: '',
		Order_Note: '',
		Order_Branch: '',
		Order_Branch_ID: 0,
		Order_Number: '',
		Order_Confirm: '',
		LastOrder: 0,
		num: 0,
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
		}
	},
	mounted() {
		this.User_Lang = 'ar';
		this.selctedCat = 'الكل';
		this.lazy_update();
	},
	updated() {
		//var lazyLoadInstance = new LazyLoad({});
		this.lazy_update();
	},
	methods: {
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
					this.OrderItems = [];
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
		AddOrderItems: function (id, name, qty, price, img) {
			var total = (price * qty);
			this.OrderItems.push({ id: id, name: name, qty: qty, price: price, total: total, img: img });
			this.CountOrderTotal();
			this.Item_qty = 1;
			//this.OrderSubTotal += (qty * price);
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