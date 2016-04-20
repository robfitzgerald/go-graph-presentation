(function() {

	var MARK = JGO.MARK
		, SGFHash = {
			a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8,
			j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16,
			r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
		}
		, SGFLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');



	angular
		.module('presentation')
		.controller('presentPageController', ['$scope', 'pageService', presentPageController])
		.directive('presentPage', ['pageService', presentPage])


	function presentPage(pageService) {
		return {
			restrict: 'E',
			scope: {
				number: '=number'
			},
			templateUrl: '/presentation/page.html',
			controller: 'presentPageController',
			controllerAs: 'page',
			link: function(scope, element, attributes) {
				var content = pageService[scope.number]
					, board = content.board // || [{mark: '', positions: []}];
					, x, y;

				if (Number.isInteger(content.boardSize)) {
					x = y = content.boardSize;
				} else if (!!content.boardSize && !!content.boardSize.x && !!content.boardSize.y) {
					x = content.boardSize.x;
					y = content.boardSize.y;
				} else {
					// no board.
				}

				if (board) {
						var jboard = new JGO.Board(x, y)
						board.forEach(function(player) {
						player.positions.forEach(function(position) {
							var coordinate = new JGO.Coordinate(parseCol(position, y));
							jboard.setType(coordinate, JGO[player.mark])
						})
					})

					var jsetup = new JGO.Setup(jboard, JGO.BOARD.large);

					jsetup.create('board', function(canvas) {
					  canvas.addListener('click', function(coord, ev) {
					        var type = jboard.getType(coord);
					        type = (type == JGO.WHITE) ? JGO.CLEAR : type + 1; // cycle
					        jboard.setType(coord, type);
					    });
					});
				}
			}
		}
	}

	function presentPageController($scope, pageService) {
		var vm = this
			, pageNumber = $scope.number
			, pageDetails = pageService[pageNumber];
		vm.title = pageDetails.title;
		vm.text = pageDetails.text;
		vm.math = pageDetails.math;
		vm.image = pageDetails.image;
		setTimeout(function () {
    	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		}, 5);
	}

	function parseCol(position, colHeight) {
		var first = position.substr(0,1)
			, second = position.substr(1)
		if (!Number.isInteger(Number.parseInt(second))) {
			return position;
		} else {
			return first + SGFLetters[(colHeight - Number.parseInt(second))];
		}
	}

})();