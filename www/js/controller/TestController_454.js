define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_454',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 454');
    	$scope.test = TestService.getTest()
    }]);
});
