(function(){
	
	var module = angular.module("productDetails");
	
	module.controller("productDetailsController", ["$filter", "$scope", "$rootScope", "$stateParams", "productDetailsService", "labelService", "moltin", "cart", "shopService", function ($filter, $scope, $rootScope, $stateParams, productDetailsService, labelService, moltin, cart, shopService) {
		var vm = this;
		vm.name = "productDetails";
        vm.labelService = labelService;
        vm.quantity = 1;
        vm.cart = moltin.Cart.Contents();
        vm.loading = false;
        vm.product = shopService.getProducts($stateParams.productId);
        moltin.Cart.InCart(vm.product.id, function (item) {
            if (item.in_cart) {
                vm.cartItem = angular.copy(vm.product);
                vm.quantity = vm.getExistingItem(vm.product).quantity;
            }
            $scope.$digest();
        });

        vm.getExistingItem = function (product) {
            for (var i = 0; i < Object.keys(vm.cart.contents).length; i++) {
                if (vm.cart.contents[Object.keys(vm.cart.contents)[i]].id == product.id)
                    return vm.cart.contents[Object.keys(vm.cart.contents)[i]];
            }
            return null;
        }

        vm.getExistingItemId = function (product) {
            for (var i = 0; i < Object.keys(vm.cart.contents).length; i++) {
                if (vm.cart.contents[Object.keys(vm.cart.contents)[i]].id == product.id)
                    return Object.keys(vm.cart.contents)[i];
            }
            return null;
        }

        vm.updateCart = function (product) {
            vm.loading = true;
            if(vm.cartItem)
                moltin.Cart.Update(vm.getExistingItemId(vm.product), {
                    quantity: vm.quantity
                }, function (item) {
                    vm.cart = moltin.Cart.Contents();
                    $rootScope.$broadcast("cartChange", vm.cart);
                    vm.loading = false;
                    $scope.$digest();
                }, function (error) {
                    vm.loading = false;
                });
            else {
                //vm.product.quantity = vm.quantity;
                vm.cartItem = angular.copy(vm.product);
                moltin.Cart.Insert(vm.product.id, vm.quantity, null, function (cart) {
                    vm.cart = moltin.Cart.Contents();
                    $rootScope.$broadcast("cartChange", vm.cart);
                    vm.loading = false;
                    $scope.$digest();
                }, function () {
                    vm.loading = false;
                });
            }
        }
	}]);
	
})();