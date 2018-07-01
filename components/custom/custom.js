(function(){
	
	var module = angular.module("custom", ["ui.router"]);
	
	module.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state({
			name: "custom",
			url: "/custom",
			template: "<custom products='vm.products'></custom>"
		});
	}]);
	
	
})();