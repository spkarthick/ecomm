(function(){
	
	var module = angular.module("shop");
	
	module.controller("shopController", ["$filter", "shopService", "labelService", function($filter, shopService, labelService) {
		var vm = this;
		vm.name = "shop";
        vm.labelService = labelService;
	}]);
	
})();