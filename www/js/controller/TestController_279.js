define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_279',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 279');
    	$scope.test = TestService.getTest()
    }]);
});
