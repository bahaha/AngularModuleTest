define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_799',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 799');
    	$scope.test = TestService.getTest()
    }]);
});
