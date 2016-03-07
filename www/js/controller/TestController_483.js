define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_483',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 483');
    	$scope.test = TestService.getTest()
    }]);
});
