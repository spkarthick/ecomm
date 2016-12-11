(function(){
	
	var module = angular.module("productDetails", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "productDetails",
			url: "/product/:productId",
			template: "<productDetails product='vm.product'></productDetails>",
            resolve: {
                product: ["$filter", "$stateParams", "shopService", function($filter, $stateParams, shopService){
                    return shopService.getProducts().then(function(data){
                        return $filter("filter")(data, {"id": $stateParams.productId})[0];
                    });
                }]
            },
            controller: ["product", function(product){
                var vm = this;
                vm.product = product;
            }],
            controllerAs: "vm",
		});
	}]);
	
	
})();