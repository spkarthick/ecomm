(function () {

    var module = angular.module("checkout");

    module.controller("checkoutController", ["$rootScope", "$scope", "checkoutService", "cart", "labelService", "moltin", function ($rootScope, $scope, checkoutService, cart, labelService, moltin) {
        var vm = this;
        vm.name = "checkout";
        vm.labelService = labelService;
        vm.sameAddress = false;
        vm.agree = "no";
        vm.visibility = { 'visibility': 'hidden' };
        vm.agreeCheckStyle = { 'visibility': 'hidden' }
        vm.shippingInfo = {};
        vm.tempAddr = {};
        vm.billingInfo = {};
		vm.customerid = '';
        moltin.Cart().Items().then(function(response){
			vm.cart = response.data;
			$scope.$digest();
		});
		vm.checkCustomer = function () {
			checkoutService.getCustomer(vm.customerid).then(function(data){
				if(data.error) {
					vm.invalidCustomerId = true;
				}
				else {
					vm.billingInfo.firstName = data.firstName;
					vm.billingInfo.lastName = data.lastName;
					vm.billingInfo.email = data.email;
					vm.shippingInfo.firstName = data.firstName;
					vm.shippingInfo.lastName = data.lastName;
				}
			});
		}
        vm.makePayment = function () {
			vm.loading = true;
            moltin.Cart.Checkout(vm.customerid, {
				first_name: vm.billingInfo.firstName,
				last_name: vm.billingInfo.lastName,
				line_1: vm.billingInfo.streetAddressLine1,
				city: vm.billingInfo.city,
				county: vm.billingInfo.stateId,
				country: 'IN',
				postcode: vm.billingInfo.postalCode,
				phone: vm.billingInfo.phone
			}, {
				first_name: vm.shippingInfo.firstName,
				last_name: vm.shippingInfo.lastName,
				line_1: vm.shippingInfo.streetAddressLine1,
				city: vm.shippingInfo.city,
				county: vm.shippingInfo.stateId,
				country: 'IN',
				postcode: vm.shippingInfo.postalCode,
				phone: vm.shippingInfo.phone
			}).then(function (order) {
				//moltin.Cart.Delete(function () {
					
				var form = '<form action="https://secure.paytm.in/oltp-web/processTransaction" method="POST"><div><input name="REQUEST_TYPE" type="text" type="hidden" value="DEFAULT"/><input name="MID" type="text" type="hidden" value="Pentag46972444763247"/><input name="ORDER_ID" type="text" type="hidden" value="' + order.id + '"/><input name="CUST_ID" type="text" type="hidden" value="' + order.customer.data.id + '"/><input name="TXN_AMOUNT" type="text" type="hidden" value="' + order.totals.total.raw + '"/><input name="CHANNEL_ID" type="text" type="hidden" value="WEB"/><input name="INDUSTRY_TYPE_ID" type="text" type="hidden" value="Retail109"/><input name="WEBSITE" type="text" type="hidden" value="PentagWEB"/><input name="CALLBACK_URL" type="text" type="hidden" value="http://youngandenergetic.com:7000/payment"/></div></form>';
				//$(form).appendTo('body').submit();
				var unindexed_array = $(form).serializeArray();
				var indexed_array = {};

				$.map(unindexed_array, function(n, i){
					indexed_array[n['name']] = n['value'];
				});
				checkoutService.generateCheckSum(indexed_array).then(function(data){
					$(form).append('<input name="CHECKSUMHASH" type="text" type="hidden" value="'+ data +'"/>').appendTo('body').submit();
				});
				
				//}, function (error) {
					// Something went wrong...
				//});
			});
        }
        vm.updateAgree = function () {
            if (vm.agree == 'yes') {
                vm.agree = 'no';
                vm.agreeCheckStyle = { 'visibility': 'hidden' };
            }
            else {
                vm.agree = 'yes';
                vm.agreeCheckStyle = { 'visibility': 'visible' };
            }
        }
        vm.updateAddress = function () {
            vm.sameAddress = !vm.sameAddress;
            if (vm.sameAddress) {
                vm.visibility = { 'visibility': 'visible' };
                vm.tempAddr = angular.copy(vm.shippingInfo);
                vm.shippingInfo = angular.copy(vm.billingInfo);
            }
            else {
                vm.visibility = { 'visibility': 'hidden' };
                vm.shippingInfo = angular.copy(vm.tempAddr);
            }
        }
        vm.getCartTotal = function () {
            var sum = 0;
			if(vm.cart) {
				for (var i = 0; i < vm.cart.length; i++) {
					sum += vm.cart[i].value.amount * vm.cart[i].quantity;
				}
			}
            return sum;
        }

        /*vm.getTax = function () {
            var tax = 0;
            for (var i = 0; i < vm.cart.length; i++) {
                tax += vm.cart[i].value.amount;
            }
            return tax;
        }*/

        vm.states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
        ];
    }]);

})();