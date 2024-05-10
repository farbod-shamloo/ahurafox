
/* 
 * Stark Theme Js v1.0
 */

(function($){
	"use strict";

	$( document ).ready(function() {
		
		/* Set Header Height */
		$('header.full-height, .header-content').height( $(window).height() );
		$( window ).resize(function() {
			$('header.full-height, .header-content').height( $(window).height() );						
		});
		
		/* Sticky Code */
		if($('.navbar.navbar-sticky').length){
	
			var outer_class = '';		
			var lastScrollTop = 0;
			var header_top = 0;

			outer_class = 'nav.navbar'; //outer_class = '.navbar-outer';
			header_top = $(outer_class).offset().top;
			
			$( window ).resize(function() {
				outer_class = 'nav.navbar';
				header_top = $(outer_class).offset().top;						 
			});
			
			$(window).scroll(function(event){
	
				var st = $(this).scrollTop();
				if( st > header_top ){
					$('.navbar.navbar-sticky').addClass('header-sticky');
				}else{
					$('.navbar.navbar-sticky').removeClass('header-sticky');
				}
				
				if( st == 0 ){
					$('.navbar.navbar-sticky').removeClass('header-sticky');
				}
				
				lastScrollTop = st;
			});
		}
		
		/* Set Column Bg */
		$( ".section-parallax" ).each(function() {
			$(this).css({ "background-image" : "url("+ $(this).data("src") +")" });	
		});
		
		/* Animation Appear */
		$('.animated').appear(function() {
			var elem = $(this);
			var animation = elem.data('animation');
			var delay = elem.data('animation-delay');
			if (!elem.hasClass('visible')) {
				if( delay ){
					elem.addClass("").delay(delay).queue(function(next){
						elem.addClass(animation + " visible");
						next();
					});
				}else{
					elem.addClass(animation + " visible");
				}	
			}
		});
		
		/* Counter Definition */
		$.fn.jQuerySimpleCounter = function( options ) {
			var settings = $.extend({
				start:  0,
				end:    100,
				easing: 'swing',
				duration: 400,
				complete: ''
			}, options );
	
			var thisElement = $(this);
	
			$({count: settings.start}).animate({count: settings.end}, {
				duration: settings.duration,
				easing: settings.easing,
				step: function() {
					var mathCount = Math.ceil(this.count);
					thisElement.text(mathCount);
				},
				complete: settings.complete
			});
		};
		
		/* Counter Calling */
		$( ".counter" ).appear(function(){
			var end_va = $( this ).data( "counter" );
			$(this ).jQuerySimpleCounter({
				start:  0,
				end:    end_va,
				duration: 2000
			});
		});
		
		/* Owl Carousel */
		if( $( ".header-slider" ).length ){
			$('header').css( 'background', 'none' );
		}
		if( $( ".header-slider" ).length && $( ".header-slider" ).data( "items" ) == '1' ){
			
			$( window ).resize(function() {
				$( ".header-slider .item" ).each(function() {
					$( this ).height( $( window ).height() );
				});
			});
			
			$( ".header-slider .item" ).each(function() {
				var c_slide = $( this );
				c_slide.height( $( window ).height() );
				
				if( c_slide.find( "img.slide-img" ).length ){
					var img_src = c_slide.find( "img.slide-img" ).attr( "src" );
					c_slide.css({ 'background-image' : 'url('+ img_src +')' });
					c_slide.find( "img.slide-img" ).remove();
				}

			});											  
		}

		$( ".owl-carousel" ).each(function() {
			
			var loop = $(this).data('loop');
			var items = $(this).data('items');
			var margin = $(this).data('margin');
			var nav = $(this).data('nav');
			var autoplay = $(this).data('autoplay');
			var duration = $(this).data('duration');
			var autoplayspeed = $(this).data('autoplayspeed');
			var animatein = $(this).data('animatein');
			var animateout = $(this).data('animateout');
			var dots = $(this).data('dots');
			var smart_speed = $(this).data('smart-speed');
			var slideby = $(this).data('slideby');
			var left_arrow = $(this).data('left-arrow');
			var right_arrow = $(this).data('right-arrow');

			if( nav == true ){
				left_arrow = left_arrow != '' ? '<i class="'+ left_arrow +'"></i>' : '';
				right_arrow = right_arrow != '' ? '<i class="'+ right_arrow +'"></i>' : '';
			}
			
			$(this).owlCarousel({
				loop: loop,
				items: items,
				nav: nav,
				dots: dots,
				slideBy: slideby,
				autoplay: autoplay,
				autoplayTimeout : duration,
				autoplaySpeed: autoplayspeed,
				margin: margin,
				animateIn: animatein,
				animateOut: animateout,
				smartSpeed: smart_speed,
				navText: [left_arrow,right_arrow],
				responsive:{
					0:{
						items:1,
					},
					768:{
						items:items,
					}
				}
			});
			
		});
		
		/* Advanced Animated Owl Carousel */
		$('.stark-animated').each(function() {
			if( $(this).data('animation-duration') ){
				var animationDelay = $(this).data('animation-duration');
				$(this).css( 'animation-duration', animationDelay );
			}
		});
		
		//Owl Animation
		$('.stark-animated').appear(function() {
			var elem = $(this);
			var animation = elem.data('animation');
			var delay = elem.data('animation-delay');
			if (!elem.hasClass('visible')) {
				if( delay ){
					elem.addClass("").delay(delay).queue(function(next){
						elem.addClass(animation + " visible");
						next();
					});
				}else{
					elem.addClass(animation + " visible");
				}	
			}
		});
		
		
		$( ".animated-owl-carousel" ).each(function() {
			var c_carousel = $(this);
			c_carousel.on('change.owl.carousel', function(event) {
				var animationDelay = $(event.target).find('.stark-animated').data('animation-duration');
				
				$(event.target).find('.stark-animated').each(function() {
					var c_animation = $(this);
					var animation = c_animation.data('animation');
					c_animation.removeClass(animation + " visible");
				});
	
				$(event.target).find('.stark-animated').each(function() {
					var c_animation = $(this);
					var animation = c_animation.data('animation');
					var delay = c_animation.data('animation-delay');
					if( delay ){
						c_animation.addClass("").delay(delay).queue(function(next){
							c_animation.addClass(animation + " visible");
							next();
						});
					}else{
						c_animation.addClass(animation + " visible");
					}	
				});
	
			});
		});
				
		/* Slider Height Change on Window Resize */	
		if( $( ".header-slider" ).length && $( ".header-slider" ).data( "items" ) == '1' ){
			$( window ).resize(function() {
				$('header, .header-content').height( $(window).height() );
			});
		}
		
		/* Progress Bar */
		$( ".progress .progress-bar" ).appear(function(){
			$( this ).css( "width",
					function() {
						return $( this ).attr( "aria-valuenow" ) + "%";
					}
			);
		});
		
		/* Background Image Set */
		$( ".bg-img" ).each(function() {
			if( $(this).data( "src" ) ){
				$(this).css({ 'background-image' : 'url('+ $(this).data( "src" ) +')' });
			}
		});
		
		/* Background YT Player Video */
		$(".bg-video").YTPlayer();
		
		/*Back to top*/
		$('#back-to-top').click(function(){
			$('html,body').animate({scrollTop:0}, 1000);return false;
		});
		$(document).scroll(function() {
			var y = $(this).scrollTop();
			if ( y > 300 )
				$('#back-to-top').fadeIn();
			else
				$('#back-to-top').fadeOut();
		});
		
		/* Scroll Code */
		var nav_height = $( "nav.navbar" ).height();
		$('.navbar-nav a[href^="#"]').on('click',function (e) {
			e.preventDefault();
	
			var target = this.hash;
			var $target = $(target);
			var pos;
			if( nav_height == $( "nav.navbar" ).height() ){
				pos = parseInt( $target.offset().top, 10 ) - $( "nav.navbar" ).height() + 10;	
			}else{
				pos = parseInt( $target.offset().top, 10 ) - $( "nav.navbar" ).height();	
			}
			
			$('html, body').stop().animate({
				'scrollTop': pos
			}, 900, 'easeInOutExpo' );
			
			//Trigger after one page scroll
			$( ".navbar-toggle" ).trigger( "click" );
			
			return false;
		});
		
		/* Subscribe Form Validation and Submit */
		$('#subscribe-form').bootstrapValidator({
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'fa fa-check',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: {
				mcemail: {
					validators: {
						notEmpty: {
							message: 'The email address is required'
						},
						emailAddress: {
							message: 'The email address is not valid'
						}
					}
				}
			},
			onSuccess: function(e) {
				e.preventDefault();
	
				var $form = $(e.target);
	
				// Use Ajax to submit form data
				$.ajax({
					url: $form.attr('action'),
					type: 'POST',
					data: $form.serialize(),
					success: function(result) {
						$('#subscribe-status-msg').html(result);
						$('#subscribe-status-msg').fadeIn(500);
						$('#subscribe-status-msg').removeClass('hide');
						$('.subscribe-btn').removeAttr('disabled');
					}
				});
			}
		});
		
		/* Contact Form Validation and Submit */	
		$('#contact-form').bootstrapValidator({
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'fa fa-check',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: {
				name: {
					validators: {
						notEmpty: {
							message: 'The Name is required and cannot be empty'
						}
					}
				},
				email: {
					validators: {
						notEmpty: {
							message: 'The email address is required'
						},
						emailAddress: {
							message: 'The email address is not valid'
						}
					}
				},
				message: {
					validators: {
						notEmpty: {
							message: 'The Message is required and cannot be empty'
						}
					}
				}
			},
			onSuccess: function(e) {
				e.preventDefault();
	
				var $form = $(e.target);
	
				// Use Ajax to submit form data
				$.ajax({
					url: $form.attr('action'),
					type: 'POST',
					data: $form.serialize(),
					success: function(result) {
						$('#contact-status-msg').html(result);
						$('#contact-status-msg').fadeIn(500);
						$('#contact-status-msg').removeClass('hide');
						$('.contact-btn').removeAttr('disabled');
					}
				});
			}
		});
		
		/* Color Panel */
		$('.color-panel-close').click(function(){
			$('.color-panel-close').children('i').toggleClass( 'fa-angle-double-right fa-angle-double-left' );
			$('.color-panel').toggleClass('active');
		});
		
		$('.panel-layout-boxed').click(function(){
			$('.main-wrap, nav.navbar').addClass( 'boxed' );
			return false;
		});
		
		$('.panel-layout-reset').click(function(){
			$('.main-wrap, nav.navbar').removeClass( 'boxed' );
			return false;
		});
		
		$('.panel-color-code').click(function(){
			var file = $(this).data( "file" );
			$( "head" ).find( "#custom-color-panel" ).remove();
			if( $(this).data( "file" ) ) {
				$( "head" ).append( '<link rel="stylesheet" id="custom-color-panel" href="colors/'+ file +'" type="text/css" />' );
			}
			return false;
		});
	
	});
	
})(jQuery);


