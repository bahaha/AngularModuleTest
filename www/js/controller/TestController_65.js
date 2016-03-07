define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_65',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 65');
    	$scope.test = TestService.getTest()
    }]);
});
