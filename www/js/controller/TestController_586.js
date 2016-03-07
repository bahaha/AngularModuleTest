define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_586',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 586');
    	$scope.test = TestService.getTest()
    }]);
});
