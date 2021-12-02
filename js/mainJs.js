/*global $, cosonle, alert, mixitup, containerEl*/

$(function () {

	'use strict';


	//Adjust Header Height

	var myHeader = $('.header'),
		mySlider = $('.bxslider');

	myHeader.height($(window).height());


	//Resize Window height
	$(window).resize(function () {

		myHeader.height($(window).height());

		mySlider.each(function () {
			$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
		});
	});

	//Links Add Active Class

	$('.links li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});


	//Adjust Bxslider

	mySlider.each(function () {
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
	});



	//Trigger BxSlider

	$('.bxslider').bxSlider({
		pager: false
	});

	//Smooth Scroll To Div 

	$('.links li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data("value")).offset().top
		}, 2000);

	});

	//My Slider 
	(function autoSlider() {
		$('.slider .active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoSlider();
				});
			}
		});
	}());

	
	//Triger mixItUp
	$('#Container').mixItUp();
	
	//Adjust Shuffle 
	$('.shuffle li').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	//Triger Nice Scroll
	$('html').niceScroll({
		cursorcolor : '#1abc9c',
		cursorwidth : '10px',
		cursorborder : '1px solid #1abc9c',
		cursorborderradius : 'none',
		scrollspeed : 200
	});


});

