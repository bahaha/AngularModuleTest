define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_49',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 49');
    	$scope.test = TestService.getTest()
    }]);
});
