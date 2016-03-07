define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_915',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 915');
    	$scope.test = TestService.getTest()
    }]);
});
