(function(){
	
	var module = angular.module("productDetails");
	
	module.controller("productDetailsController", ["$filter", "$scope", "$rootScope", "$stateParams", "productDetailsService", "labelService", "moltin", "cart", "shopService", function ($filter, $scope, $rootScope, $stateParams, productDetailsService, labelService, moltin, cart, shopService) {
		
		$scope.$on("$destroy", function() {
			$rootScope.openModal = false;
		});
		var vm = this;
		vm.name = "productDetails";
        vm.labelService = labelService;
        vm.quantity = 1;
        vm.loading = true;
        shopService.getProducts($stateParams.productId).then(function(data) {
			vm.product = data.data;
			vm.images = data.included.files;
			moltin.Cart().Items().then(function(response){
				vm.cart = response.data;
				if (vm.cart.filter(function(item){return item.product_id === $stateParams.productId}).length) {
					vm.cartItem = angular.copy(vm.product);
					vm.quantity = vm.getExistingItem(vm.product).quantity;
				}
				vm.loading = false;
				$scope.$digest();
			});
		});

		vm.openModal = function (id) {
			debugger
			$rootScope.modalImage=$filter("filter")(vm.images,{
				'id': id
			})[0].link.href;
			$rootScope.openModal = true;
		}

        vm.getExistingItem = function (product) {
            for (var i = 0; i < Object.keys(vm.cart).length; i++) {
                if (vm.cart[Object.keys(vm.cart)[i]].product_id == product.id)
                    return vm.cart[Object.keys(vm.cart)[i]];
            }
            return null;
        }

        vm.updateCart = function (product) {
            vm.loading = true;
            if(vm.cartItem)
                moltin.Cart().UpdateItemQuantity(vm.getExistingItem(vm.product).id, vm.quantity).then(function (item) {
                    moltin.Cart().Items().then(function(response){
						vm.cart = response.data;
						$rootScope.$broadcast("cartChange", vm.cart);
						vm.loading = false;
						$scope.$digest();
					});
                });
			else {
				//vm.product.quantity = vm.quantity;
				vm.cartItem = angular.copy(vm.product);
				moltin.Cart().AddProduct(vm.product.id, vm.quantity).then(function (cart) {
					moltin.Cart().Items().then(function(response){
						vm.cart = response.data;
						$rootScope.$broadcast("cartChange", vm.cart);
						vm.loading = false;
						$scope.$digest();
					});
				});
			}
        }
	}]);
	
})();