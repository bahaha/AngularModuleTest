define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_776',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 776');
    	$scope.test = TestService.getTest()
    }]);
});
