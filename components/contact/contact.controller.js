(function(){
	
	var module = angular.module("contact");
	
	module.controller("contactController", ["contactService", "labelService", function(contactService, labelService) {
		var vm = this;
		vm.name = "contact";
        vm.labelService = labelService;
	}]);
	
})();