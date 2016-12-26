(function(){
	
	var module = angular.module("shop");
	
	module.factory("shopService", ["$q", "moltin", function ($q, moltin) {
		 return {
		     getProducts: function (slug) {
		         if (slug) {
		             return moltin.Product.Find({ slug: slug })[0];
		         }
		         else {
		             var defer = $q.defer();
		             moltin.Product.List(null, function (product) {
		                 defer.resolve(product);
		             }, function (error) {
		                 defer.reject(error);
		             });
		             return defer.promise;
		         }
             }
         };
	}]);
	
})();