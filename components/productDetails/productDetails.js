(function(){
	
	var module = angular.module("productDetails", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "productDetails",
			url: "/product/:productId",
			template: "<productDetails></productDetails>"
		});
	}]);
	
	
})();