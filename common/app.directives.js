(function() {
	
	var myApp = angular.module("myApp");
	
	myApp.directive("version", function() {
		return {
			template: "0.0.1"
		};
	});
	
})();