(function(){
	
	var module = angular.module("shop");
	
	module.factory("shopService", ["$q", "moltin", function ($q, moltin) {
		 return {
		     getProducts: function (slug) {
		         if (slug) {
					var defer = $q.defer();
		             moltin.Products.With(["files"]).Get(slug).then(function(response){
		                 defer.resolve(response);
		             });
					 return defer.promise;
		         }
		         else {
		             var defer = $q.defer();
		             moltin.Products.With(["files","categories"]).All().then(function(response){
		                 defer.resolve(response);
		             });
		             return defer.promise;
		         }
             }
         };
	}]);
	
})();