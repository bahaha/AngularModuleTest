define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_16',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 16');
    	$scope.test = TestService.getTest()
    }]);
});
