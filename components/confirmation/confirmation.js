(function(){
	
	var module = angular.module("confirmation", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "confirmation",
			url: "/confirmation",
			template: "<confirmation></confirmation>",
		});
	}]);
	
	
})();