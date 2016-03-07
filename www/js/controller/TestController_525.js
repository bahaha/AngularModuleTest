define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_525',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 525');
    	$scope.test = TestService.getTest()
    }]);
});
