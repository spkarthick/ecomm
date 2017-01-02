(function(){
	
	var module = angular.module("home", ["ui.router"]);
	
	module.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state({
			name: "home",
			url: "/home",
			template: "<home products='vm.products'></home>"
		});
        $urlRouterProvider.otherwise("/home");
	}]);
	
	
})();