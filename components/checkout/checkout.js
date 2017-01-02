(function(){
	
	var module = angular.module("checkout", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "checkout",
			url: "/checkout",
			template: "<checkout></checkout>"
		});
	}]);
	
	
})();