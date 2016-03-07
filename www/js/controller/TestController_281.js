define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_281',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 281');
    	$scope.test = TestService.getTest()
    }]);
});
