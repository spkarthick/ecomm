(function () {

    var module = angular.module("checkout");

    module.controller("checkoutController", ["$rootScope", "checkoutService", "cart", "labelService", "moltin", function ($rootScope, checkoutService, cart, labelService, moltin) {
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
        vm.cart = moltin.Cart.Contents();
        vm.makePayment = function () {
            moltin.Cart.Complete({
                customer: {
                    first_name: vm.billingInfo.firstName,
                    last_name: vm.billingInfo.lastName || "",
                    email: vm.billingInfo.email
                },
                shipping: 'dtdc',
                gateway: 'manual',
                bill_to: {
                    first_name: vm.billingInfo.firstName,
                    last_name: vm.billingInfo.lastName,
                    address_1: vm.billingInfo.streetAddressLine1,
                    city: vm.billingInfo.city,
                    county: vm.billingInfo.stateId,
                    country: 'IN',
                    postcode: vm.billingInfo.postalCode,
                    phone: vm.billingInfo.phone
                },
                ship_to: {
                    first_name: vm.shippingInfo.firstName,
                    last_name: vm.shippingInfo.lastName,
                    address_1: vm.shippingInfo.streetAddressLine1,
                    city: vm.shippingInfo.city,
                    county: vm.shippingInfo.stateId,
                    country: 'IN',
                    postcode: vm.shippingInfo.postalCode,
                    phone: vm.shippingInfo.phone
                },
            }, function (order) {
                moltin.Cart.Delete(function () {
                    var form = '<form action="https://pguat.paytm.com/oltp-web/processTransaction" method="POST"><div><input name="REQUEST_TYPE" type="text" type="hidden" value="DEFAULT"/><input name="MID" type="text" type="hidden" value=""/><input name="ORDER_ID" type="text" type="hidden" value="' + order.id + '"/><input name="CUST_ID" type="text" type="hidden" value="' + order.customer.data.id + '"/><input name="TXN_AMOUNT" type="text" type="hidden" value="' + order.totals.total.raw + '"/><input name="CHANNEL_ID" type="text" type="hidden" value="WEB"/><input name="INDUSTRY_TYPE_ID" type="text" type="hidden" value=""/><input name="WEBSITE" type="text" type="hidden" value=""/><input name="CHECKSUMHASH" type="text" type="hidden" value=""/><input name="MOBILE_NO" type="text" type="hidden" value="' + vm.billingInfo.phone + '"/><input name="EMAIL" type="text" type="hidden" value="' + vm.billingInfo.email + '"/><input name="EMAIL" type="text" type="hidden" value="http://localhost:9000/#/confirmation"/></div></form>';
                    $(form).appendTo('body').submit();
                }, function (error) {
                    // Something went wrong...
                });
            }, function (error) {
                // Something went wrong...
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
            for (var i = 0; i < Object.keys(vm.cart.contents).length; i++) {
                sum += vm.cart.contents[Object.keys(vm.cart.contents)[i]].pricing.raw.without_tax * vm.cart.contents[Object.keys(vm.cart.contents)[i]].quantity;
            }
            return sum;
        }

        vm.getTax = function () {
            var tax = 0;
            for (var i = 0; i < Object.keys(vm.cart.contents).length; i++) {
                tax += vm.cart.contents[Object.keys(vm.cart.contents)[i]].pricing.raw.tax * vm.cart.contents[Object.keys(vm.cart.contents)[i]].quantity;
            }
            return tax;
        }

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