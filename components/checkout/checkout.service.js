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
	        },
			generateCheckSum: function(data) {
				return $http({ 
					url: "http://staging.youngandenergetic.com:9000/generatechecksum",
					headers: {'content-type': 'application/json'},
					data: data,
					method: "POST"
				}).then(function (res) {
				debugger
	                return res.data;
	            });
			},
			getCustomer: function(id) {
				return $http({ 
					url: "http://staging.youngandenergetic.com:9000/customer/" + id,
					headers: {'content-type': 'application/json'},
					method: "GET"
				}).then(function (res) {
	                return res.data;
	            });
			}
	    };
	}]);
	
})();