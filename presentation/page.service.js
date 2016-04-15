(function() {

	angular
		.module('presentation')
		.factory('pageService', ['boardService', pageService])

	function pageService(boardService) {
		var pageService = [
			new Page({
				title: 'Figure 1',
				board: boardService.empty,
				boardSize: {x:3,y:2},
				text: ['An MxN board graph where M = 3, N = 2.'],
				math: []
			}),
			new Page({
				title: 'Capture',
				board: boardService.capture,
				boardSize: {x:5,y:5},
				text: [],
				math: [
					'`a_(k+1) (I - (b uu L(b))) = a_k (I-(b uu L(b)))`, ',
					'`a_(k+1) (b) = {empty}`, ',
					'`a_(k+1) (L(b)) = {bar x}.`'
					]
			}),
			new Page({
				title: 'Figure 2',
				board: boardService.fig2,
				boardSize: {x:5,y:3},
				text: ['An arrangement of two black, one white, and four empty blocks.'],
				math: []
			}),
			new Page({
				title: 'Figure 3',
				board: boardService.fig3,
				boardSize: {x:5,y:3},
				text: [
					'The black block is safe, since white may not play in', 
					'either of black\'s liberties due to the "no suicide" rule.'
					],
				math: []
			})
		];

		return pageService;
	}

	/**
	 * Page Constructor
	 * @param {Object} opts        - page object. this 'Constructor' is really just schema validation.
	 */
	function Page(opts) {
		if (!opts.hasOwnProperty('board')) {
			throw new TypeError('board is missing')
		} else if (!opts.hasOwnProperty('title')) {
			throw new TypeError('title is missing')
		} else if (!opts.hasOwnProperty('boardSize')) {
			throw new TypeError('boardSize is missing')
		} else if (!opts.hasOwnProperty('text')) {
			throw new TypeError('text is missing')
		} else if (!opts.hasOwnProperty('math')) {
			throw new TypeError('math is missing')
		} else {
			this.title = opts.title;
			this.board = opts.board;
			this.boardSize = opts.boardSize;
			this.text = opts.text;
			this.math = opts.math
		}
	}

})();