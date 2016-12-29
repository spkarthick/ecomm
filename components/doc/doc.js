(function(){
	
	var module = angular.module("doc", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "doc",
			url: "/doc/:document",
			template: "<doc></doc>"
		});
	}]);
	
	
})();