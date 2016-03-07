define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_43',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 43');
    	$scope.test = TestService.getTest()
    }]);
});
