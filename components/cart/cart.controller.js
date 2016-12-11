(function(){
	
	var module = angular.module("cart");
	
	module.controller("cartController", ["cartService", function(cartService) {
		var vm = this;
		vm.name = "cart";
	}]);
	
})();