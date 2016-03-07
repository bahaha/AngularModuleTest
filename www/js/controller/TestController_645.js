define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_645',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 645');
    	$scope.test = TestService.getTest()
    }]);
});
