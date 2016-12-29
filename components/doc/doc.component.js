(function(){
	var module = angular.module("doc");
	
	module.component("doc", {
		templateUrl: "components/doc/doc.html",
		controller: "docController",
		controllerAs: "vm"
	});
})();