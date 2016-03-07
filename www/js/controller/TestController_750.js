define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_750',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 750');
    	$scope.test = TestService.getTest()
    }]);
});
