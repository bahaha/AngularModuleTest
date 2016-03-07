define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_996',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 996');
    	$scope.test = TestService.getTest()
    }]);
});
