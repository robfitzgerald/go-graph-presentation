(function() {
	
	angular
		.module('presentation')
		.factory('boardService', [boardService]);

	function boardService() {
		return {
			"empty": [],
			"illegalBoard": [
				{
					mark: 'BLACK',
					positions: ["C4","D5","D3","E4"]
				},
				{
					mark: 'WHITE',
					positions: ["D4"]
				}
			],
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
			"noSuicide": [
				{
					mark: 'WHITE',
					positions: ["B3","B2","C4","C1","D3","D2"]
				},
				{
					mark: 'BLACK',
					positions: ["C2"]
				}
			],
			"noSuicideFlaw": [
				{
					mark: 'WHITE',
					positions: ["C1","C2"]
				},
				{
					mark: 'BLACK',
					positions: ["B1","B2","D1","D2"]
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
			"fig2_interior": [
				{
					mark: 'BLACK',
					positions: ["A2","B3","B2","B1","C2","D2","D1"]
				},
				{
					mark: 'WHITE',
					positions: ["C3"]
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
			],
			"fig6": [
				{
					mark: 'BLACK',
					positions: ["B1","B2","C3","D2","D3","E2","F1","F2"]
				},
				{
					mark: 'WHITE',
					positions: ["A1","A2","A3","B3","C4","D4","E3","E4","F3","G1","G2","G3"]
				}
			],
			"fig7": [
				{
					mark: 'BLACK',
					positions: ["B1","B2","B3","C3","D3","E3","F1","F2","F3","D1"]
				},
				{
					mark: 'WHITE',
					positions: ["A1","A2","A3","A4","B4","C4","D4","E4","F4","G1","G2","G3","G4","C2","E2"]
				}
			],
			"bamboo": [
				{
					mark: 'BLACK',
					positions: ["C2","C3","E2","E3"]
				},
				{
					mark: 'WHITE',
					positions: ["B2","C1","D1","D4","E4"]
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