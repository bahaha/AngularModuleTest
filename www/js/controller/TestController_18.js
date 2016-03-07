define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_18',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 18');
    	$scope.test = TestService.getTest()
    }]);
});
