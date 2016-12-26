(function(){
	
	var module = angular.module("track");
	
	module.controller("trackController", ["$rootScope", "trackService", function ($rootScope, trackService) {
		var vm = this;
		vm.name = "track";
	}]);
	
})();