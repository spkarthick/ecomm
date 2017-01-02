(function(){
	var module = angular.module("home");
	
	module.component("home", {
		templateUrl: "components/home/home.html",
        controller: "homeController",
        controllerAs: "vm",
        bindToController: true
	});
})();