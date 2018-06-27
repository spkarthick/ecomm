(function(){
	
	var module = angular.module("cart");
	
    module.controller("cartController", ["$scope", "$rootScope", "cartService", "labelService", "cart", "moltin", function ($scope, $rootScope, cartService, labelService, cart, moltin) {
		var vm = this;
		vm.name = "cart";
		moltin.Cart().Items().then(function(response){
			vm.cart = response.data;
			$scope.$digest();
		});
		vm.labelService = labelService;
		vm.updateQuantity = function (key, qty, amt) {
		    vm.cart[key].updating = true;
		    if (qty + amt > 0) {
		        moltin.Cart.Update(key, {
		            quantity: qty + amt
		        }, function (item) {
		            moltin.Cart().Items().then(function(response){
						vm.cart = response.data;
						vm.cart[key].updating = false;
						$rootScope.$broadcast("cartChange", vm.cart);
						$scope.$digest();
					});
		            
		        }, function (error) {
		            // Something went wrong...
		        });
		    }
		    else
		        vm.cart[key].updating = false;
		}
		vm.getCartTotal = function () {
		    var sum = 0;
		    for (var i = 0; i < vm.cart.length; i++) {
		        sum += vm.cart[i].value.amount * vm.cart[i].quantity;
		    }
		    return sum;
		}

		vm.removeItem = function (key) {
		    vm.cart[key].updating = true;
		    moltin.Cart().UpdateItemQuantity(vm.cart[key].id, 0).then(function (item) {
		        moltin.Cart().Items().then(function(response){
					vm.cart = response.data;
					$rootScope.$broadcast("cartChange", vm.cart);
					$scope.$digest();
				});
		    }, function (error) {
		        // Something went wrong...
		    });
		}
	}]);
	
})();