(function(){
	
	var module = angular.module("shop");
	
    module.controller("shopController", ["$filter", "$rootScope", "shopService", "labelService", function($filter, $rootScope, shopService, labelService) {
		var vm = this;
		vm.name = "shop";
		vm.labelService = labelService;
		vm.productsLoading = true;
		shopService.getProducts().then(function (products) {
		    vm.products = products;
		    vm.productsLoading = false;
		});
	}]);
	
})();