define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_810',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 810');
    	$scope.test = TestService.getTest()
    }]);
});
