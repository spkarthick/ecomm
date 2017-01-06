(function(){
	
	var module = angular.module("track");
	
	module.factory("trackService", ["$http", function($http) {
	    return {
	        getStatus: function (orderId) {
	            return $http.get("http://localhost:7000/status/" + orderId);
	        }
	    };
	}]);
	
})();