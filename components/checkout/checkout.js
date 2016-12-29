(function(){
	
	var module = angular.module("checkout", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "checkout",
			url: "/checkout",
			template: "<checkout states='vm.states'></checkout>",
			resolve: {
			    states: ["checkoutService", function (checkoutService) {
			        return checkoutService.getStates();
			    }]
			},
			controller: ["states", function (states) {
			    var vm = this;
			    vm.states = states;
			}],
			controllerAs: "vm",
		});
	}]);
	
	
})();