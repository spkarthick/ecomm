(function(){
	var module = angular.module("contact");
	
	module.component("contact", {
		templateUrl: "components/contact/contact.html",
		controller: "contactController",
		controllerAs: "vm"
	});
})();