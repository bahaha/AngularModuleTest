define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_471',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 471');
    	$scope.test = TestService.getTest()
    }]);
});
