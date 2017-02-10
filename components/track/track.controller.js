(function(){
	
	var module = angular.module("track");
	
	module.controller("trackController", ["$rootScope", "trackService", "moltin", function ($rootScope, trackService, moltin) {
		var vm = this;
		vm.name = "track";
		vm.orderId = "";
		vm.trackingId = "";
		vm.shipping = '';
		vm.loading = false;
		vm.getStatus = function () {
		    if (vm.orderId == "") {
		        vm.status = 'invalid';
				vm.trackingId = '';
				vm.shipping = '';
			}
		    else {
				vm.loading = true;
		        trackService.getStatus(vm.orderId).then(function (res) {
		            vm.status = res.data.status;
					vm.loading = false;
					vm.shipping = res.data.shipping;
					vm.trackingId = res.data.trackingId;
		        });
		    }
		}
	}]);
	
})();