$(function(){


	var navbar = $('#nav-main'),
	navbarLinks = $('.navbar-nav li'),
	navbarTriggers = $('.nav-trigger'),
	navbarPinnedClass = 'nav--light',
	scrollPos;


	// state, element, class
	function toggleNavbarState(s,e,c){

		if(s) e.addClass(c) 
		else e.removeClass(c);

	}


	function toggleLinkState(elems){

		elems.each(function(i, el) {

			var elem = $(this),
			target = 'a[href*="'+elem.attr('id')+'"]';

			if(scrollPos>elem.offset().top-100){

				$(navbarLinks).removeClass('active');
				$(target).parent().addClass('active');

			}

		});

	}


	// thanks to: https://stackoverflow.com/a/7717572
	$('a[href^="#"]').click( function () {
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top-60
	    }, 400);

	    return false;
	});


	$(window).on("load scroll", function(e) {

		scrollPos = $(this).scrollTop(),
		navbarState = scrollPos>=100 ? 1 : 0;

		toggleNavbarState(navbarState, navbar, navbarPinnedClass);

		toggleLinkState(navbarTriggers);

	});


});
