(function(){
	
	var module = angular.module("track");
	
	module.factory("trackService", ["$http", function($http) {
	    return {
	        getStatus: function (orderId) {
	            return $http.get("http://youngandenergetic.com:7000/status/" + orderId);
	        }
	    };
	}]);	
})();
