define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_397',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 397');
    	$scope.test = TestService.getTest()
    }]);
});
