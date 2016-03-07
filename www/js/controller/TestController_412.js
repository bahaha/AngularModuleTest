define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_412',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 412');
    	$scope.test = TestService.getTest()
    }]);
});
