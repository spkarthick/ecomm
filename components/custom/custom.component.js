(function(){
	var module = angular.module("custom");
	
	module.component("custom", {
		templateUrl: "components/custom/custom.html",
        controller: "customController",
        controllerAs: "vm",
        bindToController: true
	});
})();