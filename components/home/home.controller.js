(function(){
	
	var module = angular.module("home");
	
	module.controller("homeController", ["homeService", "labelService", "cart", function(homeService, labelService, cart) {
		var vm = this;
		vm.name = "home";
        vm.labelService = labelService; 
        vm.cart = cart;
	}]);
	
})();