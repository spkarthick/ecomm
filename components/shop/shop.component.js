(function(){
	var module = angular.module("shop");
	
	module.component("shop", {
		templateUrl: "components/shop/shop.html",
		controller: "shopController",
		controllerAs: "vm",
        bindings: {
            "showFeatured": "<"
        },
        bindToController: true
	});
})();