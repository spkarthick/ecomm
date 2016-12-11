(function(){
	
	var module = angular.module("home", ["ui.router"]);
	
	module.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state({
			name: "home",
			url: "/home",
			template: "<home products='vm.products'></home>",
            resolve: {
                products: ["shopService", function(shopService){
                    return shopService.getProducts();
                }]
            },
            controller: ["products", function(products){
                var vm = this;
                vm.products = products;
            }],
            controllerAs: "vm",
		});
        $urlRouterProvider.otherwise("/home");
	}]);
	
	
})();