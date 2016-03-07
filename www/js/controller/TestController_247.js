define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_247',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 247');
    	$scope.test = TestService.getTest()
    }]);
});
