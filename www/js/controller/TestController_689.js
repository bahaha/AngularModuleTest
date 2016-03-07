define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_689',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 689');
    	$scope.test = TestService.getTest()
    }]);
});
