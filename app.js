(function(){
	
	var myApp = angular.module("myApp", [
		"ui.router",
		"ui.bootstrap",
		"ngAnimate",
        "ngSanitize",
		"header",
		"home",
        "productDetails",
        "shop",
        "contact",
        "cart",
		"footer"
	]).factory("labelService", ["$http", function($http) {
        var labelService = {
            labels: {},
             getLabels: function() {
                 return $http.get("common/labels.json").then(function(res) {
                     labelService.labels = res.data;
                 });
             }
         };
        
        return labelService;
    }]).value("cart", []);
	
	angular.element(document).ready(function() {
		angular.bootstrap(document.body,["myApp"]);	
	});
	
})();