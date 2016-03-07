define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_260',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 260');
    	$scope.test = TestService.getTest()
    }]);
});
