(function() {
	
	angular
		.module('presentation')
		.factory('boardService', [boardService]);

	function boardService() {
		return {
			"empty": [],
			"ko": [
				{
					mark: 'BLACK',
					positions: ["B3","C4","C2","D3"]
				},
				{
					mark: 'WHITE',
					positions: ["B2","C1","D2"]
				}			
			],
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
					positions: ["C4","C5","E4","E5","D3"]
				},
				{
					mark: 'WHITE',
					positions: ["B4","C3","D2"]
				}
			],
			"neighbor": [
				{
					mark: 'BLACK',
					positions: ["A2","B2","B1","C1","D1","D2","D3","D4","C4","B4","C5","E5"]
				},
				{
					mark: 'WHITE',
					positions: []
				}
			],
			"vital": [
				{
					mark: 'BLACK',
					positions: ["A2","B1","B2","C1","D1","D2","D3","D4"]
				},
				{
					mark: 'WHITE',
					positions: ["B3","A4","C4","A3","C2","C3"]
				}
			],
			"aliveCaseOne": [
				{
					mark: 'BLACK',
					positions: ["B1","B2","B3","C3","D3","E3","F3","G3","H3","I3","J3","J2","J1","D1","F1","F2","H1"]
				},
				{
					mark: 'WHITE',
					positions: ["A1","A2","A3","A4","B4","C4","D4","E4","F4","G4","H4","I4","J4","K4","K3","K2","K1","C2","E2","G2","I2"]
				}
			],
			"aliveCaseTwo": [
				{
					mark: 'BLACK',
					positions: ["A1","A2","A3","A4","A5","B1","B5","C1","C5","D1","D5","E1","E2","E3","E4","F2","G2","H2","I1","I2","I3","J1","J3","K1","K2","K3"]
				},
				{
					mark: 'WHITE',
					positions: ["B2","B3","D4","E5","F5","F4","F3","H3","H4","I4","J4","K4","H1"]
				}
			],
			"aliveCaseThree": [
				{
					mark: 'WHITE',
					positions: ["A4","B4","B5","C4","D3","E3","E4","F4","F5","G4","H4","H5"]
				},
				{
					mark: 'BLACK',
					positions: ["A3","B3","C3","C2","D2","D4","D5","E2","F2","F3","G3","H3","I3","I4","I5"]
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