$(window).load(function(){

	var grid_width = jQuery('.grid').width(); 
	var gutter_size = $('.grid').data( "gutter" );
	var grid_col = $('.grid').data( "col" );
	
	if( $( window ).width() < 768 )
		grid_col = 1;
	
	var net_width = Math.floor( ( grid_width - ( gutter_size * ( grid_col - 1 ) ) ) / grid_col );
	$( ".element-item" ).css({ 'width' : net_width + 'px', 'margin-bottom' : gutter_size + 'px' });

	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		filter: "*",
		resizable: true,
		masonry: {
			gutter: gutter_size
		}
	});
	
	$( ".portfolio" ).click(function() {
		$( ".portfolio" ).removeClass( "filter-active" );
		$(this).addClass( "filter-active" );
		filterValue = $(this).data( "filter" );
		$grid.isotope({ filter: filterValue });
		return false;
	});
	
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40,
	});
	
	$( window ).resize(function() {
								
		var grid_width = $('.grid').width(); 
		var gutter_size = $('.grid').data( "gutter" );
		var grid_col = $('.grid').data( "col" );
		
		if( $( window ).width() < 768 )
			grid_col = 1;
		
		var net_width = Math.floor( ( grid_width - ( gutter_size * ( grid_col - 1 ) ) ) / grid_col );
		$( ".element-item" ).css({ 'width' : net_width + 'px', 'margin-bottom' : gutter_size + 'px' });
	
		var $grid = $('.grid').isotope({
			itemSelector: '.element-item',
			filter: "*",
			resizable: true,
			masonry: {
				gutter: gutter_size
			}
		});
		
		/* Parallax Js */
		$.stellar('refresh');
		
	});
	
	//Page loader
	if( $(".page-loader").length ){
		$(".page-loader").fadeOut("slow");
	}

});

