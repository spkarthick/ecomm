(function(){
	
	var module = angular.module("contact", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "contact",
			url: "/contact",
			template: "<contact></contact>",
		});
	}]);
	
	
})();