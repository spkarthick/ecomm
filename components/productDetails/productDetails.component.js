(function(){
	var module = angular.module("productDetails");
	
	module.component("productdetails", {
		templateUrl: "components/productDetails/productDetails.html",
		controller: "productDetailsController",
		controllerAs: "vm"
	});
})();