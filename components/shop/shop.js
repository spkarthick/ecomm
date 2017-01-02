(function(){
	
	var module = angular.module("shop", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "shop",
			url: "/shop",
			template: "<shop></shop>"
		});
	}]);
	
	
})();