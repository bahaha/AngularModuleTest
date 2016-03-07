define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_13',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 13');
    	$scope.test = TestService.getTest()
    }]);
});
