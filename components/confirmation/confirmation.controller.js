(function(){
	
	var module = angular.module("confirmation");
	
	module.controller("confirmationController", ["confirmationService", function(confirmationService) {
		var vm = this;
		vm.name = "confirmation";
	}]);
	
})();