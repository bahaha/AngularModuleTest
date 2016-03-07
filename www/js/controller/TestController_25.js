define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_25',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 25');
    	$scope.test = TestService.getTest()
    }]);
});
