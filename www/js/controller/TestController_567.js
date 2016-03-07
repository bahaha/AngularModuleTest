define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_567',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 567');
    	$scope.test = TestService.getTest()
    }]);
});