function initStarkContact() {
	
	var map_styles = '{ "Aubergine" : [	{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}], "Silver" : [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}], "Retro" : [{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}], "Dark" : [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}], "Night" : [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}] }';
	
	var map_style_obj = JSON.parse(map_styles);
	
	var map_style_mode = [];
	var map_mode = '';
	if( $( "#starkGoogleMap" ).attr( "data-map-style" ) ){
		map_mode = $( "#starkGoogleMap" ).data("map-style");
		if( map_mode == 'Aubergine' )
			map_style_mode = map_style_obj.Aubergine;
		else if( map_mode == 'Silver' )
			map_style_mode = map_style_obj.Silver;
		else if( map_mode == 'Retro' )
			map_style_mode = map_style_obj.Retro;
		else if( map_mode == 'Dark' )
			map_style_mode = map_style_obj.Dark;
		else if( map_mode == 'Aubergine' )
			map_style_mode = map_style_obj.Night;
	}

	var LatLng = {lat: 51.508742, lng: -0.120850};
	
	var mapProp= {
		center: LatLng,
		scrollwheel: false,
		zoom:9,
		styles: map_style_mode
	};

	var map = new google.maps.Map(document.getElementById("starkGoogleMap"), mapProp);
	
	var marker = new google.maps.Marker({
	  position: LatLng,
	  icon: 'images/marker.png',
	  map: map
	});
	
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(LatLng);
	});

}