(function() {

	angular
		.module('presentation', ['ui.router', 'ngMaterial'])
		.config(function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('brown', {
					'default': '500',
					'hue-1': 'A100',
					'hue-2': '700',
					'hue-3': '900'
				})
				.accentPalette('blue-grey')
				.dark()
		})

})();