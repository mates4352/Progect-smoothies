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





function getClass(bth, menu, body) {
	bth.onclick = function () {
		menu.classList.toggle("active")
		this.classList.toggle("active")
		body.classList.toggle('lock')
	}

}
getClass(
	document.querySelector('.header__burger'),
	document.querySelector('.menu'),
	document.querySelector('body'));

// $(document).ready(function () {
// 	$('.header__burger').click(function (event) {
// 		$('.header__burger,.menu').toggleClass('active');
// 		// 		body.lock{
// 		// 		overflow: hidden;  -блокирует блок при скроле 
// 		$('body').toggleClass('lock');
// 	});
// });


/* adaptive(уберает указанный блок кода в другой родитель) */

$(window).resize(function (event) {
	adaptive_function();
});

function adaptive_header(w, h) {
	var headerMenu = $('.menu');
	var header__menu = $('.nav__list');

	if (w < 1200) {
		if (!header__menu.hasClass('done')) {
			header__menu.addClass('done').appendTo(headerMenu);
		}

	} else {
		if (header__menu.hasClass('done')) {
			header__menu.removeClass('done').prependTo($('.header__nav'));
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

let banner = document.querySelector('.banner');
banner.onclick = function () {
	banner.style.display = "none"
}

