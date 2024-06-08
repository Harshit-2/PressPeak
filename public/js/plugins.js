// Avoid `console` errors in browsers that lack a console.
'use strict';
(function () {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
(function ($) {

	// Equal Height
	$.fn.equalHeight = function (options) {
		var maxHeight = 0;
		var defaults = {
			selector: $('.equalHeight')
		};
		options = $.extend(defaults, options);

		$(this).each(function () {
			$(this).find(defaults.selector).each(function () {
				if ($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				}
			});
			$(this).find(defaults.selector).height(maxHeight);
		});

		return this;
	}

	// Equal Width
	$.fn.equalWidth = function (options) {
		var maxWidth = 0;
		var defaults = {
			selector: $('.equalWidth')
		};
		options = $.extend(defaults, options);

		$(this).each(function () {
			$(this).find(defaults.selector).each(function () {
				if ($(this).width() > maxWidth) {
					maxWidth = $(this).width();
				}
			});
			$(this).find(defaults.selector).width(maxWidth);
		});

		return this;
	}

	if ($(window).width() > 767) {
		$('.equalHeightWrapper').equalHeight({
			selector: $('.equalHeight')
		});
	}


	function Utils() {

	}

	Utils.prototype = {
		constructor: Utils,
		isElementInView: function (element, fullyInView) {
			var pageTop = $(window).scrollTop();
			var pageBottom = pageTop + $(window).height();
			var elementTop = $(element).offset().top;
			var elementBottom = elementTop + $(element).height();

			if (fullyInView === true) {
				return ((pageTop < elementTop) && (pageBottom > elementBottom));
			} else {
				return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
			}
		}
	};

	var Utils = new Utils();

	function isIE() {
		var ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

		return is_ie;
	}

	isIE();

	if (isIE()) {
		cssVars({
			onlyLegacy: false,
			include: 'link[href="assets/css/style.css"],style',
			onComplete: function (cssText, styleNode) {}
		});
	}

	var _document = $(document);

	_document.on("contextmenu", function (e) {
		if (e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA")
			e.preventDefault();
	});

	_document.on('keydown', function (e) {
		if (e.keyCode == 123) {
			return false;
		}
		if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
			return false;
		}
		if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
			return false;
		}
		if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
			return false;
		}

		if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
			return false;
		}
	});

})(jQuery);