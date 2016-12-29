(function(){
	
	var module = angular.module("doc");
	
	module.controller("docController", ["$stateParams", "labelService", function ($stateParams, labelService) {
		var vm = this;
		vm.name = "doc";
		vm.document = $stateParams.document;
		var documents = {
		    "privacy": {
		        "title":"Privacy Policy",
		        "url":"common/documents/privacy.html"
		    },
		    "termsandcondition": {
		        "title": "Terms and Condition",
		        "url": "common/documents/terms.html"
		    },
		    "shipping": {
		        "title": "Shipping Policy",
		        "url": "common/documents/shipping.html"
		    }
		}
        vm.documentUrl = documents[vm.document];
	}]);
	
})();