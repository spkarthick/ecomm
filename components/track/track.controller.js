(function(){
	
	var module = angular.module("track");
	
	module.controller("trackController", ["$rootScope", "trackService", "moltin", function ($rootScope, trackService, moltin) {
		var vm = this;
		vm.name = "track";
		vm.orderId = "";
		vm.getStatus = function () {
		    if (vm.orderId == "")
		        vm.status = 'invalid';
		    else {
		        trackService.getStatus(vm.orderId).then(function (res) {
		            vm.status = res.data.status;
		        });
		    }
		}
	}]);
	
})();