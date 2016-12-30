(function(){
	var module = angular.module("confirmation");
	
	module.component("confirmation", {
		templateUrl: "components/confirmation/confirmation.html",
		controller: "confirmationController",
		controllerAs: "vm"
	});
})();