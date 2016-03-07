define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_350',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 350');
    	$scope.test = TestService.getTest()
    }]);
});
