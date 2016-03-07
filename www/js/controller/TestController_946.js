define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_946',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 946');
    	$scope.test = TestService.getTest()
    }]);
});
