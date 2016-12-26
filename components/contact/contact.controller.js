(function(){
	
	var module = angular.module("contact");
	
	module.controller("contactController", ["$rootScope", "contactService", "labelService", function ($rootScope, contactService, labelService) {
		var vm = this;
		vm.name = "contact";
		vm.labelService = labelService;
	}]);
	
})();