define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_278',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 278');
    	$scope.test = TestService.getTest()
    }]);
});
