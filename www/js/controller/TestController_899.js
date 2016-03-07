define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_899',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 899');
    	$scope.test = TestService.getTest()
    }]);
});
