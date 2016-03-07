define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_55',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 55');
    	$scope.test = TestService.getTest()
    }]);
});
