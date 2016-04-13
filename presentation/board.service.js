(function() {
	
	angular
		.module('presentation')
		.factory('boardService', [boardService]);

	function boardService() {
		return {
			"test": [
				{
					mark: 'BLACK_TERRITORY',
					positions: ["C6","D7","D5","E6"]
				},
				{
					mark: 'WHITE_TERRITORY',
					positions: ["C5","C4","D8"]
				}
			]
		}
	}

})();