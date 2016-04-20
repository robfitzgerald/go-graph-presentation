(function() {

	angular
		.module('presentation')
		.factory('pageService', ['boardService', pageService])

	function pageService(boardService) {
		var pageService = [
////////////////////// TITLE PAGE /////////////////////////////////////////////
			new Page({
				title: '',
				image: [
					{
						path: 'goban-sensei.jpg',
						description: 'http://senseis.xmp.net/'				
					},
					{
						path: 'goban-usgo.jpg',
						description: 'http://usgo.org'						
					},
					{
						path: 'go-table-ultraboardgames.jpg',
						description: 'http://ultraboardgames.com/'						
					}
				],				
				text: [
					'A presentation by Rob Fitzgerald',
					'CSCI 5408: Graph Theory with Dr. Ellen Gethner',
					'University of Colorado Denver, April 21, 2016'
				]
			}),
///////////////////////////////////////////////////////////////////////////////
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
					'`a_(k+1) (I - (b uu L(b))) = a_k (I-(b uu L(b)))`,   ',
					'`a_(k+1) (b) = {empty}`,   ',
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
					'The black block is safe, since white may not play in ' +
					'either of black\'s liberties due to the "no suicide" rule.'
					],
				math: []
			}),
			new Page({
				text: [
					'[MS01] Thore Graepel, Mike Goutrie, Marco Kruger, Ralf Herbrich.  Learning On Graphs in the Game of Go.  Proceedings of the Ninth International Conference on Artificial Neural Networks.  Jan 2001.   http://research.microsoft.com/apps/pubs/default.aspx?id=65629',
					'[SAT15]   '
				]
			})
		];

		return pageService;
	}

	/**
	 * Page Constructor
	 * @param {Object} opts        - page object. this 'Constructor' is really just schema validation.
	 */
	function Page(opts) {
		this.title = opts.title || 'Modeling Go In A Graph-Theoretic Framework';
		this.board = opts.board || null;
		this.boardSize = opts.boardSize || null;
		this.text = opts.text || '';
		this.math = opts.math || '';
		this.image = opts.image || [];
	}

})();