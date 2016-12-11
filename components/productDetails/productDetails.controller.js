(function(){
	
	var module = angular.module("productDetails");
	
	module.controller("productDetailsController", ["$filter", "productDetailsService", "labelService", "cart", function($filter, productDetailsService, labelService, cart) {
		var vm = this;
		vm.name = "productDetails";
        vm.labelService = labelService;
        vm.quantity = 1;
        vm.cartItem = $filter("filter")(cart, {'id': vm.product.id})[0];
        if(vm.cartItem)
            vm.quantity = vm.cartItem.quantity;
        vm.updateCart = function(product) {
            if(vm.cartItem)
                vm.cartItem.quantity = vm.quantity;
            else {
                vm.product.quantity = vm.quantity;
                vm.cartItem = angular.copy(vm.product);
                cart.push(vm.product);
            }
        }
	}]);
	
})();