define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_659',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 659');
    	$scope.test = TestService.getTest()
    }]);
});
