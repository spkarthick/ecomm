(function(){
	
	var module = angular.module("checkout", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "checkout",
			url: "/checkout",
			template: "<checkout taxes='vm.taxes' states='vm.states'></checkout>",
			resolve: {
			    taxes: ["checkoutService", function (checkoutService) {
			        return checkoutService.getTaxDetails();
			    }],
			    states: ["checkoutService", function (checkoutService) {
			        return checkoutService.getStates();
			    }]
			},
			controller: ["taxes", "states", function (taxes, states) {
			    var vm = this;
			    vm.taxes = taxes;
			    vm.states = states;
			}],
			controllerAs: "vm",
		});
	}]);
	
	
})();