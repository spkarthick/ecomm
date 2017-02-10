(function(){
	
	var module = angular.module("confirmation", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "confirmation",
			url: "/confirmation/:status",
			template: "<confirmation></confirmation>",
		});
	}]);
	
	
})();