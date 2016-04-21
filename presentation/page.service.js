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
						description: 'http://senseis.xmp.net/',
						height: 200			
					},
					{
						path: 'goban-usgo.jpg',
						description: 'http://usgo.org',
						height: 200					
					},
					{
						path: 'go-table-ultraboardgames.jpg',
						description: 'http://ultraboardgames.com/',
						height: 200						
					}
				],				
				text: [
					'A presentation by Rob Fitzgerald',
					'CSCI 5408: Graph Theory with Dr. Ellen Gethner',
					'University of Colorado Denver, April 21, 2016'
				],
				math: [
				// '`"keyboard navigation: n m b e r p"`'
					// '`"keyboard navigation"`',
					// '`"m: page up"`',
					// '`"n: page down"`',
					// '`"b: beginning"`',
					// '`"e: end"`',
					// '`"r: refresh"`',
					// '`"p: previous"`'
				]
			}),
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///   BENSON: DEFINITIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			new Page({
				title: 'Introduction',
				image: [
					{
						path: 'GoPainting.jpg',
						description: 'http://apptimize.com/blog/2014/04/analytics-and-go/',
						height: 200
					}
				],
				text: [
					'"Go is a two-person perfect information game. Two players alternatively place a black and a white stone on some empty intersection of a 19 by 19 grid. Placed stones are never moved, but may be removed (called capture or killed) if they are completely surrounded. Basically every empty intersection is a legal move point.',
					'"A Go game normally runs over 200 moves. Each turn offers about 250 choices of legal plays on average. Because of this high branching factor and difficult positional understanding, Go is considered a most challenging game for the machine."[CHEN]'
				]
			}),
			new Page({
				title: 'Introduction',
				board: boardService.ko,
				boardSize: 5,
				text: [
					'There are two major exceptions in the rules. If playing a stone would return us to a previous board configuration, it is called Ko (example above). That is not allowed, as it would introduce infinitely long games.',
					'If a stone is played that is completely surrounded when it hits the board, it is called suicide. That is also not allowed.',
				]
			}),
			new Page({
				title: 'Introduction',
				text: 'It takes at a minimum 4 stones to surround a stone. The earliest point in the game that this can possibly occur is at the 7th move, if black captures the first place white stone.',
				math: [
					'`"This means we know the branching factor of the first 7 moves, before a capture is possible:"`',
					'`361^(360^(359^(358^(357^(356^355))))) = "...well, I tried to compute it.."`'
				]			
			}),
			new Page({
				title: 'Introduction',
				text: [
					'In Japan, this game is called Go. In China, it is Weiqi. In Korea, it is Baduk.',
					'The oldest surviving reference to Weiqi in China is in a passage of Confucius\' Analects, in 6th century B.C.',
					'Encyclopedia Britannica suggests the game may date back to the 2nd millenium B.C.[BRIT]',
					'',
				]
			}),
			new Page({
				title: 'Introduction',
				text: [
					'My research proposal was to find novel examples of graph theoretical models of the game of Go, and to present them here, alongside _any models I could create on my own_.',
					'Nice dream. But, I achieve my first goal, by tracing back through more recent papers to a common reference paper from 1976, which I will present here.'
				]
			}),
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///   BENSON: DEFINITIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			new Page({
				title: 'A question',
				board: boardService.illegalBoard,
				boardSize: 5,
				text: [
					'Based on the rules we know so far, what can we say about this configuration?'
				]
			}),
			new Page({
				title: 'Another question',
				board: boardService.safeIsBetter,
				boardSize: {x:8,y:4},
				text: [
					'What about this board? Can you infer anything about which player has the stronger position?',
					'Can we say anything about which player\'s pieces have a likelyhood to survive the game?',
					'Let\'s start piecing together some tools that will help us answer this question.'
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
					'`cc "border" = R \\\\ Int(R)`'
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
					'`"border" = R \\\\ Int(R) " intersections on R that are not interior"`',
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
					'`if R nn E sube L(b) => H(R,b)`'
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
					'`if R nn E sube L(b) => H(R,b)`'
				]			
			}),
			new Page({
				title: 'Another Healthy Example',
				board: boardService.bamboo,
				boardSize: {x:6,y:5},
				text: [
					'A Bamboo Joint (Take Fu)',
					'"The name, like the \'knuckle\' on a stick of bamboo, comes from the strength of the connection. It is normally impossible to cut through it. Note that this shape doesn\'t normally occur without neighbouring enemy stones. The value of the bamboo joint depends largely on the context." [SENSEI]'
				]
			}),
			new Page({
				title: 'Definition: Neighboring blocks',
				board: boardService.neighbor,
				boardSize: 5,
				text: [
					'NB(R) is the set of blocks neighboring region R.',
					'let _R_ be the black-enclosed region at A1. Then the stone at E5 is not its neighbor, but, all other black stones are.'
				],
				math: '`NB(R)={b|Ext(b)nnR!=O/}`'
			}),
			new Page({
				title: 'Definition: Vital',
				board: boardService.vital,
				boardSize: 4,
				text: [
					'If R is healthy for b, and all blocks neighboring R are in X, then R is _vital_ to b in X.'
				],
				math: [
					'`"Let "X" be a set of "x"-blocks with "b in X`',
					'`if H(R,b) ^^ NB(R) sube X => V(R,b,X)`'
				]
			}),
			new Page({
				title: 'Definition: Unconditionally Alive',
				text: 'Let X be a set of X-blocks such that all b in X have two distinct vital regions. Then X is unconditionally alive.',
				math: [
					'`if EE R_1,R_2", " R_1 != R_2 ", "X sube B(x)", such that " b in X, V(R_i,b,x), i=1,2`',
					'`=> X " is unconditionally alive."`'
				]
			}),
			new Page({
				title: 'Case 1',
				text: 'Which properties does this board have?',
				board: boardService.aliveCaseOne,
				boardSize: {x:11,y:4},
				math: [
					'`bb "Healthy: " if R nn E sube L(b) => H(R,b)`',
					'`bb "Vital: " if H(R,b) ^^ NB(R) sube X => V(R,b,X)`',
					'`bb "Alive: " if EE R_1,R_2", " R_1 != R_2 ", "X sube B(x)", such that " b in X, V(R_i,b,x), i=1,2`',
					'`=> X " is unconditionally alive."`',
					'`"(R is a small x-enclosed region)"`'
				]
			}),
			new Page({
				title: 'Case 1 Answer',
				board: boardService.aliveCaseOne,
				boardSize: {x:11,y:4},
				text: [
					'from top to bottom, left to right, numbering black stone blocks 1,2, and 3:',
					'The two black-enclosed regions are healthy. Both regions are vital to the large block of black stones, but for the single black stones, only one region is vital to each. Therefore, the three blocks b in X for the two black-enclosed regions are not unconditionally alive.'
				],
				math: [
					'`H(R_1,b_1),H(R_1,b_2),H(R_2,b_1),H(R_2,b_3)`',
					'`V(R_1,b_1,X),V(R_1,b_2,X),V(R_2,b_1,X),V(R_2,b_3,X)`',
					'`"All blocks in X do not have two distinct vital regions."`'
				]
			}),
			new Page({
				title: 'Case 2',
				text: 'Which properties does this board have?',
				board: boardService.aliveCaseTwo,
				boardSize: {x:11,y:5},
				math: [
					'`bb "Healthy: " if R nn E sube L(b) => H(R,b)`',
					'`bb "Vital: " if H(R,b) ^^ NB(R) sube X => V(R,b,X)`',
					'`bb "Alive: " if EE R_1,R_2", " R_1 != R_2 ", "X sube B(x)", such that " b in X, V(R_i,b,x), i=1,2`',
					'`=> X " is unconditionally alive."`',
					'`"(R is a small x-enclosed region)"`'
				]
			}),
			new Page({
				title: 'Case 2 Answer',
				text: [
					'black has one block which has three vital regions and is most definitely alive.'
				],
				board: boardService.aliveCaseTwo,
				boardSize: {x:11,y:5},
				math: [
					''
				]
			}),
			new Page({
				title: 'Case 3',
				text: 'Which properties does this board have?',
				board: boardService.aliveCaseThree,
				boardSize: {x:10,y:5},
				math: [
					'`bb "Healthy, Vital, Alive"`'
				]
			}),
			new Page({
				title: 'Case 3 Answer',
				text: [
					'',
					'This situation is interesting as it is not "alive" for either player, and yet neither player can move without sacrificing its own pieces. It is called seki.',
					'Seki, a Japanese go term adopted into English, means mutual life. In its simple form, it is a sort of symbiosis where two live groups share liberties which neither of them can fill without dying.[SENSEI]'
				],
				board: boardService.aliveCaseThree,
				boardSize: {x:10,y:5},
				math: [
					'``'
				]
			}),	
			new Page({
				title: 'Another take on board representation',
				text: [
					'Our next set of ideas comes much later, and provides another novel way to identify life.',
					'We will build from our board another entire board representation.',
					'Intuition: if a _block_ is an equivalence relation, then why can\'t we depict the board as a graph of blocks? Would this provide any added benefit?'
				]
			}),		
			new Page({
				title: 'Definition: Common Fate Graph [GRAEPEL]',
				text: [
					'Blocks of the same color that belong to the same chain will always have a _common fate_.',
					'We will transform our board by way of a transform function ```T()```:',
				],
				math: [
										'`"Let " B = " our board, " P = V(B) and E = E(B)`',
										'`"Given two nodes " p,p\' in P " that are neighbors " {p,p\'} sube N(p) uu N(p\') ","`',
										'`"and that have the same non-empty label from " P ", perform the following transformation:"`',
										'`P |-> P \\\\ {p\'} " to melt the node p\' into p"`',
										'`E |-> (E \\\\ {{p\',p\'\'} in E }) uu {{p,p\'\'} : {p\',p\'\'} in E} " to connect the remaining node p to those nodes p\'\' formerly connected to p\'."`'
				]
			}),
			new Page({
				title: 'Question for the jury',
				text: [
					'Did he just spell out **edge contraction**?',
					'(like, G\' = G * e ?)'
				],
				math: '(if not, we will skip the next slide)'
			}),
			new Page({
				title: 'Common Fate Graph by Edge Contraction',
				text: [
					'Our transform function ```T()``` can be defined as:'
				],
				math: [
					'`"In our board " B " For each state in " gamma ", for each block " b ", for each intersection i,"`',
					'`AA j in N(i),`',
					'`B\' = B ** ij`',
					'`"..should result in a graph where all intersections that were neighbors have been collapsed into a single intersection."`'
				]
			}),
			new Page({
				title: 'Common Fate Graph',
				image: [
					{
						path: 'learningOnGraphs-fig1.png',
						description: '[GRAEPEL]'
					}
				],
				text: [
					'A Common Fate graph derived from a board.'
				]
			}),
			new Page({
				title: 'Conclusion',
				board: boardService.goGetEm,
				boardSize: {x:11,y:5},
				text: [
					'Mapping Go to Graph Theory works without much struggle. This ancient game has interesting mathematical properties, and research in the study of Graph-based representation of Go is ongoing.'
				]
			}),
			new Page({
				title: 'Conclusion',
				text: [
					'If you enjoyed this presentation, and are interested in learning Go, consider this. From the website of the American Go Foundation, "This ancient proverb contains a profound truth.." [AG]',
					'Step 1: Learn The Basics',
					'Step 2: Lose 100 Games As Quickly As Possible',
					'Step 3: Get Stronger'
				],
				math: [
					'`"a list of online Go game servers can be found here: http://senseis.xmp.net/?GoServers"`'
				]
			}),
			new Page({
				title: 'Modeling Go In A Graph-Theoretic Framework',
				text: [
					'References',
					'[BENSON] David B. Benson. _Life in the Game of Go_. Information Sciences 10, 17-29. 1976.',
					'[CHEN] Ken Chen, Zhixing Chen. _Static analysis of life and death in the game of Go_. Information Sciences 121, 113-134. 1999.',
					'[GRAEPEL] Thore Graepel, Mike Goutrie, Marco Kruger, Ralf Herbrich.  _Learning On Graphs in the Game of Go_.  Proceedings of the Ninth International Conference on Artificial Neural Networks.  Jan 2001.',
					// '[SATO] Masafumi Sato, Koichi Anada, Masayoshi Tsutsumi. A Formulation of "Nakate" by a Graph Model for the Game of Go. 3rd International Conference on Applied Computing and Information Technology/2nd International Conference on Computational Science and Intelligence. 2015.'
					// https://webdocs.cs.ualberta.ca/~games/go/compgo_biblio/compgo_biblio.html
					'[BRIT] Encyclopedia Britannica. "Go (Game)". http://www.britannica.com/topic/go-game.',
					'[SENSEI] Sensei\'s Library. http://www.sensei.xmp.net.',
					'[AG] The American Go Foundation. http://agfgo.org',
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