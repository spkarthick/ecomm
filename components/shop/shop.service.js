(function(){
	
	var module = angular.module("shop");
	
	module.factory("shopService", ["$http", function($http) {
		 return {
             getProducts: function() {
                 return $http.get("common/products.json").then(function(res){
                     return res.data;
                 });
             }
         };
	}]);
	
})();