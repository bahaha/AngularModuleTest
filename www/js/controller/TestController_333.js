define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_333',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 333');
    	$scope.test = TestService.getTest()
    }]);
});
