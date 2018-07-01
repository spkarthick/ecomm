(function(){
	
	var module = angular.module("custom");
	
	module.controller("customController", ["customService", "labelService", "cart", function(customService, labelService, cart) {
		var vm = this;
		vm.name = "custom";
        vm.labelService = labelService; 
        vm.cart = cart;
	}]);
	
})();