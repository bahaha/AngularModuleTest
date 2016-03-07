define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_172',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 172');
    	$scope.test = TestService.getTest()
    }]);
});
