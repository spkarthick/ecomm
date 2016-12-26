(function(){
	
	var module = angular.module("header");
	
	module.controller("headerController", ["$scope", "headerService", "labelService", "cart", function ($scope, headerService, labelService, cart) {
		var vm = this;
		vm.name = "header";
        labelService.getLabels();
        vm.labelService = labelService;
        vm.cart = cart;
        $scope.$on("cartChange", function (evt, data) {
            vm.cart = data;
            $scope.$digest();
        })
	}]);
	
})();