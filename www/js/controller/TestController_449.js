define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_449',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 449');
    	$scope.test = TestService.getTest()
    }]);
});
