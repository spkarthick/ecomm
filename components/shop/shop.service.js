(function(){
	
	var module = angular.module("shop");
	
	module.factory("shopService", ["$q", "moltin", function ($q, moltin) {
		 return {
		     getProducts: function (slug) {
		         if (slug) {
					var defer = $q.defer();
		             moltin.Products.Get(slug).then(function(response){
		                 defer.resolve(response.data);
		             });
					 return defer.promise;
		         }
		         else {
		             var defer = $q.defer();
		             moltin.Products.All().then(function(response){
		                 defer.resolve(response.data);
		             });
		             return defer.promise;
		         }
             }
         };
	}]);
	
})();