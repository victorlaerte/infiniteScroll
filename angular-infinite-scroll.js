var app = angular.module('myApp', []);

app.directive('ngInfiniteScroll', [function(){
  return {
	  restrict: 'A',
	  scope: {
		callback: '&',
		offset: '='
	  },
	  link: function (scope, element, attrs) {
        var element = element[0];
        var lock = false;
        
        scope.offset = scope.offset ? scope.offset : 0;
        
        $(element).bind('scroll', function () {

        	if ((element.scrollTop + element.offsetHeight >= (element.scrollHeight - scope.offset)) && !lock) {
            	
        		lock = true;
            	
            	scope.callback().then(function(){
            		lock = false;
            	});
            }
        });
    }
  }
}
]);