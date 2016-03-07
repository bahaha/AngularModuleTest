define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_596',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 596');
    	$scope.test = TestService.getTest()
    }]);
});
