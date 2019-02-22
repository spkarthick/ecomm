(function(){
	
	var module = angular.module("shop");
	
    module.controller("shopController", ["$filter", "$rootScope", "shopService", "labelService", function($filter, $rootScope, shopService, labelService) {
		var vm = this;
		vm.name = "shop";
		vm.labelService = labelService;
		vm.productsLoading = true;
		shopService.getProducts().then(function (products) {
		    vm.products = products.data;
			vm.images = products.included.files;
			vm.categories = products.included.categories;
			vm.selectedCategory = "Personalize your Nutrients";
		    vm.productsLoading = false;
		});
	}]);
	
	module.filter("productFilter", ["$filter", function($filter) {
		return function(data, query) {
			if(data) {
				if(query !== "All") {
					var filtered = [];
					filtered = data.filter(function(product) {
						return product.relationships.categories.data[0].id === query;
					});
					return filtered;
				}
				return data;
			}
			else {
				return [];
			}
		}
	}]);
	
})();