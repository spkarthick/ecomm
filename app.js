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
        "checkout",
		"footer",
        "track",
        "doc",
        "confirmation"
    ]).factory("labelService", ["$http", function ($http) {
        var labelService = {
            labels: {},
            getLabels: function () {
                return $http.get("common/labels.json").then(function (res) {
                    labelService.labels = res.data;
                });
            }
        };

        return labelService;
    }]).run(["$rootScope", function ($rootScope) {
        $rootScope.$on("$stateChangeStart", function () {
            $rootScope.loading = true;
        });
        $rootScope.$on("$stateChangeSuccess", function () {
            $rootScope.loading = false;
        });
    }])
    .value("moltin", new Moltin({ publicId: 'McSU5Se3OrwPcgKGn3dDJ7wpIVUpzyO88ynSPgyj1G' }));
	
	angular.element(document).ready(function () {
	    
	            angular.bootstrap(document.body, ["myApp"]);
	
	
	});
	
})();
