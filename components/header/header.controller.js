(function(){
	
	var module = angular.module("header");
	
	module.controller("headerController", ["headerService", "labelService", "cart", function(headerService, labelService, cart) {
		var vm = this;
		vm.name = "header";
        labelService.getLabels();
        vm.labelService = labelService;
        vm.cart = cart;
	}]);
	
})();