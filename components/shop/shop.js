(function(){
	
	var module = angular.module("shop", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "shop",
			url: "/shop",
			template: "<shop products='vm.products'></shop>",
            resolve: {
                products: ["shopService", function(shopService){
                    return shopService.getProducts()
                }]
            },
            controller: ["products", function(products){
                var vm = this;
                vm.products = products;
            }],
            controllerAs: "vm",
		});
	}]);
	
	
})();