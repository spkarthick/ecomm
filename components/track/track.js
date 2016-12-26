(function(){
	
	var module = angular.module("track", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "track",
			url: "/track",
			template: "<track></track>",
		});
	}]);
	
	
})();