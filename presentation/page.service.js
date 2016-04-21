(function() {

	angular
		.module('presentation')
		.factory('pageService', ['boardService', pageService])

	function pageService(boardService) {
		var pageService = [
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///		TITLE PAGE 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			new Page({
				title: 'Modeling Go In A Graph-Theoretic Framework',
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///   BENSON: DEFINITIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			new Page({
				title: 'A question',
				board: boardService.illegalBoard,
				boardSize: 9,
				text: [
					'Based on these simple rules, what can we say about this configuration?'
				]
			}),
			new Page({
				title: 'Unconditional Life',
				text: [
					'The definition of unconditional life in Go is due to David B. Benson. In his 1976 paper "Life in the Game of Go" [BENSON], he defined the Graph Theoretical concepts which allow us to recognize unconditional life. Many of the definitons and examples and text in this presentation are based on his paper.'
				]
			}),
			new Page({
				title: 'Definition: Board',
				board: boardService.empty,
				boardSize: {x:3,y:2},
				text: [
					'A _board_ is a M X N array of intersections.  Each intersection is a vertex of the board graph. There is an edge between two intersections in the case either the x coordinates are equal and the y coordinates differ by one, or when y coordinates are equal and the the x coordinates differ by one.',
					'This is an M X N _board_ graph where M = 3, N = 2.'
				]
			}),
			new Page({
				title: 'Definition: Arrangement',
				text: ['An _arrangement_ is a function ```a()``` from the set of intersections I to the set of possible states of each intersection:'],
				math: [
					'`gamma = {black,white,empty}`',
					'`a: I |-> gamma`'
				]
			}),
			new Page({
				title: 'Definition: Arrangement',
				text: [
					'The set of intersections in state x is denoted, for each x in gamma, the inverse of the arrangement function produces the set of all intersections in state x.'
				],
				math: [
					'`{x|x in gamma,a^(-1)(x)}`'
				]
			}),
			new Page({
				title: 'Definition: State-Connected',
				text: ['Two intersections, not necessarily distinct, are _state-connected_ if they are in the same state and there is a path between them, possibly of length zero, such that every intersection in the path is in the same state.']
			}),
			new Page({
				title: 'Definition: Block',
				text: [
					'_State-connectedness_ is a equivalence relation partitioning _I_ (the set of all _board_ intersections) into _blocks_.',
					'Let B(x) be the set of blocks for state x, i.e., every intersection in every _block_ of B(x) is in state x.'
				]
			}),
			new Page({
				title: 'Definition: Block',
				board: boardService.fig2,
				boardSize: {x:5,y:3},
				text: ['An arrangement of two black, one white, and four empty blocks.'],
				math: [
					'`a^(-1)(white) = {C3,C2}`',
					'`a^(-1)(black) = {A2,B3,B2,B1,D2,D1}`',
					'`a^(-1)(empty) = {A3,A1,C1,D3,E3,E2,E1}`'
				]
			}),
			new Page({
				title: 'Definition: Region',
				board: boardService.fig2,
				boardSize: {x:5,y:3},
				text: [
					'A _region_ _R_ is any set of intersections forming a connected subgraph of the board. For every pair of intersections in a _region_, there is a path between them lying entirely within the region.',
					'The entire graph of figure 2 is a _region_.'
				]
			}),
			new Page({
				title: 'Definition: Region',
				board: boardService.fig2,
				boardSize: {x:5,y:3},
				text: [
					'An intersection is in the _interior_ of a region _R_ if every adjacent intersection is in the region.',
					'_Interior_ is presented as ```Int(R)```',
					'in the example below, the _interior_ of the selected _region_ is empty.'
				],
				math: [
					'`R = {A2,B3,B2,B1}`',
					'`Int(R) = O/`'
				]
			}),			
			new Page({
				title: 'Definition: Region',
				board: boardService.fig2_interior,
				boardSize: {x:5,y:3},
				text: [
					'An example of an _interior_ of a _region_ which is not empty.'
				],
				math: [
					'`R = {A2,B3,B2,B1,C2}`',
					'`Int(R) = {B2}`'
				]
			}),	
			new Page({
				title: 'Definition: Region',
				board: boardService.fig2_interior,
				boardSize: {x:5,y:3},
				text: [
					'If an intersection is not in the _interior_ of a _region_, then it is a part of the _border_.'
				],
				math: [
					'`R = {A2,B3,B2,B1,C2}`',
					'`Int(R) = {B2}`',
					'`cc "border" = R // Int(R)`'
				]
			}),			
			new Page({
				title: 'Definition: Liberties',
				board: boardService.fig2,
				boardSize: {x:5,y:3},
				text: [
					'The _liberties_ of a _block_ are the empty intersections adjacent to intersections in the _block_.',
					'_Recall that a block is a state-connected set of intersections. That is, there exists a path between all intersections of the block where each intersection of the path is in the same state._',
					'_Liberties_ are presented as ```L(b)```'
				],
				math: [
					'`b = {A2,B3,B2,B1}`',
					'`L(b) = {A3,A1,C1}`'
				]
			}),				
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///		BENSON: RULES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			new Page({
				title: 'Game Rules',
				text: [
					'"A _game_ is a series of _arrangements_ subject to the _rules_."',
					'Go\'s rules are very few. **Rule 0**: Player alternation, **Rule 1**: Capture, **Rule 2**: No suicide.'
				],
				math: ['`"Note: There are a few additional rules which account for special cases,',
				' such as the infinite loop of Ko. We will not be considering those rules here, ',
				'for they are not needed to describe unconditional life."`']
			}),
			new Page({
				title: 'Rule 0: Player Alternation',
				text: [
					'This rule states that the game begins with an empty board, and that black and white alternate by placing stones on empty intersections or by choosing to pass.'
				],
				math: [
					'`AA i in I " , " a_0(i) = empty " , " a_0(I) = {empty}`',
					'`AA k " , " a_(2k) " and " a_(2k+1)`',
					'differ by the addition of at most one black stone and the deletion of white stones subject to Rule 1',
					'`AA k " , " a_(2k+1) " and " a_(2k+2)`',
					'differ by the addition of at most one white stone and the deletion of black stones subject to Rule 1.'
				]
			}),
			new Page({
				title: 'Rule 1: Capture',
				board: boardService.capture,
				boardSize: {x:5,y:5},
				text: [
					'If a _block b_ of _x_-stones has exactly one _liberty_, and the other player plays their stone in this liberty, then the block _b_ is captured and removed from the board.',
				],
				math: [
					'`a_k " is the arrangement before capture, " x " is the stone color (state) of block b"`',
					'`a_(k+1) (I - (b uu L(b))) = a_k (I-(b uu L(b)))`,   ',
					'`a_(k+1) (b) = {empty}`,   ',
					'`a_(k+1) (L(b)) = {bar x}.`'
					]
			}),
			new Page ({
				title: 'Rule 2: No Suicide',
				board: boardService.noSuicide,
				boardSize: 5,
				text: [
					'If a _block_ _b_ of _x_-stones has exactly one _liberty_, and there is no opponent _block_ which has exactly one _liberty_ at the same intersection, then _x_ cannot play at that _liberty_.'
				],
				math: [
					'`"put another way, for "x"-stones forming block b,',
					'`if #L(b)=1 ", and there is no " bar x " block " b\' " such that " L(b)=L(b\')`',
					'`=> x " cannot play at " L(b).`'
				]
			}),
			new Page ({
				title: 'A question',
				board: boardService.noSuicideFlaw,
				boardSize: 5,
				text: [
					'Again: If a _block_ _b_ of _x_-stones has exactly one _liberty_, and there is no opponent _block_ which has exactly one _liberty_ at the same intersection, then _x_ cannot play at that _liberty_.',
					'What about on this board.  Can white play C3?'
				],
				math: [
					'`if #L(b)=1 ", and there is no " bar x " block " b\' " such that " L(b)=L(b\') => x " cannot play at " L(b).`'
				]
			}),
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///		BENSON: UNCONDITIONAL LIFE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			new Page({
				title: 'Safe',
				board: boardService.fig3,
				boardSize: {x:5,y:3},
				text: [
					'Intuition: if a block b at arrangement k will still be on the board no matter what the opponent does over the duration of the game, then, it is _safe_.',
					'The block of black stones above is safe, as white may not play A1 or C1 due to the no suicide rule.',
					'We are building up to a definition of _safe_, which will require additional definitions.'
					]
			}),
			new Page({
				title: 'Recap of definitions',
				math: [
					'`a() " an arrangement of the board"`',
					'`gamma = {black,white,empty} ", the \'states\' or stone colors"`',
					'`I " the intersections on the board"`',
					'`b " a block of state-connected intersections"`',
					'`R " a region, where "Int(R) " and " Ext(R) " are functions"`',
					'`"border" = R // Int(R) " intersections on R that are not interior"`',
					'`L(b)=Ext(b) nn E " liberties of block b"`',					
				]
			}),
			new Page({
				title: 'Definition: Small x-enclosed region',
				board: boardService.fig6,
				boardSize: {x:7,y:4},
				text: ['A _small x-enclosed region R_ is a region such that'],
				math: [
					'`"No " x "-stone is in " R, x !in a(R)`',
					'`R " is surrounded by "x"-stones ", a(Ext(R))={x}`',
					'`"Each intersection of the region is on the border or contains an " bar x"-stone or both"`',
					'`"hence, " a(Int(R))sube{bar x}.`'
				]
			}),
			new Page({
				title: 'Definition: Healthy',
				board: boardService.fig6,
				boardSize: {x:7,y:4},
				text: [
					'A region _R_ is _healthy_ for block _b_, if _R_ is a _small x-enclosed region_ such that every empty intersection in _R_ is a liberty of _b_.',
					'The small black-enclosed region above is not healthy for either black block.'
				],
				math: [
					'`R nn E sube L(b)`'
				]
			}),
			new Page({
				title: 'Definition: Healthy',
				board: boardService.fig7,
				boardSize: {x:7,y:4},	
				text: [
					'The small black-enclosed region above is healthy for both black blocks.',
					'Is it also safe?'
				],
				math: [
					'`R nn E sube L(b)`'
				]			
			}),
			new Page({
				title: 'Another Healthy Example',
				board: boardService.bamboo,
				boardSize: {x:5,y:4},
				text: [
					'A Bamboo Joint (Take Fu)',
					'"The name, like the \'knuckle\' on a stick of bamboo, comes from the strength of the connection. It is normally impossible to cut through it. Note that this shape doesn\'t normally occur without neighbouring enemy stones. The value of the bamboo joint depends largely on the context." [SENSEI]'
				]
			}),
			new Page({
				title: 'Definition: Neighboring blocks',
				text: ''
			}),
			new Page({
				title: 'Modeling Go In A Graph-Theoretic Framework',
				text: [
					'References',
					'[BENSON] David B. Benson. Life in the Game of Go. Information Sciences 10, 17-29. 1976.',
					'[SENSEI] Sensei\'s Library. www.sensei.xmp.net/?BensonDefinitionOfUnconditionalLife.',
					'[CHEN] Ken Chen, Zhixing Chen. Static analysis of life and death in the game of Go. Information Sciences 121, 113-134. 1999.',
					'[GRAEPEL] Thore Graepel, Mike Goutrie, Marco Kruger, Ralf Herbrich.  Learning On Graphs in the Game of Go.  Proceedings of the Ninth International Conference on Artificial Neural Networks.  Jan 2001.',
					'[SATO] Masafumi Sato, Koichi Anada, Masayoshi Tsutsumi. A Formulation of "Nakate" by a Graph Model for the Game of Go. 3rd International Conference on Applied Computing and Information Technology/2nd International Conference on Computational Science and Intelligence. 2015.'
				]
			}),
			new Page({
				title: 'Modeling Go In A Graph-Theoretic Framework',
				text: [
					'Resources',
					'[Angular.js](https://angularjs.org): Web application framework',
					'[Angular Material](https://material.angularjs.org): Web UI framework',
					'[JGOBoard](https://jgoboard.com): Photorealistic Go board JavaScript library',
					'[MathJax.js](https://www.mathjax.org): Mathematics typesetting JavaScript library',
					'[ASCIIMath](https://asciimath.org): Mathematics markup language'
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
		this.title = opts.title || '';
		this.board = opts.board || null;
		this.boardSize = opts.boardSize || null;
		this.text = shouldBeArray(opts.text);
		this.math = shouldBeArray(opts.math);
		this.image = shouldBeArray(opts.image);
	}

	function shouldBeArray(input) {
		return (Array.isArray(input) ? input : [input])
	}

})();