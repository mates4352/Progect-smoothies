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

let product = document.querySelectorAll('.products__bth')

product.forEach(function (event) {
	event.addEventListener("click", function () {
		let number = document.getElementById('number');
		number.innerText++
	})
})


let anchors = document.querySelectorAll('a[href*="#"')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault()
		let blockId = anchor.getAttribute('href')

		document.querySelector(blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	})
}

/* active(onclick) */

let burger = document.querySelector('.header__burger')

burger.addEventListener('click', function () {
	let menu = document.querySelector('.menu')
	let body = document.querySelector('body')

	menu.classList.toggle("active")
	body.classList.toggle('lock')
})

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


