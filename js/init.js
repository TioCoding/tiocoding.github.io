(function($) {

	skel.init({
		reset: 'full',
		containers: '100%',
		breakpoints: {
			global: { href: 'css/style.css', grid: { gutters: ['2.5em', 0] } },
			xlarge: { media: '(max-width: 1800px)', href: 'css/style-xlarge.css' },
			large: { media: '(max-width: 1280px)', href: 'css/style-large.css', grid: { gutters: ['2em', 0] } },
			medium: { media: '(max-width: 980px)', href: 'css/style-medium.css'},
			small: { media: '(max-width: 736px)', href: 'css/style-small.css', grid: { gutters: ['1.5em', 0], zoom: 2 }, viewport: { scalable: false } },
			xsmall: { media: '(max-width: 480px)', href: 'css/style-xsmall.css', grid: { zoom: 3 } }
		}
	});

})(jQuery);
