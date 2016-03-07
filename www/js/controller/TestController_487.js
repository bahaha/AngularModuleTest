define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_487',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 487');
    	$scope.test = TestService.getTest()
    }]);
});
