(function(){
	
	var module = angular.module("shop", ["ui.router","angularLazyImg"]);
	
	module.config(["$stateProvider","$urlRouterProvider","lazyImgConfigProvider", function($stateProvider, $urlRouterProvider, lazyImgConfigProvider) {
		$stateProvider.state({
			name: "shop",
			url: "/shop",
			template: "<shop></shop>"
		});
		$urlRouterProvider.otherwise("/shop");
		lazyImgConfigProvider.setOptions({ 
			container: angular.element("body")
		});
	}]);
	
})();