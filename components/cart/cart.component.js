(function(){
	var module = angular.module("cart");
	
	module.component("cart", {
		templateUrl: "/components/cart/cart.html",
		controller: "cartController",
		controllerAs: "vm"
	});
})();