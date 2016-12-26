(function(){
	
	var module = angular.module("checkout");
	
	module.factory("checkoutService", ["$http", function($http) {
	    return {
	        getTaxDetails: function () {
	            return $http.get("common/taxes.json").then(function(res){
	                return res.data;
	            });
	        },
	        getStates: function () {
	            return $http.get("common/states.json").then(function (res) {
	                return res.data;
	            });
	        }
	    };
	}]);
	
})();