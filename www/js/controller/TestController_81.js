define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_81',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 81');
    	$scope.test = TestService.getTest()
    }]);
});
