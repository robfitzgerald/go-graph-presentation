(function() {

	angular
		.module('presentation')
		.factory('pageService', ['boardService', pageService])

	function pageService(boardService) {
		var pageService = [
			new Page({
				title: 'test page',
				board: boardService.test,
				boardSize: 9,
				text: 'example text that goes with this board so that the people watching the presentation will be mondo impressed and stuff'
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
		} else {
			this.title = opts.title;
			this.board = opts.board;
			this.boardSize = opts.boardSize;
			this.text = opts.text;
		}
	}

})();