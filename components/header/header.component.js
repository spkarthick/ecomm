(function(){
	var module = angular.module("header");
	
	module.component("header", {
		templateUrl: "components/header/header.html",
		controller: "headerController",
		controllerAs: "vm"
	});
})();