(function() {
	
	angular
		.module('presentation')
		.factory('boardService', [boardService]);

	function boardService() {
		return {
			"fig1": [],
			"capture": [
				{
					mark: 'BLACK',
					positions: ["B3","C2","D3"]
				},
				{
					mark: 'WHITE',
					positions: ["C3"]
				}
			],
			"fig2": [
				{
					mark: 'BLACK',
					positions: ["A2","B3","B2","B1","D2","D1"]
				},
				{
					mark: 'WHITE',
					positions: ["C3","C2"]
				}
			],
			"fig3": [
				{
					mark: 'BLACK',
					positions: ["A2","B2","B1","C2","D2","D1"]
				},
				{
					mark: 'WHITE',
					positions: ["A3","B3","C3","D3","E3","E2","E1"]
				}
			]
		}
	}

	var template = {
		"boardName": [
				{
					mark: 'BLACK',
					positions: []
				},
				{
					mark: 'WHITE',
					positions: []
				}
			]
		}

})();