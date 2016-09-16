$(function() {


	function bCount () {
		var basketCount = $('.basket__list').children();
		$('.mini-basket').text(basketCount.length);

		if (basketCount.length == 0) {
			$(".basket__panel").prepend('<span class="basket-null">Ваша корзина пуста</span>');
			$('.subtotal > span').text('0');
		}
	};

	bCount();

	$(".card__close").on('click', function () {
		$(this).parent().parent().remove();
		bCount();
	});

	$(".mini-basket").on('click', function () {
		$(this).toggleClass('mini-basket--active');
		$('.basket').fadeToggle(300);
	});

	$(".basket__shadow").on('click', function () {
		$('.mini-basket').toggleClass('mini-basket--active');
		$('.basket').fadeToggle(300);
	});

	var inputVal = $('.bl-form__input').val();

	$('.bl-form__input').keyup(function () {
		if(inputVal.length != 0) $('.bl-form__btn').removeAttr('disabled').removeClass('btn--disabled');
		else $('.bl-form__btn').attr('disabled').addClass('btn--disabled');
	});

	$('.tab-list__item').on('click', function () {
		$('.tab-list__item').removeClass('active');
		$(this).addClass('active');

		var num_active = $('.tab-list').find('.active').index();
    $('.tab-content .tab-content__item').removeClass('active');
    $('.tab-content .tab-content__item').eq(num_active).addClass('active');
	});

	$('.login-link').magnificPopup({
		showCloseBtn: false,
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$('.search__close').on("click",function(i,e){
			$(".wrap").removeClass("blurred");
			$('body').removeClass('search-now');
			$('.search').fadeToggle(300);
	});

	$('.search-link').on('click', function () {
		$('.search').fadeToggle(200);
		$('.search__input').focus();
		$(".wrap").addClass("blurred");
			$('body').addClass('search-now');
	});

	$('.navigation--top .navigation__link').click(function () {
		$(this).toggleClass('navigation__link--active');
	});

	$('#navmain-men').click( function () {
		$('#nav-mens').fadeToggle(200);
	});

	$('#navmain-women').click( function () {
		$('#nav-women').fadeToggle(200);
	});

	$('#navmain-brands').click( function () {
		$('#nav-brands').fadeToggle(200);
	});

	$('#navmain-sale').click( function () {
		$('#nav-sale').fadeToggle(200);
	});

	$('.dropdown__link').on('click', function (e) {
		e.preventDefault();
		// $('.dropdown__list').hide();
		$(this).next().toggle();
		$(this).toggleClass('active');
	});

	var brandsBlockHeight = $('.product-card').height();
	$('.brands-block').css('height', brandsBlockHeight);	

	var stayupHeight = $('.product-card').eq(3).height();
	$('.stayup').css('height', stayupHeight);

	function tagsCount () {
		var tagsCount = $('.tags__item');
		if (tagsCount.length == 0) {
			$(".tags").remove();
		}
	};

	tagsCount();

	var productPanelHeight = $('.product-panel').height();
	$('.wrap--product .basket').css('top', -productPanelHeight)

	$('.tags__close').on('click', function() {
		$(this).parent().remove();
		tagsCount();
	});

	 $('input[type="number"]').styler();

	$('.main-slider__list').bxSlider({
		pagerCustom: '#main-slider__pager',
		adaptiveHeight: true,
		mode: 'fade',
		controls: false
	});

	$('.same-model__slider').bxSlider({
		adaptiveHeight: true,
		pager: false,
		maxSlides: 4,
		minSlides: 2,
		slideMargin: 10,
	 	slideWidth: 100,
	 	moveSlides: 2,
	 	controls: true,
	 	hideControlOnEnd: true,
	 	infiniteLoop: false
	});

	$('.recently__slider').bxSlider({
		adaptiveHeight: true,
		maxSlides: 8,
		slideMargin: 26,
		minSlides: 8,
	 	slideWidth: 140,
	 	moveSlides: 3,
	 	controls: true,
	 	hideControlOnEnd: true,
	 	infiniteLoop: false
	});

	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	})

	$(".fancybox").fancybox();

});
