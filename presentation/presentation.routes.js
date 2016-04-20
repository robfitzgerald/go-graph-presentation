(function() {

	angular
		.module('presentation')
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('frontPage', {
					url: '/',
					controller: function() {
						this.number = 0;
					},
					controllerAs: 'page',
					template: '<present-page number="page.number"></present-page>'
				})
				.state('presentation', {
					url: '/page/:pageNumber',
					controller: function($stateParams) {
						var vm = this;
						vm.number = $stateParams.pageNumber;
					},
					controllerAs: 'page',
					template: '<present-page number="page.number"></present-page>'
				})
		})

})();