/* ibg(вставляет задний фон через js) */
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

/* ibg(вставляет задний фон через js) */

/* active(onclick) */

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.menu').toggleClass('active');
		// 		body.lock{
		// 		overflow: hidden;  -блокирует блок при скроле 
		$('body').toggleClass('lock');
	});
});

/* active(onclick) */

/* adaptive(уберает указанный блок кода в другой родитель) */

$(window).resize(function (event) {
	adaptive_function();
});

function adaptive_header(w, h) {
	var headerMenu = $('.menu');//ЗАДАЕТ ПЕРЕМЕННЫМ ЗНАЧАНИЕ В ВИДЕ КЛАССА 
	var header__menu = $('.header__list');//ЗАДАЕТ ПЕРЕМЕННЫМ ЗНАЧАНИЕ В ВИДЕ КЛАССА 
	//ГОВОРИТ ЧТО ЕСЛИ РАЗРЕШЕНИЕ БОЛЬШЕ ТО НАША МЕРЕМЕННАЯ В КОТОРОЙ КЛААСС ПЕРЕХОДЯТ ВДРУГОЕ УКАЗАННОЕ МЕСТО 
	if (w < 767) {
		if (!header__menu.hasClass('done')) {
			header__menu.addClass('done').appendTo(headerMenu);
		}
		//ГОВОРИТ ЧТО ЕСЛИ ПЕРВОЕ НЕ СРАБОТАЛО ТО ВОЗРАЩАЕТ ПЕРЕМЕННУЮ ОБРАТНО В СВОЙ КОНТЕЙНЕР 
	} else {
		if (header__menu.hasClass('done')) {
			header__menu.removeClass('done').prependTo($('.header__menu'));
		}
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();

/* adaptive(уберает указанный блок кода в другой родитель) */



