define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_864',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 864');
    	$scope.test = TestService.getTest()
    }]);
});
