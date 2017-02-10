(function(){
	
	var module = angular.module("confirmation");
	
	module.factory("confirmationService", ["$http", function($http) {
		 return {
			"error": "Something went wrong if this problem continues please contact us (kal@pentagrit.com).",
			"success": "Your Payment is successful and confirmation has been sent to your mail id.",
			"failure": "Your Payment has failed you can try again or if this problem continues please contact us (kal@pentagrit.com)."
		 };
	}]);
	
})();