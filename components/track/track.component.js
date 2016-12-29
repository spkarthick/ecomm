(function(){
	var module = angular.module("track");
	
	module.component("track", {
		templateUrl: "components/track/track.html",
		controller: "trackController",
		controllerAs: "vm"
	});
})();