(function(){
	
	var module = angular.module("checkout");
	
	module.controller("checkoutController", ["$rootScope", "checkoutService", "cart", "labelService", "moltin", function ($rootScope, checkoutService, cart, labelService, moltin) {
		var vm = this;
		vm.name = "checkout";
		vm.labelService = labelService;
		vm.sameAddress = false;
		vm.visibility = { 'visibility': 'hidden' };
		vm.shippingInfo = {};
		vm.tempAddr = {};
		vm.billingInfo = {};
		vm.cart = moltin.Cart.Contents();
		vm.updateAddress = function () {
            vm.sameAddress = !vm.sameAddress;
            if (vm.sameAddress) {
                vm.visibility = { 'visibility': 'visible' };
                vm.tempAddr = angular.copy(vm.shippingInfo);
                vm.shippingInfo = angular.copy(vm.billingInfo);
            }
            else {
                vm.visibility = { 'visibility': 'hidden' };
                vm.shippingInfo = angular.copy(vm.tempAddr);
            }
		}
		vm.getCartTotal = function () {
		    var sum = 0;
		    for (var i = 0; i < Object.keys(vm.cart.contents).length; i++) {
		        sum += vm.cart.contents[Object.keys(vm.cart.contents)[i]].pricing.raw.without_tax * vm.cart.contents[Object.keys(vm.cart.contents)[i]].quantity;
		    }
		    return sum;
		}

		vm.getTax = function () {
		    var tax = 0;
		    for (var i = 0; i < Object.keys(vm.cart.contents).length; i++) {
		        tax += vm.cart.contents[Object.keys(vm.cart.contents)[i]].pricing.raw.tax * vm.cart.contents[Object.keys(vm.cart.contents)[i]].quantity;
		    }
		    return tax;
		}
	}]);
	
})();