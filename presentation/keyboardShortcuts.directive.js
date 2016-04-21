// based on a stack overflow answer:
// http://stackoverflow.com/a/15044960/4803266

(function() {

	angular
		.module('presentation')
		.directive('shortcuts', ['$state', '$stateParams', 'pageService', keyboardShortcuts])

		function keyboardShortcuts($state, $stateParams, pageService) {
		  return {
		    restrict: 'E',
		    replace: true,
		    link: function postLink(scope, element, attributes) {
		      angular.element(document).on('keypress', function(e){
		          var key = e.which
		          // console.log('key pressed: ' + key)
		          switch (key) {
		         	  case 109:  // 'm' -> go forward one page
		         	  	var next = Number.parseInt(getCurrentPage()) + 1;
		         	  	if (pageService.length > next) {
		         	  		$state.go('presentation', {pageNumber:next})
		         	  	}
		         	  	break;
	         	  	case 110:  // 'n' -> go back one page
	         	  		var next = Number.parseInt(getCurrentPage()) - 1
	         	  			, lowerBoundedNext = (next >= 0 ? next : 0)
	         	  		$state.go('presentation', {pageNumber:lowerBoundedNext})
	         	  		break;
         				case 98:  // 'b' -> back to the top
	         	  		$state.go('presentation', {pageNumber:0})
	         	  		break;
         				case 114: // 'r' -> refresh
	         	  		$state.reload();
	         	  		break;
         	  		case 101: // 'e' -> end
         	  			$state.go('presentation', {pageNumber:(pageService.length - 1)})
         	  			break;
       	  			case 112: // 'p' -> previous
       	  				console.log('pressed p. previous: ' + scope.previous)
       	  				$state.go('presentation', {pageNumber:scope.previous})
       	  				break;
         			}
         			scope.previous = $stateParams.pageNumber;
		       });
		    }
		  };
		}

	function getCurrentPage() {
		var href = window.location.href
			, paths = href.split('/')
			, pageNumber = 0;
		if (paths.length > 0) 
			pageNumber = paths[paths.length - 1]
		return pageNumber;
	}

})();