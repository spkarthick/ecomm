(function(){
	
	var module = angular.module("shop", ["ui.router"]);
	
	module.config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state({
			name: "shop",
			url: "/shop",
			template: "<shop></shop>"
		});
		$urlRouterProvider.otherwise("/shop");
	}]);
	
})();