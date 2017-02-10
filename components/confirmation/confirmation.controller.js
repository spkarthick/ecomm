(function(){
	
	var module = angular.module("confirmation");
	
	module.controller("confirmationController", ["$scope", "$rootScope", "$stateParams", "confirmationService", "moltin", function($scope, $rootScope, $stateParams, confirmationService, moltin) {
		var vm = this;
		vm.name = "confirmation";
		vm.status = $stateParams.status;
		vm.message = confirmationService[$stateParams.status];
		vm.transactionId = $stateParams.transactionId;
		vm.orderId = $stateParams.orderId;
		if($stateParams.status == "success") {
			moltin.Cart.Delete(function() {
				angular.module("myApp").value("cart", moltin.Cart.Contents());
				$rootScope.$broadcast("cartChange", vm.cart);
				$scope.$digest();
			}, function(error) {
				angular.module("myApp").value("cart", moltin.Cart.Contents());
				$rootScope.$broadcast("cartChange", vm.cart);
				$scope.$digest();
			});
		}
	}]);
	
})();