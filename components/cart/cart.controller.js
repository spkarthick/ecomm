(function(){
	
	var module = angular.module("cart");
	
    module.controller("cartController", ["$scope", "$rootScope", "cartService", "labelService", "cart", "moltin", function ($scope, $rootScope, cartService, labelService, cart, moltin) {
		var vm = this;
		vm.name = "cart";
		vm.cart = moltin.Cart.Contents();
		vm.labelService = labelService;
		vm.updateQuantity = function (key, qty, amt) {
		    vm.cart.contents[key].updating = true;
		    if (qty + amt > 0) {
		        moltin.Cart.Update(key, {
		            quantity: qty + amt
		        }, function (item) {
		            vm.cart = moltin.Cart.Contents();
		            vm.cart.contents[key].updating = false;
		            $rootScope.$broadcast("cartChange", vm.cart);
                    $scope.$digest();
		        }, function (error) {
		            // Something went wrong...
		        });
		    }
		    else
		        vm.cart.contents[key].updating = false;
		}
		vm.getCartTotal = function () {
		    var sum = 0;
		    for (var i = 0; i < Object.keys(vm.cart.contents).length; i++) {
		        sum += vm.cart.contents[Object.keys(vm.cart.contents)[i]].pricing.raw.without_tax * vm.cart.contents[Object.keys(vm.cart.contents)[i]].quantity;
		    }
		    return sum;
		}

		vm.removeItem = function (key) {
		    vm.cart.contents[key].updating = true;
		    moltin.Cart.Remove(key, function () {
		        vm.cart = moltin.Cart.Contents();
		        $rootScope.$broadcast("cartChange", vm.cart);
		        $scope.$digest();
		    }, function (error) {
		        // Something went wrong...
		    });
		}
	}]);
	
})();