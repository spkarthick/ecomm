(function(){
	var module = angular.module("checkout");
	
	module.component("checkout", {
		templateUrl: "components/checkout/checkout.html",
		controller: "checkoutController",
		controllerAs: "vm",
		bindToController: true
	});
})();