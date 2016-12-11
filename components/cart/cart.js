(function(){
	
	var module = angular.module("cart", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "cart",
			url: "/cart",
			template: "<cart></cart>",
		});
	}]);
	
	
})();