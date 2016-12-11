(function(){
	
	var module = angular.module("footer");
	
	module.controller("footerController", ["footerService", "labelService", function(footerService, labelService) {
		var vm = this;
		vm.name = "footer";
        vm.labelService = labelService;
	}]);
	
})();